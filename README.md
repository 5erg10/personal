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

### 3. Stage and commit `dist/`

> `dist/` is in `.gitignore` so the `-f` flag is required.

```bash
git add dist -f
git commit -m "deploy"
```

### 4. Deploy to `gh-pages` branch

**First deploy or after resetting the branch:**

```bash
git subtree push --prefix dist origin gh-pages
```

**If the push fails due to incompatible history, reset the remote branch first:**

```bash
git push origin :gh-pages
git subtree push --prefix dist origin gh-pages
```

> `git push origin :gh-pages` deletes the remote branch. The second command recreates it from `dist/`.

### 5. Configure GitHub Pages

Go to: `https://github.com/5erg10/personal/settings/pages`

1. Under **"Build and deployment"** → **Source**: select `Deploy from a branch`
2. Under **"Branch"**: select `gh-pages` and folder `/ (root)`
3. Click **Save**

GitHub will take 1-2 minutes to publish. Site will be available at:
`https://5erg10.github.io/personal/`

---

## Summary: `base` value by context

| Context | `base` value |
|---|---|
| Development (`npm run dev`) | `'./'` |
| GitHub Pages deploy | `'/personal/'` |
