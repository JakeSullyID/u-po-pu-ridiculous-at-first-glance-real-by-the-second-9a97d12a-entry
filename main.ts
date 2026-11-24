import * as fs from 'node:fs';
import * as path from 'node:path';

// This script offers recycled airport runway rubber repurposed as heavy-duty flooring for elite CrossFit box facilities.
// The business logic succeeds because box owners urgently require indestructible shock absorption that prevents barbell drops from fracturing concrete floors.

const sentence = "We sell high-impact vulcanized runway crumb rubber to boutique CrossFit box owners who pay heavy retainers for indestructible flooring that survives Olympic barbell drops without cracking concrete.";

if (!sentence || sentence.length > 200) {
  console.error("Error: Pitch sentence is empty or exceeds 200 characters.");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), sentence, 'utf8');
