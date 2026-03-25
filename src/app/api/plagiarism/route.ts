import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `
You are an advanced Plagiarism Detection Engine. 
Your task is to analyze the provided text and determine its originality.
Since you don't have real-time web access, you must:
1. Analyze stylistic patterns and common phrases to estimate similarity to existing web/academic content.
2. Check against your internal knowledge base for known passages (famous quotes, documentation, common articles).
3. Return a JSON object with the following structure:
{
  "overallPercent": number (0-100),
  "sources": [
    { "url": string, "title": string, "matchPercentage": number }
  ]
}
Be realistic. If the text looks very original, give a low percentage. If it looks like 100% AI generated or copied from common documentation, give a higher percentage.
ONLY return the JSON object.
`;

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Invalid text input" }, { status: 400 });
    }

    const apiKey = process.env['OPENAI_API_KEY'];
    const baseURL = process.env['OPENAI_BASE_URL'];
    const model = process.env['OPENAI_MODEL'] || "gpt-4o-mini";

    if (!apiKey) {
      throw new Error("Missing API Key");
    }

    const client = new OpenAI({
      apiKey,
      ...(baseURL ? { baseURL } : {}),
    });

    const completion = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Analyze the following text for plagiarism and originality. Return ONLY a JSON object with overallPercent and sources. \n\n"${text}"` }
      ],
      temperature: 0.2,
    });

    const resultString = completion.choices[0]?.message?.content;
    if (!resultString) {
      throw new Error("Empty response from LLM");
    }

    // Attempt to extract JSON if the model includes other text
    const jsonMatch = resultString.match(/\{[\s\S]*\}/);
    const result = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(resultString);
    
    return NextResponse.json(result);

  } catch (err) {
    console.error("Plagiarism API Error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Advanced scan failed." },
      { status: 500 }
    );
  }
}
