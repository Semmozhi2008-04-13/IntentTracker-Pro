# 🎯 IntentTracker Pro
> **Master your digital intent. Official Project for GSSoC 2026** 🚀

<p align="center">
  <img src="https://img.shields.io/badge/GSSoC-2026-orange?style=for-the-badge&logo=google" />
  <img src="https://img.shields.io/badge/Contributor_Level-1_|_2_|_3-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" />
</p>

---
### Quick link 
 #### website link : https://intentdigitaltrackerpro.netlify.app/  
#### live link

## 🧠 The Philosophy: Why IntentTracker?
Most productivity apps suffer from **The Quantity Trap**. They track *how many* minutes you spent, but ignore *what* you actually planned to do. This leads to **"Productivity Guilt"**—feeling busy without being effective.

**IntentTracker Pro** bridges the gap between *digital intent* and *actual behavior* using **Intent-Validation**:
- **The Check-in:** Define your goal *before* you start.
- **The Audit:** Verify your achievement *after* you finish.
- **The Insight:** Identify which digital environments are "dopamine traps."

---

## 🛠️ Core Modules
| Module | Purpose | Real-World Analysis |
| :--- | :--- | :--- |
| **⏱️ Advanced Timer** | Deep Work sessions | Uses **Flow State** science to trigger focus milestones. |
| **🎯 Intent Logger** | Goal setting | Maps specific tasks to time blocks for a daily **Focus Map**. |
| **✅ To-Do Hub** | Objective tracking | Connects daily micro-tasks to long-term digital habits. |
| **📊 Analytics** | Visual insights | Uses **Chart.js** to visualize "Intended Work" vs. "Distractions." |

---

## 🚀 GSSoC 2026 Targets & Roadmap
| Feature | Status | Tech Involved | Difficulty |
| :--- | :--- | :--- | :--- |
| **Glass-UI Dashboard** | 🛠️ In Progress | CSS Grid/Flex | L2 |
| **Chart.js Analytics** | 🛠️ In Progress | Data Viz | L3 |
| **Dark/Light Mode** | 📅 Planned | CSS Variables | L1 |
| **PDF Export** | 📅 Planned | JS Libraries | L3 |
| **Gamification** | 📅 Planned | Logic / UI | L2 |

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

1. **Level 1 (Easy):** Documentation, typos, UI color updates, or minor CSS tweaks.
2. **Level 2 (Medium):** Responsive design, new dashboard widgets, timer logic optimizations.
3. **Level 3 (Hard):** Complex charting, CSV/PDF export logic, or Offline PWA support.

### **Quick Start**
1. **Fork** this repo.
2. **Clone** it: `git clone https://github.com/your-username/intent-tracker-pro.git`
3. **No Install Needed:** Simply open `index.html` in your browser!

---

## 🤝 Project Leadership
- **Project Admin:** Semmozhi
- **Role:** Project Admin for  GSSoC '26

---
<p align="center">Built with 💙 for the Open Source Community.</p>
