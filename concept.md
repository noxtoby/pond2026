# POND 2026 — project concept

## Positioning

POND is a three-day workshop hosted at Inria Côte d’Azur in collaboration with UCL. It brings together researchers working across medical imaging, computer vision and embodied intelligence for a small, generous exchange of ideas.

The name suggests a shared body of water: a place where different currents meet, where a small movement can create a wider ripple. The visual language turns that idea into a coastal field notebook — calm, tactile and observant — rather than a conventional conference portal.

## Visual direction

The first draft intentionally stays close to the supplied reference structure: a clean white masthead, one strong Nice coastline banner, partner logos on the right, and a simple red navigation row. This gives the workshop a familiar, professional conference-page foundation without reproducing the MICCAI branding.

The next visual pass can refine the POND wordmark, colour values and content hierarchy once the workshop title, dates and programme are confirmed.

## Content model

All homepage news entries live in `data/content.js` as a short array. To add a news item, copy an object and edit its `date`, `title` and `text` fields. The page renders the list automatically.

The rest of the first-draft copy is intentionally kept in `index.html` so it can be edited without a build step. This is a plain static site: no framework, package manager or server is required.

## GitHub Pages

The repository root is publishable as-is. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and the `/ (root)` folder. GitHub Pages will serve `index.html` directly.

## Suggested next content pass

1. Replace the placeholder programme text with confirmed sessions.
2. Add speaker names and portraits, if the workshop format calls for them.
3. Add a dedicated registration form or link in the `#register` section.
4. Confirm the final event dates, contact address and accessibility statement.
