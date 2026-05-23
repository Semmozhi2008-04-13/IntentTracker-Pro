# 🎯 IntentTracker Pro
> **Official Project for GSSoC 2026** 🚀

<p align="center">
  <img src="https://img.shields.io/badge/GSSoC-2026-orange?style=for-the-badge&logo=google" />
  <img src="https://img.shields.io/badge/Contributor_Level-1_|_2_|_3-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge" />
  
</p>

---

### 🌟 The Vision
**IntentTracker Pro** bridges the gap between *digital intent* and *actual behavior*. It’s a privacy-first, serverless productivity suite built for the modern developer. No tracking pixels, no data harvesting—just pure focus.

### 🚀 Feature Roadmap (GSSoC Targets)
| Feature | Status | Tech Involved | Difficulty |
| :--- | :--- | :--- | :--- |
| **Intent Timer** | ✅ Live | Vanilla JS | L1 |
| **Glass-UI Dashboard** | 🛠️ In Progress | CSS Grid/Flex | L2 |
| **Chart.js Analytics** | 🛠️ In Progress | API / Data Viz | L3 |
| **Dark/Light Mode** | 📅 Planned | CSS Variables | L1 |
| **PDF Export** | 📅 Planned | JS Libraries | L3 |

---

### 🏗 Architecture & Modules
Our codebase is strictly modular. **Do not modify `app.js` unless fixing core routing.**

* 📂 `/css`: `styles.css` (Layout) & `themes.css` (Colors)
* 📂 `/js`: 
    * `auth.js` ➔ Session Persistence
    * `tracker.js` ➔ Logic for the Focus Score 🧠
    * `todo.js` ➔ State management for tasks
    * `notes.js` ➔ Markdown parsing

---

### 🛠 Tech Stack
- **Typography:** Inter & Monaspace Neon
- **Logic:** Vanilla ES6+ JavaScript
- **Visualization:** Chart.js (v4.0+)
- **Storage:** persistent LocalStorage API

---

### 👩‍💻 Contribution Guide (GSSoC 2026)
We follow a strict **Label System** to help you earn points efficiently:

### Check Contributer.md and TODO.md

1.  **Level 1 :** Documentation, Typos, UI Tweaks, Color variable updates.
2.  **Level 2 :** Responsive design fixes, New Dashboard Widgets, Timer logic optimizations.
3.  **Level 3 :** Google OAuth integration, Complex Charting logic, Offline PWA support.

**Quick Start:**
```bash
# 1. Fork & Clone
git clone [https://github.com/your-username/intent-tracker-pro.git](https://github.com/your-username/intent-tracker-pro.git)

# 2. No Install Needed
# Simply open index.html in a browser!
