// Unsent micro-confession: two parts, To: line + the unsent line as typed.
// Design: specific place/duration/object (parking garage, forty minutes,
// ice chips); the reason it stayed in drafts — too afraid to say sorry —
// is felt in the words, never stated. Not a joke, not a line written to send.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "To: my sister\nI practiced saying I was sorry in the hospital parking garage for forty minutes and then just asked if you wanted ice chips.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
