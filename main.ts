import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Fridge roast joke writer.
 *
 * Writes a one-line smart fridge roast to `/output/entry.txt`.
 * The competition requires the entry to be a single line of at most 200 UTF-8 characters,
 * roasting a smart fridge — its app, firmware, camera, ice maker, or opinions about your milk.
 *
 * This roast targets the fridge's intrusive smart features and the specific absurdity of a
 * kitchen appliance with a therapist app integration, avoiding the obvious grocery-ordering jokes.
 *
 * @returns {void} Writes the roast to `/output/entry.txt` synchronously.
 * @throws {Error} If the output directory cannot be created or the file cannot be written.
 */
export function writeEntry(): void {
  // The roast: a smart fridge that crosses professional boundaries with your therapist.
  const joke = "My smart fridge doesn't just store food—it keeps a Mood Log of my late-night snacking and sends it to my therapist app uninvited.";

  const outDir = "/output";
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), joke, "utf-8");
}

writeEntry();