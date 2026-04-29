import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const exts = new Set(['.html','.css','.js','.json','.md','.csv']);
const refs = new Set();

function walk(dir, files=[]) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

for (const file of walk(root)) {
  if (!exts.has(path.extname(file).toLowerCase())) continue;
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/['"](assets\/[^'"\s)]+)['"]/g)) refs.add(m[1]);
  for (const m of text.matchAll(/url\((?:['"]?)(assets\/[^'"\s)]+)(?:['"]?)\)/g)) refs.add(m[1]);
}

let ok = true;
for (const ref of [...refs].sort()) {
  const full = path.join(root, ref);
  if (!fs.existsSync(full)) {
    console.error(`[missing] ${ref}`);
    ok = false;
  }
}

const statusPath = path.join(root, 'assets/data/production_asset_status.json');
if (fs.existsSync(statusPath)) {
  const status = JSON.parse(fs.readFileSync(statusPath, 'utf8'));
  for (const asset of status.assets || []) {
    const full = path.join(root, asset.path);
    if (!fs.existsSync(full)) {
      console.error(`[missing production status asset] ${asset.path}`);
      ok = false;
    }
  }
}

if (ok) console.log(`Asset check passed. ${refs.size} referenced assets exist.`);
else process.exit(1);
