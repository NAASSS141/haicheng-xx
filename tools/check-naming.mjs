import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const allowed = /^[a-z0-9_.\-]+$/;
const assetRoot = path.join(root, 'assets');
let ok = true;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    const rel = path.relative(root, p);
    if (!allowed.test(entry.name)) {
      console.error(`[bad name] ${rel}`);
      ok = false;
    }
    if (entry.isDirectory()) walk(p);
  }
}

if (!fs.existsSync(assetRoot)) {
  console.error('[missing] assets directory');
  process.exit(1);
}
walk(assetRoot);

if (ok) console.log('Naming check passed. Asset filenames are GitHub Pages friendly.');
else process.exit(1);
