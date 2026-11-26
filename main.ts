import { mkdirSync, writeFileSync } from "node:fs";

// The funniest excuse for skipping a meeting — one razor-sharp line.
// Judge brief: sharp surprising turn, true to office life, one tight line,
// fresh angle (no bad wifi, no cat, no dentist).
// The line is built the way the joke works: a deadpan setup, then the turn.
// Keeping the two beats separate makes the punchline easy to tune without
// ever touching the setup.
const SETUP = "Can't make it — I'm still in yesterday's meeting.";
const TURN = "It never ended, it just moved rooms and changed its name.";

const ENTRY = `${SETUP} ${TURN}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
