import OpenAI from "openai";
import type { HumanizationStrength } from "./strengthConfig";
import { buildDeAiPrompt, buildHumanizePrompt, buildPolishPrompt } from "./promptBuilder";

const DEFAULT_MODEL = "gpt-4o-mini";
const GROQ_BASE_URL = "https://api.groq.com/openai/v1";

function getTemperature(strength: HumanizationStrength) {
  switch (strength) {
    case "low":
      return 0.65;
    case "high":
      return 0.85;
    case "medium":
    default:
      return 0.8;
  }
}

function maxOutputTokensFor(input: string) {
  // Rough heuristic; keeps output bounded while avoiding tiny truncations.
  const approxInputTokens = Math.ceil(input.length / 4);
  return Math.min(2048, Math.max(256, Math.floor(approxInputTokens * 1.1)));
}

async function callLLM({
  client,
  model,
  prompt,
  strength,
}: {
  client: OpenAI;
  model: string;
  prompt: string;
  strength: HumanizationStrength;
}) {
  const temperature = getTemperature(strength);
  const maxTokens = maxOutputTokensFor(prompt);

  const res = await client.chat.completions.create({
    model,
    messages: [
      {
        role: "system",
        content:
          "You are a careful writing assistant. Return ONLY the rewritten text with no explanations or headings.",
      },
      { role: "user", content: prompt },
    ],
    temperature,
    top_p: 0.9,
    max_tokens: maxTokens,
  });

  const content = res.choices?.[0]?.message?.content;
  if (!content) throw new Error("LLM returned empty content.");
  return content.trim();
}

export async function humanizeText(
  inputText: string,
  strength: HumanizationStrength = "medium",
  opts?: { passes?: 1 | 2 | 3 }
) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("Missing OPENAI_API_KEY in environment.");
  const baseURL = process.env.OPENAI_BASE_URL;

  if (apiKey.startsWith("gsk_") && !baseURL) {
    throw new Error(
      "Detected a Groq API key (gsk_...). Set OPENAI_BASE_URL=https://api.groq.com/openai/v1 and use a Groq model in OPENAI_MODEL."
    );
  }

  const passes = opts?.passes ?? 3;
  if (passes < 1 || passes > 3) throw new Error("passes must be 1, 2, or 3.");

  const client = new OpenAI({
    apiKey,
    ...(baseURL ? { baseURL } : {}),
  });
  const model =
    process.env.OPENAI_MODEL ??
    (apiKey.startsWith("gsk_") ? "llama-3.1-8b-instant" : DEFAULT_MODEL);

  const text = inputText.trim();
  if (!text) return "";

  // Pass pipeline semantics:
  // - passes=1 => humanize only
  // - passes=2 => de-AI + humanize
  // - passes=3 => de-AI + humanize + polish

  const pass1 =
    passes >= 2
      ? await callLLM({
          client,
          model,
          prompt: buildDeAiPrompt(text, strength),
          strength,
        })
      : text;

  const pass2 = await callLLM({
    client,
    model,
    prompt: buildHumanizePrompt(pass1, strength),
    strength,
  });

  if (passes === 1 || passes === 2) return pass2.trim();

  // Pass 3: polish (readability + smooth flow)
  return callLLM({
    client,
    model,
    prompt: buildPolishPrompt(pass2, strength),
    strength,
  });
}

