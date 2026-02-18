# The Velvet Edit — Design Brainstorm

This project is a **direct deployment** of a pre-built, production-ready HTML landing page. The design has already been finalized by the client. The task is to faithfully reproduce the existing design with 100% visual fidelity.

## Chosen Design: Client-Provided Editorial Design

The client has provided a complete, self-contained HTML file with all CSS and JS inline. The design philosophy is already established:

<response>
<text>
**Design Movement:** Modern Editorial / Digital Magazine
**Core Principles:**
1. Warm, inviting cream-toned palette (#FBF8F4 background) that feels like a lifestyle magazine
2. Typography-driven hierarchy using Instrument Serif for headlines + DM Sans for body
3. Subtle card-based product reviews with soft shadows and rounded corners
4. Coral accent (#E8857A) as the primary call-to-action color

**Color Philosophy:** Warm cream base with coral accents — creates a feminine, approachable, trustworthy editorial feel. Not clinical or aggressive.

**Layout Paradigm:** Single-column editorial flow (720px max-width) mimicking a blog article. Linear reading experience with product cards breaking up the text.

**Signature Elements:**
- Drop-cap opening paragraph
- Coral-highlighted winner product card with border
- Sticky CTA bar that appears/disappears based on scroll position
- Urgency toast notification

**Interaction Philosophy:** Minimal but purposeful — FAQ accordion, sticky CTA visibility toggling, hover states on cards and buttons.

**Animation:** Fade-up entrance animations on product cards, smooth scroll behavior, cubic-bezier transitions on sticky bar.

**Typography System:** Instrument Serif (display/headlines) + DM Sans (body text). Serif creates editorial authority, sans-serif provides readability.
</text>
<probability>0.95</probability>
</response>

## Decision: Faithful Reproduction

Since the client provided a complete, production-ready design, we will reproduce it exactly as specified. No design modifications will be made. The focus is on:
1. Accurate conversion to React/Vite structure
2. SEO meta tag integration
3. Image handling (download hotlinked, replace placeholders, generate hero)
4. Proper deployment
