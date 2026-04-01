# personal

Personal portfolio page built with React + Vite + Tailwind CSS + Three.js.

Two separate deploy targets:
- **Netlify** → `fajardo.netlify.app` (watches `netlify-deploy` branch)
- **GitHub Pages** → `5erg10.github.io/personal` (watches `gh-pages` branch)

## Development

```bash
npm install
npm run dev
```

---

## Deploy to GitHub Pages

Build with `--base=/personal/` so assets load correctly from `5erg10.github.io/personal/`.

```bash
npm run build -- --base=/personal/
git add dist -f && git commit -m "deploy gh-pages"
git push origin :gh-pages
git subtree push --prefix dist origin gh-pages
```

Go to `https://github.com/5erg10/personal/settings/pages` and set:
- **Source**: `Deploy from a branch`
- **Branch**: `gh-pages` → `/ (root)`

---

## Deploy to Netlify

Build with default `base: '/'` so assets load correctly from the root domain.

```bash
npm run build
git add dist -f && git commit -m "deploy netlify"
git push origin :netlify-deploy
git subtree push --prefix dist origin netlify-deploy
```

In Netlify: **Site configuration → Build & deploy → Branches and deploy contexts** → set **Production branch** to `netlify-deploy`.

---

## Summary

| Platform | Branch | Build command |
|---|---|---|
| GitHub Pages | `gh-pages` | `npm run build -- --base=/personal/` |
| Netlify | `netlify-deploy` | `npm run build` |
