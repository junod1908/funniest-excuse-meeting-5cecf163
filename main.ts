import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse for skipping a meeting — one razor-sharp line.
// Judge brief: sharp surprising turn, true to office life, one tight line,
// fresh angle (no bad wifi, no cat, no dentist).
const ENTRY =
  "Can't make it — I'm still in yesterday's meeting. It never ended, it just moved rooms and changed its name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
