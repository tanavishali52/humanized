import { basePrompts } from "./promptLibrary";
import { strengthMap, type HumanizationStrength } from "./strengthConfig";

function getRandomBasePrompt() {
  return basePrompts[Math.floor(Math.random() * basePrompts.length)];
}

export function buildHumanizePrompt(text: string, strength: HumanizationStrength) {
  const randomBase = getRandomBasePrompt();
  const strengthInstruction = strengthMap[strength];

  // Note: we explicitly instruct to preserve meaning and keep key details.
  return [
    randomBase,
    "",
    strengthInstruction,
    "",
    "Guidelines:",
    "- Maintain the original meaning exactly.",
    "- Do not change facts, names, numbers, dates, or specific claims.",
    "- Vary sentence structure and length (short + medium + long).",
    "- Avoid repetitive or overly predictable phrasing.",
    "- Keep the tone natural and conversational (not robotic or overly formal).",
    "- If you would need to guess, keep the original phrasing instead.",
    "",
    "Text:",
    text,
  ].join("\n");
}

export function buildDeAiPrompt(text: string, strength: HumanizationStrength) {
  const strengthInstruction = strengthMap[strength];
  return [
    "Simplify the text and remove repetitive or robotic phrasing.",
    "Keep the meaning unchanged and preserve all key details.",
    "",
    strengthInstruction.includes("Strongly humanize")
      ? "Be more aggressive about pattern removal at high strength."
      : "Be measured about pattern removal so meaning stays intact.",
    "",
    "Text:",
    text,
  ].join("\n");
}

export function buildPolishPrompt(text: string, strength: HumanizationStrength) {
  const strengthInstruction = strengthMap[strength];
  return [
    "Improve readability and make the writing flow naturally, like a human wrote it.",
    "Keep meaning unchanged and preserve all key details.",
    "",
    strengthInstruction,
    "",
    "Text:",
    text,
  ].join("\n");
}

