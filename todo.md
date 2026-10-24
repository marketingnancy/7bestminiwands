# Thumbnail, hero performance and approved reviews

Preserve checkpoint 0a4fd2a9 except for the requested clean Lolly thumbnail, optimized hero/preload/yellow fallback and the three now-supplied customer reviews.

- [x] Find a distinct clean official Lolly packshot (LOL_3.png on the official product page) and replace only the card thumbnail. Use a 320px WebP, 2,350 bytes, uploaded through supported WebDev storage.
- [x] Replace the 843,765-byte hero PNG with the matching original 1000px-square WebP, 13,988 bytes, well below the 1360px/150KB limits. Preserve the photo and centered 4:3 displayed crop without reopening the prior attachment visually.
- [x] Add exact-source high-priority image preload to the HTML head; preserve eager/high-priority hero loading and set the fallback to #FDB913. Synchronize social image URLs and source dimensions.
- [x] Add the official development-only Vite storage proxy required by this older preview template. Production storage routing already serves both WebP files; no production backend code changed.
- [x] Insert Amber N., Lila M. and Daniel C. reviews word for word with their original punctuation, enclosing quotation marks, five gold stars and the requested verified-customer labels.
- [x] Place the review section directly after the Lolly card and before competitors. Add exact heading, grey source subheading and Read all 296 reviews link to the official Lolly page. Keep the existing aggregate rating.
- [x] Verify review text/names/stars/labels, section placement, three desktop columns/stacked mobile layout and aligned desktop attribution. Verify preload/source equality and one hero request, loaded distinct thumbnail, actual WebP asset bytes/dimensions, centered 4:3 crop and yellow placeholder while the hero is deliberately delayed.
- [x] Verify images, mobile paragraphs, FAQ interaction, unchanged sticky CTA behavior, TypeScript, production build and whitespace. All pass with no JavaScript errors.
- [x] Capture and visually verify complete, unobstructed review-section screenshots from desktop and 375px mobile viewports. Verify final PNG files and freeze deliverables under fresh names.
- [x] Prepare the tested final project for a publishable checkpoint.
- [ ] Publish the latest checkpoint via the website Publish control and verify the live domain. This session exposes no direct deploy operation.

Final screenshot deliverables:
- /home/ubuntu/velvet-edit-qa/reviews-desktop-final.png
- /home/ubuntu/velvet-edit-qa/reviews-mobile-final-375.png
