# POND 2026 — project concept

## Positioning

POND 2026 is an academic workshop hosted at Inria Côte d’Azur in collaboration with UCL. Its final title, dates, scope and programme remain placeholders until the organisers confirm them.

The visual language is clear, formal and coastal: a restrained conference identity that gives the Nice panorama a central role while keeping practical information easy to find.

## Visual direction

The design uses the useful structural cues of established conference websites: a clean institutional masthead, one strong Nice coastline banner and a prominent navigation row. Editorial serif typography, warm white space, fine rules and a restrained red accent make the result distinct from the supplied reference.

The POND wordmark and overall hierarchy are ready to receive the confirmed workshop title, dates and programme.

## Content model

All homepage programme and news entries live in `data/content.js` as short arrays. To add an item, copy an object and edit its `date`, `title` and `text` fields. The page renders the lists automatically.

The rest of the first-draft copy is intentionally kept in `index.html` so it can be edited without a build step. This is a plain static site: no framework, package manager or server is required.

## GitHub Pages

The repository root is publishable as-is. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select the default branch and the `/ (root)` folder. GitHub Pages will serve `index.html` directly.

## Suggested next content pass

1. Replace the placeholder programme text with confirmed sessions.
2. Add speaker names and portraits, if the workshop format calls for them.
3. Add a dedicated registration form or link in the `#registration` section.
4. Confirm the final event dates, contact address and accessibility statement.
