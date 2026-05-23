# 🎯 IntentTracker Pro
> **Master your digital intent. Official Project for GSSoC 2026** 🚀

<p align="center">
  <img src="https://img.shields.io/badge/GSSoC-2026-orange?style=for-the-badge&logo=google" />
  <img src="https://img.shields.io/badge/Contributor_Level-1_|_2_|_3-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" />
</p>

---

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

## 🏗 Architecture
Our codebase is strictly **modular**. To maintain the "Space" and minimalism of the project, please adhere to this structure:

- 📂 `/css`: `styles.css` (Layout & Spacing) & `themes.css` (Color Variables)
- 📂 `/js`: 
    - `auth.js` ➔ Session Persistence & Login
    - `tracker.js` ➔ Core Timer & Focus Score Logic
    - `todo.js` ➔ State management for tasks
    - `notes.js` ➔ Reflection & Markdown parsing
    - `app.js` ➔ **The Brain (Router). Do not modify core routing.**

---

## ⚙️ Technical Highlights (For Developers)
- **Zero-Server Architecture:** 100% privacy. We use **LocalStorage**; data never leaves your machine.
- **Modular Vanilla JS:** No frameworks (React/Vue). We use **ES6 Modules** for maximum performance.
- **Spacious Design:** A minimalist UI focused on reducing cognitive load through significant white space.

---

## 👩‍💻 How to Contribute
We follow a strict **Label System** for GSSoC points:

1. **Level 1 (Easy):** Documentation, typos, UI color updates, or minor CSS tweaks.
2. **Level 2 (Medium):** Responsive design, new dashboard widgets, timer logic optimizations.
3. **Level 3 (Hard):** Complex charting, CSV/PDF export logic, or Offline PWA support.

### **Quick Start**
1. **Fork** this repo.
2. **Clone** it: `git clone https://github.com/your-username/intent-tracker-pro.git`
3. **No Install Needed:** Simply open `index.html` in your browser!

---

## 🤝 Project Leadership
- **Project Admin:** [Your Name]
- **Contact:** [Your Discord/Email]
- **Role:** Lead Architect & Mentor for GSSoC '26

---
<p align="center">Built with 💙 for the Open Source Community.</p>