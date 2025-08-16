
# WebPulse AI — Hosted Version (GitHub Pages / Netlify)

- `baseline/` — النسخة البطيئة (مشاكل متعمدة)
- `optimized/` — النسخة المحسّنة
- `index.html` — صفحة رئيسية بروابط للنسختين

## GitHub Pages
1) أنشئ مستودعًا جديدًا على GitHub.
2) ارفع **محتويات هذا المجلد** إلى جذر المستودع.
3) Settings → Pages → Branch: `main`, Folder: `/root` → Save.
4) الروابط:
   - `https://<username>.github.io/<repo>/baseline/`
   - `https://<username>.github.io/<repo>/optimized/`

## Netlify
1) ادخل https://app.netlify.com/drop
2) اسحب مجلد المشروع بالكامل.
3) الروابط ستكون:
   - `https://<yoursite>.netlify.app/baseline/`
   - `https://<yoursite>.netlify.app/optimized/`

## القياس
- شغّل Lighthouse/WebPulse AI على كلا المسارين بنفس إعدادات الثروتلينغ والجهاز.
- كرّر 3 مرات وخذ الوسيط.
