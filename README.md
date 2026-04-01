# personal

Personal portfolio page built with React + Vite + Tailwind CSS + Three.js.

## Development

### 1. Set `base` in `vite.config.js` to relative path

```js
base: './',
```

### 2. Install dependencies and start dev server

```bash
npm install
npm run dev
```

---

## Deploy to GitHub Pages

### 1. Set `base` in `vite.config.js` to the repo name

```js
base: '/personal/',
```

> This is required so assets load correctly from `https://5erg10.github.io/personal/`

### 2. Build

```bash
npm run build
```

### 3. Deploy `dist/` to the `gh-pages` branch

> `dist/` is in `.gitignore` so the `-f` flag is required.

If the `gh-pages` branch **does not exist** yet (first deploy or after deleting it):

```bash
git add dist -f
git commit -m "deploy"
git push origin $(git subtree split --prefix dist):gh-pages
```

If the `gh-pages` branch **already exists** and has incompatible history, delete it first on GitHub, then use the commands above.

### 4. Configure GitHub Pages

In the repo: **Settings → Pages → Branch: `gh-pages` → folder: `/ (root)` → Save**

Site will be available at: `https://5erg10.github.io/personal/`

---

## Summary: `base` value by context

| Context | `base` value |
|---|---|
| Development (`npm run dev`) | `'./'` |
| GitHub Pages deploy | `'/personal/'` |
