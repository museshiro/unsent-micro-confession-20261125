import { mkdirSync, writeFileSync } from "node:fs";

// Two-part micro-confession: the addressee line, then the unsent line itself.
const TO = "To: my driving instructor";
const MESSAGE =
  "I failed my first test on purpose because I wasn't ready to stop our lessons.";

const entry = [TO, MESSAGE].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
