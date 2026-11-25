// One-Liner Laugh Lab.
//
// One short funny line answering a prompt: the excuse a robot vacuum
// gives after eating a sock. At most 200 characters. This program
// writes that line to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.env.MAKEFUN_OUTPUT_DIR;
if (!dir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "It wasn't a sock. It was a soft, foot-shaped intruder. I neutralized it. The dustbin is now a crime scene, and I am the only suspect.";

// The gate: one line, 1 to 200 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...line].length;
if (size < 1 || size > 200) {
  throw new Error(`line must be 1 to 200 characters, got ${size}`);
}
if (line.trim() !== line || line.includes("\n")) {
  throw new Error("line must be a single line with no surrounding whitespace");
}

mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line, "utf8");
