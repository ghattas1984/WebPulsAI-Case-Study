# WebPulse AI — STRONG Pair (Good vs Excellent)
This bundle amplifies differences on the most influential features for your model:
- `site_good_strong/`: many JS files (higher requests), large PNGs (bigger page_size), 2 broken links (one <a>, one <img>), markup issues.
- `site_excellent_strong/`: single minified JS, optimized WebP images, valid HTML5, no broken links, lazy-load, preload, defer.

## Deploy on GitHub Pages
1) Create a new repo and upload all files.
2) GitHub → Settings → Pages → Branch: `main`, Folder: `/root` → Save.
3) URLs:
   - `https://<username>.github.io/<repo>/site_good_strong/`
   - `https://<username>.github.io/<repo>/site_excellent_strong/`

## Tips to ensure different classes
- Update your extractor to count **relative links and <img> src** as potential broken links.
- Keep identical measurement conditions (3 runs, median).
- If you still get the same class, increase request count in `site_good_strong/scripts` by adding more small JS files, or add another large PNG in `assets`.
