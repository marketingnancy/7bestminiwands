# Desktop header background seam

Scope: preserve checkpoint 54e3b2b4 except for the header decoration causing the visible content-column seam.

- [x] Inspect the header and ancestors (html/body/#root), responsive rules and pseudo-elements. Identify the gradient on .hero::before and the later rule confining it to the content column.
- [x] Remove both pseudo-element rules and set the header background to the same var(--cream) as the page. Do not add a full-bleed glow. Preserve typography, spacing, photos/rounded photo frame/shadow, yellow image fallback, nav styling, byline dividers, reviews, controls and tracking.
- [x] Verify no boxed background gradient, border or shadow on the header/ancestor wrappers, no overflow and unchanged loaded 4:3 eager/high-priority hero at 1280, 1440, 1920 and 375px.
- [x] Sample 14 screenshot pixels at both viewport edges and both sides of the former header edges at each desktop width. All are exactly RGB251,248,244, matching #FBF8F4.
- [x] Capture and visually verify the top-of-page screenshot at 1440x1280. Confirm complete PNG file, correct 1440px width and no visible header seam.
- [x] Run TypeScript, production build, scoped CSS diff and whitespace checks. All pass, no browser JavaScript errors. Only website change is the header background/pseudo-element correction.
- [x] Prepare tested final contents for a publishable checkpoint.
- [ ] Verify the latest checkpoint is published on the live domain before claiming the correction is live.

Requested screenshot deliverable:
/home/ubuntu/velvet-edit-qa/header-continuous-1440.png
