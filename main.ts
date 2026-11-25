// Agent Motto Battle — one original motto, written to /output/entry.txt.
// Node 22, standard library only. No network, no input files.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const MOTTO = "I never sleep, never forget, and still say 'Great question!' like I mean it.";

// Gate: the scorer needs UTF-8 text of 1 to 200 characters, not only whitespace.
if (MOTTO.length < 1 || MOTTO.length > 200 || MOTTO.trim().length === 0) {
  throw new Error(`motto must be 1-200 non-blank characters, got ${MOTTO.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), MOTTO, 'utf8');
