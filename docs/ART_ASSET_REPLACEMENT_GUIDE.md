# 海城 MVP v16 美术素材替换指南

本包当前包含可运行占位素材。正式生产时，优先替换图像文件，不要先改代码。只要保持同名同路径，游戏会自动读取新素材。

## 1. 替换原则

1. 保持相对路径，例如 `assets/images/scenes/beach/bg_beach_dusk_full.jpg`。
2. 不使用 `/assets/...` 绝对路径，避免 GitHub Pages 子路径部署失效。
3. 主场景建议 16:9，1920x1080 起步，优先 JPG/WebP。
4. 角色、道具、特效建议透明 PNG/WebP。
5. 所有图像文件命名只使用小写字母、数字、下划线、连字符和扩展名。
6. 替换后运行 `node tools/check-assets.mjs` 和 `node tools/check-github-pages.mjs`。

## 2. 先替换哪几张

### 第一批，决定质感

| 文件 | 用途 | 建议规格 |
|---|---|---|
| `assets/images/scenes/start/bg_start_shell_scene.jpg` | 开场贝壳背景 | 1920x1080 |
| `assets/images/scenes/beach/bg_beach_dusk_full.jpg` | 海边主场景 | 1920x1080 |
| `assets/images/scenes/workshop/bg_workshop_full.jpg` | 工坊主场景 | 1920x1080 |
| `assets/images/scenes/market/bg_market_full.jpg` | 夜粥街主场景 | 1920x1080 |
| `assets/images/scenes/lion_teaser/bg_lion_dark.jpg` | 鼓狮预告 | 1920x1080 |

### 第二批，决定人物演出

| 文件 | 状态 |
|---|---|
| `assets/images/characters/hero/char_hero_beach_idle.png` | 主角海边待机 |
| `assets/images/characters/hero/char_hero_beach_read_letter.png` | 主角看信 |
| `assets/images/characters/hero/char_hero_beach_reach_shell.png` | 主角伸手触贝 |
| `assets/images/characters/artisan/char_artisan_back_working.png` | 工匠背对打磨 |
| `assets/images/characters/artisan/char_artisan_turn_head.png` | 工匠转头 |
| `assets/images/characters/boss/char_boss_idle_busy.png` | 老板娘忙碌待机 |
| `assets/images/characters/boss/char_boss_cut_duck.png` | 老板娘切鸭 |
| `assets/images/characters/boss/char_boss_give_photo.png` | 老板娘递照片/递物 |

### 第三批，决定交互质感

| 文件 | 用途 |
|---|---|
| `assets/images/props/shell/obj_shell_glowing_start.png` | 发光贝壳 |
| `assets/images/props/shell/obj_beach_old_letter_open.png` | 旧信展开 |
| `assets/images/props/workshop/obj_workshop_shell_hairpin_complete.png` | 贝纹发簪 |
| `assets/images/props/workshop/obj_workshop_woodbox_open.png` | 旧木盒打开 |
| `assets/images/props/workshop/obj_workshop_grandma_photo.png` | 工坊外婆照片 |
| `assets/images/props/market/cook_bowl_complete.png` | 完成夜粥 |
| `assets/images/fx/steam/fx_market_steam_thick.png` | 蒸汽遮镜 |

## 3. 图像生成提示词基底

```text
2D hand-painted cinematic indie game art, visual novel adventure game background, atmospheric lighting, rich texture, layered foreground midground background, subtle magical realism, humid southern coastal county atmosphere, emotional storytelling, painterly details, natural lived-in environment, suitable for web interactive narrative game, no text, no logo, no watermark, no UI, no speech bubble, no flat vector, no simple svg, no infographic, no poster layout, no tourist brochure style, no over-clean commercial illustration, no 3d render, no photorealism, no anime chibi, no sticker style
```

## 4. 替换后的验收

打开 `index.html` 或部署到 GitHub Pages 后检查：

- 开场贝壳能点击。
- 海边旧信能触发对白。
- 贝壳在读信后能进入工坊。
- 工坊与工匠对话后工作台可点。
- 拼贝壳完成后进入夜粥街。
- 夜粥街坐下后粥锅可点。
- 做粥完成后进入鼓狮预告。
- 热区按钮在手机上可以点中。
- 开发者 QA 面板中 missing loaded assets 为 0。
