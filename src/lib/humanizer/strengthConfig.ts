export type HumanizationStrength = "low" | "medium" | "high";

export const strengthMap: Record<HumanizationStrength, string> = {
  low: `Keep changes minimal.
  Slightly improve natural tone and readability.`,

  medium: `Use varied sentence structures.
  Improve flow and readability.
  Add mild conversational tone without drifting from the original meaning.`,

  high: `Strongly humanize the text.
  Break patterns more aggressively and vary phrasing.
  Add natural, human imperfections and transitions where appropriate.
  Use mixed sentence lengths and slightly more conversational wording.`,
};

