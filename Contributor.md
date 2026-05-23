# 🤝 Contributing to IntentTracker-Pro

Thank you for choosing to be part of the **IntentTracker-Pro** family! 🎯 By contributing, you are helping developers worldwide reclaim their focus and master their digital intent.

> [!IMPORTANT]
> This project is a proud participant of **GSSoC 2026**. We value quality code, meaningful logic, and a supportive community.

---

## ℹ️ About IntentTracker-Pro
**IntentTracker-Pro** (often called **IntentTracker**) bridges the gap between *digital intent* (what you want to do) and *behavior* (what you actually do).

### What it does (in-browser)
- **Focus Timer**: Start a session for a specific goal/intent.
- **Session Tracking**: When you stop, the app records an outcome (achieved/distracted) and stores the session.
- **History + Analytics**: View your past sessions and see simple insights.
- **Todos + Notes**: Plan daily tasks and write reflections—both persisted locally.

### Privacy-first design
This project is intentionally **serverless**:
- All data is stored in **`localStorage`** (no backend, no external tracking pixels).
- Your sessions/tasks/notes stay on your device.

### Current architecture
- **`/js`**: feature modules (`auth`, `tracker`, `todo`, `notes`, `history`)
- **`/css`**: glass UI layout + theme variables (`themes.css` + `styles.css`)

---


## 🛠️ Getting Started

### 1. Prerequisites
We keep it lean. No complex setups or heavy dependencies:
* **Web Browser:** A modern browser (Chrome, Brave, or Firefox).
* **Code Editor:** [VS Code](https://code.visualstudio.com/) is recommended.
* **Live Server:** Optional, but highly recommended for real-time feedback.

### 2. Fork & Clone
1.  **Fork** the repository by clicking the button at the top right of the GitHub page.
2.  **Clone** your fork locally:
    ```bash
    git clone [https://github.com/YOUR_USERNAME/IntentTracker-Pro.git](https://github.com/YOUR_USERNAME/IntentTracker-Pro.git)
    ```
3.  **Navigate** to the project directory:
    ```bash
    cd IntentTracker-Pro
    ```

---

## 🛣️ The Contribution Journey

### 🔍 Step 1: Issue Discovery & Hygiene
* **Check for Duplicates:** Search the Issues Tab to ensure your idea hasn't been reported.
* **Request Assignment:** Comment on an issue to be assigned. **Wait for Admin approval** before you start coding.
* **Raising New Issues:** Clearly describe the "What" and "Why" using the provided templates.

### 🌿 Step 2: Branching Strategy
Always create a dedicated branch for your work to keep the main branch stable.
```bash
git checkout -b feature/your-amazing-feature
```

### 💻 Step 3: Clean Coding Standards
* **Modular Architecture:** Store logic in `/js` and styling in `/css`.
* **Vanilla Only:** No frameworks. We believe in the power of pure JavaScript!
* **Manual Testing:** Open `index.html` and ensure your changes haven't affected the timer or charts.

### 📤 Step 4: Pushing Your Work
```bash
git add .
git commit -m "feat: added a new focus milestone notification"
git push origin feature/your-amazing-feature
```

### 🚀 Step 5: The Pull Request (PR)
When opening your PR, ensure it includes:

* **Title:** Concise (e.g., `Fix: Responsive bug on mobile dashboard`).
* **Reference:** Link the issue using `Closes #IssueNumber`.
* **Visuals:** If you change the UI, attach a screenshot or GIF.

### 🎨 Style Guidelines

✨ **CSS & Design**
* Space: Use `--spacing-lg` variables for a high-end, spacious feel.
* Glassmorphism: Use semi-transparent backgrounds and `backdrop-filter: blur()`.
* Themes: Use variables from `themes.css`. Never hardcode hex colors.

⚡ **JavaScript (ES6+)**
* Syntax: Use arrow functions, destructuring, and template literals.
* Zero Pollution: Do not use global variables. Wrap logic in Modules or Objects.
* Comments: Explain the **why**, not just the **how**.

### 📬 Need a Hand?

* **GitHub Discussions:** Best for architectural or logic questions.
* **GSSoC Slack/Discord:** For real-time chats with the Admin team.

Let’s build something that makes the internet a more intentional place! Happy Coding! 🚀

