# GitHub Pages 部署说明

本包是纯静态项目，可直接部署到 GitHub Pages。

## 1. 部署方式 A：仓库根目录

1. 新建 GitHub 仓库。
2. 上传本包解压后的所有文件到仓库根目录。
3. 进入 Settings → Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存并等待部署完成。

## 2. 部署方式 B：docs 目录

如果你习惯把 Pages 文件放在 `docs`：

1. 新建 `docs` 文件夹。
2. 把本包所有内容放入 `docs`。
3. Settings → Pages 选择 `main /docs`。

由于本项目使用相对路径，放在仓库子路径也能正常加载。

## 3. 必跑检查

部署前在项目根目录运行：

```bash
node --check game.js
node tools/check-github-pages.mjs
node tools/check-assets.mjs
node tools/check-naming.mjs
node tools/check-touch-targets.mjs
node tools/build-qa-report.mjs
```

`build-qa-report` 会输出：

```text
qa/qa_report.md
```

## 4. GitHub Pages 路径规则

允许：

```text
./game.js
./styles.css
assets/images/...
assets/data/...
```

不允许：

```text
/game.js
/styles.css
/assets/images/...
```

因为 `/assets/...` 在仓库子路径部署时会指向域名根目录，导致资源 404。

## 5. 手机端

- 推荐横屏。
- 使用 `pointerup` 事件支持鼠标和触摸。
- CSS 已加入 `touch-action: manipulation`。
- 小屏幕竖屏会显示横屏提示。

## 6. 常见问题

### 页面打开空白

检查：

```bash
node --check game.js
```

### 图片不显示

检查：

```bash
node tools/check-assets.mjs
```

并确认路径没有大小写错误。GitHub Pages 对路径大小写敏感。

### 本地能打开，线上不行

运行：

```bash
node tools/check-github-pages.mjs
```

重点看是否有绝对路径风险。

### 手机点不到热点

1. 打开左上角 `热区`。
2. 查看绿色热区是否覆盖物件。
3. 运行：

```bash
node tools/check-touch-targets.mjs
```

4. 在 `game.js` 中调大对应 hotspot 的 `w/h`。
