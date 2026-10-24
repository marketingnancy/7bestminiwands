# Hero image swap and old photo relocation

Preserve checkpoint ce3563e0 except for the requested hero image, social metadata, centered 4:3 presentation and relocated hand photo. Do not reopen the attached source image with the file-reading tool.

- [x] Confirm the existing yellow-background thumbnail matches the attachment using pixel data only (800px CDN rendition vs 1000px source, RMSE 1.121). Reuse its existing image URL; no source-image file viewing or generated image required.
- [x] Replace hero source and exact alt text, explicit eager loading and high fetch priority. Apply centered cover crop 4:3 at every viewport, maximum width 680px. Preserve rounded corners and existing soft shadow.
- [x] Set og:image and twitter:image to the new hero asset; update OG dimensions to the real 800px square source.
- [x] Insert old pink hand photo immediately after the three test badges and before the Le Wand comparison paragraph. Full inner-card width, rounded centered 4:3 crop, lazy loading and exact requested alt. Preserve original asset and unchanged verdict rendering.
- [x] Verify DOM order, meta/source equality, eager/lazy attributes, cover/center styles, 4:3 dimensions and no page overflow at 375, 600, 768 and 1280px. Desktop hero is 680x510; mobile hero is 339x254.25. Mobile hurry box begins 22px after the hero at document Y762.47.
- [x] Re-run image-loading, FAQ, mobile paragraph and sticky CTA regression checks. All pass, with no uncaught JavaScript errors.
- [x] Capture and visually verify top-of-page screenshots at 1280x1200 and 375x1000. Verify both PNG files are complete and nonempty.
- [x] Run TypeScript, production build, scoped source diff and whitespace checks. All pass. Prepare final contents for a publishable checkpoint.
- [ ] Publish the latest checkpoint through the website Publish control and verify the live domain. This session exposes no direct deployment operation; current live OG image remains the previous image until publication.

Requested screenshot deliverables:
- /home/ubuntu/velvet-edit-qa/hero-swap-desktop.png
- /home/ubuntu/velvet-edit-qa/hero-swap-mobile-375.png
