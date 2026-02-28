# 🧑‍💻 Muhammad Qasim Akram — Portfolio

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A minimal, editorial-style personal portfolio built with pure HTML, CSS & JavaScript. No frameworks. No dependencies. Just craft.**

[🌐 Live Demo](https://mqasimakram.netlify.app/) · [📬 Contact](https://www.linkedin.com/in/qasimakram) · [⭐ Star this repo](#)

</div>

---

## 📸 Preview

<img width="1324" height="575" alt="Screenshot 2026-02-27 231757" src="https://github.com/user-attachments/assets/a074bf54-b3f9-4a5a-8347-a9c9c8380732" />


---

## ✨ Features

- 🖱️ **Custom cursor** with a lagging ring effect and hover expansion
- 🎞️ **Scroll-triggered animations** — sections fade up as you scroll into them
- 🧊 **Frosted glass navbar** that stays fixed at the top
- 📐 **Fully responsive** — works beautifully on mobile, tablet, and desktop
- 📬 **Contact form** with submit feedback (no page reload)
- 🔦 **Active nav highlighting** — shows which section you're in while scrolling
- ⚡ **Zero dependencies** — pure vanilla HTML, CSS, JS

---

## 🗂️ Project Structure

```
portfolio/
│
├── index.html          # All HTML structure
├── style.css           # All styles (or embedded in index.html)
├── script.js           # All JavaScript (or embedded in index.html)
├── README.md           # You're reading this
├── LICENSE             # MIT License
└── .gitignore          # Files to ignore
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Qasim-Akram/portfolio.git
cd portfolio
```

### 2. Open in browser

```bash
# Just open index.html directly — no build step needed!
open index.html

# Or use VS Code Live Server for hot reload
```

> ✅ No npm install. No build process. Just open and go.

---

## 🎨 Design Decisions

| Choice | Reason |
|---|---|
| **DM Serif Display** for headings | Elegant, editorial feel — stands out from typical dev portfolios |
| **DM Mono** for labels & nav | Techy, precise — nods to the engineering side |
| **Off-white `#f5f5f0`** background | Warmer and easier on the eyes than pure white |
| **Near-black `#0a0a0a`** text | Softer contrast than pure black |
| **`clamp()` for font sizes** | Fluid typography — responsive without media queries |
| **Custom cursor** | Immediately signals attention to detail |
| **Full-bleed black contact section** | Creates a dramatic visual break at the end |

---

## 🛠️ Customization Guide

### 🔤 Change your name & info
Open `index.html` and search for `Muhammad Qasim Akram` — update your name, tagline, and about section text.

### 🎨 Change colors
All colors are CSS variables at the top of the `<style>` tag:
```css
:root {
  --black: #0a0a0a;
  --white: #f5f5f0;
  --gray-500: #6a6a62;
}
```
Change these and the whole site updates instantly.

### 📁 Add a new project
Copy this block inside the `#projects` section:
```html
<a href="YOUR_GITHUB_LINK" target="_blank" class="project-row">
  <span class="project-num">05</span>
  <div class="project-info">
    <div class="project-name">Project Name</div>
    <div class="project-desc">Short description of what it does</div>
  </div>
  <div class="project-tech">Tech<br />Stack</div>
  <span class="project-arrow">↗</span>
</a>
```

### 🔗 Update social links
```html
<a href="https://instagram.com/m_qasimakram" ...>Instagram</a>
<a href="https://x.com/Qasim_Akram46" ...>X / Twitter</a>
<a href="https://medium.com/@qasimakram" ...>Medium</a>
```

### 📬 Make the contact form actually send emails
The form currently shows a visual confirmation only. To make it real, sign up at [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/) and follow their docs to hook it up in ~10 lines of JS.

---

## 📱 Responsive Breakpoints

| Screen | Layout |
|---|---|
| Desktop (> 768px) | Full two-column layouts, custom cursor, background "Q" visible |
| Mobile (≤ 768px) | Single column, cursor hidden, decorative elements removed |

---

## 🧠 JavaScript Concepts Used

| Feature | Technique |
|---|---|
| Custom cursor dot | `mousemove` event + `transform` |
| Lagging cursor ring | `requestAnimationFrame` + lerp (linear interpolation) |
| Scroll reveal | `IntersectionObserver` API |
| Active nav | `scroll` event + `offsetTop` comparison |
| Form feedback | `preventDefault` + `setTimeout` reset |

---

## 🚢 Deploying

### Vercel (Recommended — free)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo → Deploy
4. Done! You get a live URL in ~30 seconds

### GitHub Pages (Also free)
1. Go to your repo → Settings → Pages
2. Set source to `main` branch → `/ (root)`
3. Your site is live at `https://qasim-akram.github.io/portfolio`

### Netlify
1. Drag and drop your project folder at [netlify.com/drop](https://app.netlify.com/drop)
2. Instant live URL — no account needed

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use it as a template — just give a ⭐ if it helped!

---

## 🙏 Acknowledgements

- Fonts by [Google Fonts](https://fonts.google.com/) — DM Serif Display, DM Mono, DM Sans
- Inspired by editorial design and modern portfolio trends

---

<div align="center">

Built with ❤️ and zero dependencies by **Muhammad Qasim Akram**

[⬆ Back to top](#)

</div>
