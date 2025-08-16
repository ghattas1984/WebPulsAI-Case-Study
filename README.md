# Netlify Bundle — WebPulse Case Study (Good vs Excellent)
This repo contains:
- `site_good_exact/` — crafted page for **Good** (184 requests, 13 broken links, ~0.2188MB so Compression≈89KB, 1 HTML error).
- `site_excellent/` — optimized page for **Excellent** (no external resources, valid HTML, tiny size).
- `netlify/edge-functions/delay-good.js` — Edge Function to shape Response/Load times for the GOOD page to your exact targets.
- `netlify.toml` — routes only the GOOD page through the Edge Function.

## Deploy (Netlify)
1. Create a new Git repository and push these files, or upload directly to Netlify as a new **Site from folder**.
2. Netlify will auto-detect the `netlify.toml` and deploy Edge Functions.
3. Your URLs will look like:
   - https://<sitename>.netlify.app/site_good_exact/
   - https://<sitename>.netlify.app/site_excellent/

## Expected Extracted Features (for /site_good_exact/)
- Broken Links = 13
- Number of Requests = 184
- Page Size ≈ 0.22 MB -> Compression ≈ 89KB (with your original formula)
- HTML Validation Errors ≈ 1
- Response Time ≈ 1.87s, Load/Doc Complete ≈ 2.27s (Edge Function controlled)
- Start Render ≈ 2.37s (= Response + 0.5 in your code), TTI ≈ 3.47s (= Load + 1.2)

If you need to tweak timings slightly, edit `delay-good.js` (1870ms and 400ms).
