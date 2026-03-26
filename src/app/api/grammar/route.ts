import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `
You are an expert Grammar and Style Checker.
Your task is to analyze the provided text for:
1. Grammar errors (subject-verb agreement, tense consistency, etc.)
2. Spelling mistakes.
3. Punctuation errors.
4. Style and readability issues (passive voice, wordiness, unclear phrasing).

Return a JSON object with the following structure:
{
  "correctedText": "The full text with all corrections applied.",
  "errors": [
    {
      "original": "problematic portion of text",
      "replacement": "suggested fix",
      "explanation": "concise explanation of the error",
      "type": "grammar" | "spelling" | "punctuation" | "style"
    }
  ]
}

If no errors are found, return an empty errors array and the original text as correctedText.
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
        { role: "user", content: `Analyze the following text for grammar, spelling, and style. Return ONLY a JSON object. \n\n"${text}"` }
      ],
      temperature: 0.2,
      response_format: { type: "json_object" }
    });

    const resultString = completion.choices[0]?.message?.content;
    if (!resultString) {
      throw new Error("Empty response from AI");
    }

    const result = JSON.parse(resultString);
    return NextResponse.json(result);

  } catch (err) {
    console.error("Grammar API Error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Grammar check failed." },
      { status: 500 }
    );
  }
}
