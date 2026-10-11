# Hansen-gift-from-daddy- 💗

A romantic Arabic love-letter website built with React and Vite.

## Features
- Responsive Arabic RTL layout with a dark plum, rose, and gold theme.
- Animated ambient lights, stars, a heart emblem, and an optional heart shower.
- Relationship day counter calculated from a configurable start date.
- Music controls with playback error feedback.
- A private-style message revealed by a button.
- Respects reduced-motion accessibility preferences.

## Run locally
Requires Node.js 18 or newer.

    npm install
    npm run dev

## Test and build

    npm test
    npm run build
    npm run preview

## Relationship date
Edit RELATIONSHIP_START_DATE in src/App.jsx if needed. The current value 2026-02-17 preserves the original counter's value of 108 days on 2026-06-05.

## Notes
Music playback requires a user tap and the external audio URL to remain available. Relative asset paths are used for GitHub Pages project URLs. Work is isolated on feature/react-love-gift and should only be merged after review and approval.