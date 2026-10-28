# Yezhao Xu · Julius

A responsive bilingual academic homepage for **[pkcontinue.github.io](https://pkcontinue.github.io/)**. A clean academic layout with a profile sidebar, white background, and compact text sections. No portrait. Built with plain HTML, CSS, and JavaScript, with no build dependencies.

## Publish to GitHub Pages

1. Create a **public** repository named **`pkcontinue.github.io`** in the `pkcontinue` account.
2. Upload this directory's contents to its `main` branch. Keep `index.html` at the repository root.
3. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. Run the included **Deploy personal homepage** workflow (or push a change).
5. The homepage will be available at **https://pkcontinue.github.io/** once deployment succeeds.

Alternatively, select **Deploy from a branch → main → / (root)** in Pages settings. All assets use relative URLs, and `.nojekyll` disables Jekyll processing.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Language selection is stored locally in the browser. Navigation, content, email, and paper links work without JavaScript. After changing styles or JavaScript, update their `?v=` version in `index.html` to refresh browser caches.

## Edit content

- **English copy and links:** `index.html`
- **Chinese copy:** the `translations` object in `script.js`
- **Colors, typography, and responsive layout:** `style.css`
- **Icon and sharing artwork:** `assets/`

There are no analytics, trackers, account systems, or backend dependencies. The current layout uses system fonts and does not load external font services.

## Content provenance

- User-supplied CV: education, awards, Tencent project descriptions, email, and manuscript title.
- [GitHub profile README](https://github.com/pkcontinue/pkcontinue): current Alibaba Taotian affiliation, Hangzhou location, 2025–2026 Tencent / 2026–present Alibaba timeline, and public notebook links.
- [PluginEval](https://arxiv.org/abs/2608.08700) and [RippleKV](https://arxiv.org/abs/2608.08684): public preprint links and author lists. The user's earlier messages identify them as Julius / Yezhao Xu, and both titles match the supplied CV.
- The third manuscript is labeled as a manuscript; the CV's under-review claim is attributed to the CV, without asserting conference acceptance. Add its public link once confirmed.

The original CV PDF is not bundled. It contains a phone number and detailed work metrics; the public homepage uses a concise professional summary. GitHub forks are not represented as original projects. The exact OpenReview URL was provided by the user: https://openreview.net/profile?id=%7EYezhao_xu2. It appears in the profile and contact links.
