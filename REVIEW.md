# Local research homepage review

Prepared October 11, 2026 on branch `codex/research-homepage`. Nothing has been pushed or published.

## Preview

From this repository run `python3 -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000/. The on-page review notes have been removed; outstanding content notes remain in this file.

## Content sources

- Bio, education, internships, email, social links, and historical news: https://sites.google.com/view/jerryyli
- All 16 entries in the Scholar profile, read in the browser: https://scholar.google.com/citations?user=nY-HwbwAAAAJ&hl=en&pagesize=100&sortby=pubdate
- Latest full author lists and venue status: the arXiv pages linked from each paper. ForeSea is marked ECCV 2026; selective prediction ICLR 2026; EgoPrivacy ICML 2025. CoMET is NeurIPS 2026 Evaluations & Datasets (confirmed by Jerry during review); Latent Bridge remains a preprint.
- Historical PDFs and existing portrait: this repository. Audio-visual author order and equal contribution follow Google Sites (the old repository reverses the first two authors).

## Items to confirm or supply

- Title confirmed by Jerry: Machine Learning Researcher · Qualcomm.
- A newer portrait if desired. The existing photo is compressed. The reviewed CV is linked at `files/Yi_Li_CV.pdf`.
- Current publication status for the counterfactual VLM manuscript (Scholar says 2024; dissertation called it in preparation; no accepted venue is asserted).
- Any later venue for Latent Bridge or the fairness survey.
- Preferred selected papers and recent news. New conference milestones have year precision; acceptance months are not invented.

## Editing

`index.html` contains all content as static HTML so it remains readable without JavaScript. `site-assets/style.css` controls layout; `site-assets/main.js` adds selection and search. `site-assets/publications.json` is a reference inventory, not a runtime data source: update both it and the HTML when changing entries.

## GitHub Pages compatibility

The homepage is buildless HTML/CSS/JS with `.nojekyll`; the old Jekyll source and PDF files are retained. A future deployment should serve the repository root. Do not push this branch until review is complete. The old generated Jekyll routes need explicit redirects under static hosting; basic `/about/`, `/publications/`, and old individual publication routes are provided. The original Jekyll template's demonstration blog, teaching, and talk pages are not part of this research homepage.

ForeSea equal contribution: Hyojin Park and Yi Li marked with asterisks, confirmed by Jerry during review. Background bio is collapsed by default under “More about me.”
