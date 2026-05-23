# IntentTracker Pro - Feature Expansion TODO

## Step 1: Repo consistency fixes
- [x] Add missing `css/themes.css` (or update `index.html` to remove reference)
- [x] Add missing `js/todo.js` (move todo logic from `js/notes.js`)

- [ ] Update `index.html` if any referenced elements/ids are missing (e.g., history container)


## Step 2: Tracker fully implement core logic
- [ ] Implement complete `tracker` object in `js/tracker.js` with `init()`, `updateDisplay()`, `start/stop`, `save()`
- [ ] Persist sessions to `localStorage` under `sessions`
- [ ] Implement `deleteSession(id)` and wire it to `history.js`

## Step 3: Productivity features (persistence)
- [ ] Persist todo items (add/complete/delete, stored in localStorage per user)
- [ ] Persist notes (save/list/search; stored per user)

## Step 4: Analytics + deep insights
- [ ] Render Chart.js analytics (if possible) using sessions data
- [ ] Fill Deep Insights cards: success rate, peak window, most recent goal

## Step 5: UX improvements
- [ ] Add light/dark mode toggle
- [ ] Make notifications request permission on user action only
- [ ] Add basic keyboard support (Enter to submit)

## Step 6: Verify
- [ ] Run quick static sanity checks (search for undefined functions/ids)
- [ ] Manual browser smoke test: login -> timer -> history -> todo -> notes

