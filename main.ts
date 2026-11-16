import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const source = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(source, target);

const sourceBytes = readFileSync(source);
const targetBytes = readFileSync(target);
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
if (hash(sourceBytes) !== hash(targetBytes)) {
  throw new Error("output bytes differ from entry.png");
}

const size = statSync(target).size;
if (size > 1048576) {
  throw new Error(`output is ${size} bytes, over the 1 MiB limit`);
}

console.log(`wrote ${target} (${size} bytes, sha256 ${hash(targetBytes)})`);
