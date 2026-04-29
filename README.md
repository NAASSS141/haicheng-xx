# 海风把贝壳藏起来 MVP v16

版本定位：**美术生产接入版 + 发布前 QA 版**。

这是一个可直接静态部署到 GitHub Pages 的网页互动叙事游戏原型。当前图像为占位素材，流程、分镜、热点、轻谜题、触摸支持、QA 工具已接入。

## 1. 运行方式

直接打开：

```bash
index.html
```

或用任意静态服务器：

```bash
python3 -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 2. GitHub Pages 部署

本包已按 GitHub Pages 子路径部署设计：

- `index.html` 使用 `./styles.css` 和 `./game.js`。
- 运行素材路径使用 `assets/...` 相对路径。
- 不使用 `/assets/...` 绝对路径。
- 不依赖服务端路由。

把 zip 解压后的所有内容放到 GitHub Pages 发布目录即可。

## 3. 当前可玩流程

1. 开场点击贝壳。
2. 进入海边。
3. 点击旧信。
4. 读信后点击发光贝壳进入工坊。
5. 与老工匠互动。
6. 解锁工作台并完成贝壳拼图。
7. 进入夜粥街。
8. 点击空凳子坐下。
9. 点击粥锅完成做粥互动。
10. 进入鼓狮预告结尾。

## 4. 操作说明

- 鼠标点击或手机触摸均可。
- 移动端建议横屏。
- 竖屏会显示横屏提示。
- 点击左上角 `热区` 可显示可点击区域。
- 点击左上角 `QA` 可打开运行时检查面板。
- 键盘 `H` 切换热区调试。
- 键盘 `I` 切换 QA 面板。

## 5. v4 新增

- 美术素材替换指南。
- 图像生成批次表。
- 移动端触摸 QA 指南。
- 发布前 QA 清单。
- 缺失素材扫描脚本。
- 命名规范检查脚本。
- 移动端热区检查脚本。
- QA 报告生成脚本。
- 运行时 QA 面板增加 missing assets、absolute path、small hotspot warnings。

## 6. 检查命令

在解压根目录运行：

```bash
node --check game.js
node tools/check-github-pages.mjs
node tools/check-assets.mjs
node tools/check-naming.mjs
node tools/check-touch-targets.mjs
node tools/build-qa-report.mjs
```

## 7. 重要文件

| 文件 | 用途 |
|---|---|
| `index.html` | 入口文件 |
| `game.js` | 游戏逻辑 |
| `styles.css` | 样式与动画 |
| `assets/data/asset_manifest.json` | 资源清单 |
| `assets/data/scene_layers_manifest.json` | 场景图层清单 |
| `assets/data/production_asset_status.json` | 生产素材状态 |
| `assets/data/qa_manifest.json` | QA 配置说明 |
| `qa/asset_replacement_log.csv` | 素材替换记录模板 |
| `docs/ART_ASSET_REPLACEMENT_GUIDE.md` | 美术替换指南 |
| `docs/IMAGE_GENERATION_BATCHES.md` | 图像生成批次表 |
| `docs/MOBILE_TOUCH_QA.md` | 移动端触摸 QA |
| `docs/RELEASE_QA_CHECKLIST.md` | 发布前 QA 清单 |

## 8. 音频说明

当前版本没有强依赖真实音频。正式加入 BGM/SFX 时，必须填写：

```text
assets/audio/licenses/audio_license_registry.csv
```

音频只使用：

- CC0
- Public Domain
- 明确可商用
- 明确无需二次授权
- 允许用于游戏项目

## 9. 不要这样改

- 不要把路径改成 `/assets/...`。
- 不要删除 `tools` 检查脚本。
- 不要把热点缩得太小。
- 不要用需要额外授权的音乐。
- 不要把最终图像命名成中文或带空格。

## 10. 下一步建议

v5 可以进入：正式图像素材替换、WebP 压缩、音频实装、真实 BGM/SFX license 登记、以及 GitHub Pages 线上预览测试。

## MVP v16 Release Experience

- Added real playable procedural prototype audio.
- Added localStorage progress save/resume.
- Added runtime mute, volume, fullscreen, reset controls.
- Kept GitHub Pages safe relative paths.
- Kept mobile pointer/touch support.
- Kept raster-only runtime image assets with zero SVG files.


## MVP v16 Official Playtest Layer

- Added start / continue menu.
- Added help overlay and keyboard shortcuts.
- Added chapter progress pill panel.
- Added clearer local save/resume behavior.
- Added player-facing controls for fullscreen, mute, volume, reset, debug and QA.
- Preserved GitHub Pages safe relative paths, mobile touch support, raster-only image assets and packaged audio.


## MVP v16 Image Expansion

- Added 10 high-quality cinematic still images.
- Replaced several major scene backgrounds with stronger cinematic art.
- Added full-screen still-shot support in the cinematic player.
- Added richer opening, beach, workshop, market, and lion teaser shot sequences.
- Preserved GitHub Pages safe relative paths, mobile pointer/touch support, packaged audio, and raster-only runtime images.


## MVP v16 Shot-Density Expansion

- Added 20 derived close-up / insert cinematic stills from the high-quality v10 image set.
- Added one cinematic contact sheet for QA review.
- Expanded the cinematic player script to use 31 still-shot references.
- Key scenes now cut through establishing shots, close-ups, inserts, and payoff shots.
- Preserved GitHub Pages safe relative paths, mobile pointer/touch support, local save, audio, QA checks, and raster-only runtime assets.


## MVP v16 Character Performance Layer

- Added generated character portrait assets for protagonist, grandma memory, artisan, boss, narrator, and lion eye.
- Dialogue box upgraded into a visual-novel style performance layer.
- Added typewriter-style text reveal.
- Added portrait breathing motion and speaker-specific visual mood.
- Preserved v11 high-density cinematic stills, audio, save/resume, mobile touch support, QA scripts, and GitHub Pages deployment.


## MVP v16 Interaction Feedback Layer

- Added raster chapter cards for beach, workshop, market, and lion finale.
- Added tap ripple feedback for mobile/desktop pointer interaction.
- Added puzzle success burst and toast feedback.
- Added disabled hotspot guidance.
- Added more tactile puzzle step feedback.
- Preserved v12 character performance, v11 cinematic density, audio, save/resume, GitHub Pages relative paths, and mobile pointer support.


## MVP v16 Release Polish

- Added cinematic gallery for replaying still shots.
- Added production/credits panel.
- Added ending replay buttons.
- Improved loader copy and image-only preload.
- Added G shortcut for gallery.
- Preserved interaction feedback, visual-novel dialogue, dense cinematic stills, audio, save/resume, GitHub Pages static deployment, and mobile touch support.


## MVP v16 Immersion Layer

- Added raster post-process overlays: film grain, warm light leak, sea wind streaks, market bokeh, cinematic vignette.
- Added scene breathing motion and subtle character hold animation.
- Added immersive FX toggle and V keyboard shortcut.
- Added reduced-motion CSS fallback.
- Preserved gallery, credits, interaction feedback, visual-novel dialogue, cinematic stills, audio, save/resume, mobile pointer support, and GitHub Pages static deployment.


## MVP v16 Flow Fix

A flow-blocking issue was found during progression testing and fixed.

The action runner now preserves actions that appear after dialogue. This ensures flags and cleanup actions continue after the player finishes reading dialogue.

Verified path:

Start → Beach → Letter → Shell → Workshop → Artisan → Shell Puzzle → Market → Stall → Porridge Puzzle → Lion Finale → Ending.


## MVP v16 Quality Pass

- Added compact floating control dock to reduce HUD clutter.
- Added top-left scene chip with scene title and mood line.
- Added pointer-based parallax for background, layers, and characters.
- Added soft scene fade overlay on scene transitions.
- Added audio fade-in/fade-out crossfades for BGM and ambience.
- Added vibration hooks for chapter and puzzle completion when supported.
- Preserved GitHub Pages relative paths, mobile pointer/touch support, save/resume, gallery, credits, dialogue portraits, and immersive raster FX.


## MVP v16 Correction

- Removed decorative emotional scene one-liners from the HUD.
- Scene chip now uses neutral location/task information only.
- Narrative emotion should come from visuals, actions, audio, character response, and interaction consequences rather than slogan-like copy.


## MVP v16 Text Polish

- Replaced decorative emotional one-liners with concrete, action-based or scene-based wording.
- Changed the market objective to: 饮一碗热粥.
- Removed several slogan-like lines that told the player what to feel.
- Kept emotional weight in character action, image, timing, sound and interaction consequences.


## Black Screen Safety Fix

- Portrait mode no longer hides the entire app.
- Rotate hint is now a translucent overlay instead of replacing the game screen.
- Image preloading has a timeout fallback so a slow/missing image cannot freeze the first screen forever.
- Boot errors now render a visible diagnostic panel instead of leaving a black screen.
