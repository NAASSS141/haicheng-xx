import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const game = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
const hotspotBlock = game.match(/hotspots:\{([\s\S]*?)\n \},\n dlg:/);
let ok = true;
const warnings = [];

if (!hotspotBlock) {
  console.error('[parse] Could not locate hotspots block in game.js');
  process.exit(1);
}

const re = /(\w+):\{label:'([^']+)',x:([0-9.]+),y:([0-9.]+),w:([0-9.]+),h:([0-9.]+)/g;
for (const m of hotspotBlock[1].matchAll(re)) {
  const [, id, label, x, y, w, h] = m;
  const ww = Number(w), hh = Number(h);
  if (ww < 8 || hh < 8) {
    warnings.push(`${id} (${label}) ${ww}x${hh}% at ${x},${y}`);
  }
}

if (!game.includes("addEventListener('pointerup'") && !game.includes('addEventListener("pointerup"')) {
  console.error('[mobile] pointerup event binding not found');
  ok = false;
}

const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
if (!css.includes('touch-action:manipulation')) {
  console.error('[mobile] touch-action: manipulation not found');
  ok = false;
}

if (warnings.length) {
  console.warn('[touch target warnings] These hotspots are smaller than the 8% recommendation:');
  for (const w of warnings) console.warn(' - ' + w);
  console.warn('Warnings are allowed for desktop, but review on mobile with 热区 debug mode.');
}

if (ok) console.log('Touch target check completed. Pointer/touch support found.');
else process.exit(1);
