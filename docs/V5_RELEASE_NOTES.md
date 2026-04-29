# MVP v16 Release Notes

This build upgrades the playable prototype with raster-only visual assets.

## Key updates
- All scene-layer SVG assets removed and replaced with PNG layers.
- New high-quality generated background art inserted for: start, beach, workshop, market, lion teaser.
- Kept mobile touch input based on pointer events.
- Kept GitHub Pages safe relative paths.

## Verification checklist
- No ` vector-placeholder` references remain in runtime files.
- `index.html` only uses relative local assets.
- `game.js` passes `node --check`.
