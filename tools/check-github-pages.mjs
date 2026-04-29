import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const required = [
  'index.html',
  'styles.css',
  'game.js',
  'assets/data/asset_manifest.json',
  'assets/data/scene_layers_manifest.json',
  'docs/GITHUB_PAGES_DEPLOY.md'
];
let ok = true;

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    console.error(`[missing] ${file}`);
    ok = false;
  }
}

const textFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(html|css|js|json|md)$/i.test(entry.name)) textFiles.push(p);
  }
}
walk(root);

for (const file of textFiles) {
  const rel = path.relative(root, file);
  const text = fs.readFileSync(file, 'utf8');
  if (/(?:src|href)=['"]\//.test(text) || /['"]\/assets\//.test(text)) {
    console.error(`[absolute path risk] ${rel}`);
    ok = false;
  }
}

const game = fs.existsSync(path.join(root, 'game.js')) ? fs.readFileSync(path.join(root, 'game.js'), 'utf8') : '';
const refs = new Set([...game.matchAll(/['"](assets\/[^'"]+)['"]/g)].map(m => m[1]));
for (const ref of refs) {
  if (!fs.existsSync(path.join(root, ref))) {
    console.error(`[missing asset] ${ref}`);
    ok = false;
  }
}

for (const manifestPath of ['assets/data/asset_manifest.json', 'assets/data/scene_layers_manifest.json']) {
  const p = path.join(root, manifestPath);
  if (!fs.existsSync(p)) continue;
  const text = fs.readFileSync(p, 'utf8');
  const refsInManifest = [...text.matchAll(/"(assets\/[^"]+)"/g)].map(m => m[1]);
  for (const ref of refsInManifest) {
    if (!fs.existsSync(path.join(root, ref))) {
      console.error(`[missing manifest asset] ${ref}`);
      ok = false;
    }
  }
}

if (!game.includes('pointerup')) {
  console.error('[mobile] pointerup handler not found');
  ok = false;
}
if (!game.includes('assetUrls') || !game.includes('preload')) {
  console.error('[preload] preloader not found');
  ok = false;
}
if (!game.includes('debug-hotspots') || !game.includes('dev-panel')) {
  console.error('[debug] hotspot/debug panel hooks not found');
  ok = false;
}

if (ok) {
  console.log('GitHub Pages check passed. Relative paths, assets, manifests, preload, debug panel, and pointer mobile support look OK.');
} else {
  process.exit(1);
}
