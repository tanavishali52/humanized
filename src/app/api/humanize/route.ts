import { NextResponse } from "next/server";
import { humanizeText } from "@/lib/humanizer/humanizer.service";
import type { HumanizationStrength } from "@/lib/humanizer/strengthConfig";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      text?: unknown;
      strength?: unknown;
      passes?: unknown;
    };

    const text = typeof body.text === "string" ? body.text : "";
    if (!text.trim()) {
      return NextResponse.json({ error: "Missing or empty `text`." }, { status: 400 });
    }

    const strengthRaw = body.strength;
    const strength: HumanizationStrength =
      strengthRaw === "low" || strengthRaw === "high" || strengthRaw === "medium"
        ? strengthRaw
        : "medium";

    const passesNum = typeof body.passes === "number" ? body.passes : undefined;
    const passes = passesNum === 1 || passesNum === 2 || passesNum === 3 ? passesNum : undefined;

    const result = await humanizeText(text, strength, { passes: passes ?? 3 });
    return NextResponse.json({ result });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

