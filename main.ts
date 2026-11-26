import { mkdirSync, writeFileSync } from "node:fs";

// Rejected Olympic Sports — one funny single-line sport the Olympics turned down.
// The line reads like a real broadcast event listing: a named sport, the setup,
// then the scoring twist that makes it absurd, all in one read.
const ENTRY =
  "Competitive umbrella sharing: two strangers share one umbrella in a storm while judges score posture, small talk, and who gets wet first.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line and nothing else. Refuse to write anything that breaks it.
const line = ENTRY.trim();
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
