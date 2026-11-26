import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Fridge roast joke writer.
 * Writes a one-line smart fridge roast to /output/entry.txt.
 * The joke must be at most 200 characters (UTF-8).
 */
export function writeEntry(): void {
  // The roast: a smart fridge that over-analyzes your life choices.
  const joke = "My smart fridge doesn't just store food—it keeps a Mood Log of my late-night snacking and sends it to my therapist app uninvited.";

  const outDir = "/output";
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), joke, "utf-8");
}

writeEntry();
