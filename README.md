# Muhammad Qasim Akram — Portfolio

<div align="center">

![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A minimal, editorial-style personal portfolio built with pure HTML, CSS & JavaScript. No frameworks. No dependencies. Just craft.**

[🌐 Live Demo](https://mqasimakram.netlify.app/) · [📬 Contact](https://www.linkedin.com/in/qasimakram) · [⭐ Star this repo](#)

</div>

---

## Preview

<img width="1324" height="575" alt="Screenshot 2026-02-27 231757" src="img\image.png" />


---

## Features

- Custom crosshair cursor with a smooth lagging dot — no generic circle ring
- Hero section with photo, bold Bebas Neue typography, and letter-by-letter animation
- Scrolling marquee tech stack strip between hero and about
- Scroll-triggered reveal animations on all sections
- Frosted glass navbar with active section highlighting and Hire Me button
- Fully responsive across mobile, tablet, and desktop
- Contact form with submit feedback and no page reload
- Zero dependencies — pure vanilla HTML, CSS, JS

---

## Project Structure

```
portfolio/
│
├── index.html        
├── styles.css        
├── script.js         
├── img/
│   └── profile.png   
|   |── image.png
|   |── resume.pdf
└── README.md         
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Qasim-Akram/portfolio.git
cd portfolio
```

### 2. Open in browser

```bash
open index.html
```

No npm install. No build process. Just open and go.

---

## Design Decisions

| Choice | Reason |
|---|---|
| **Bebas Neue** for hero name | Bold, oversized editorial typography — commands attention immediately |
| **DM Serif Display** for headings | Elegant contrast against the mono labels |
| **DM Mono** for labels & nav | Precise, techy feel that nods to the engineering side |
| **Off-white `#f2f0eb`** background | Warmer than pure white, easier on the eyes |
| **Crosshair cursor** | Sharp and editorial — avoids the overused circle/ring cursor |
| **Transparent photo in hero** | Clean floating appearance, no boxy container |
| **Marquee strip** | Communicates tech stack at a glance without cluttering the hero |
| **`clamp()` for font sizes** | Fluid typography — responsive without extra media queries |

---

## Customization Guide

### Change your name & info
Open `index.html` and search for `Muhammad Qasim` — update your name, tagline, and about section text.

### Change colors
All colors are CSS variables at the top of `styles.css`:
```css
:root {
  --black: #0a0a0a;
  --white: #f2f0eb;
  --gray: #888;
  --border: #d0cdc6;
}
```

### Add a new project
Copy this block inside the `#projects` section in `index.html`:
```html
<a href="YOUR_GITHUB_LINK" target="_blank" class="project-item reveal">
  <span class="project-num">006</span>
  <div class="project-info">
    <span class="project-name">Project Name</span>
    <span class="project-desc">Short description of what it does</span>
  </div>
  <span class="project-tag">React · Node · MongoDB</span>
  <span class="project-arrow">↗</span>
</a>
```

### Update your photo
Replace `img/profile.png` with your own transparent background PNG. Use [remove.bg](https://remove.bg) to remove the background for free.

### Make the contact form send real emails
The form currently shows a visual confirmation only. To make it functional, sign up at [Formspree](https://formspree.io) and replace the `handleSubmit` function in `script.js` with their fetch call — takes about 10 lines.

---

## Responsive Breakpoints

| Screen | Layout |
|---|---|
| Desktop (> 1024px) | Two-column hero with photo, full nav with Hire Me button |
| Tablet (768px – 1024px) | Single column hero, photo hidden, nav condensed |
| Mobile (< 600px) | Single column, nav links hidden, project tags hidden |

---

## JavaScript Concepts Used

| Feature | Technique |
|---|---|
| Crosshair cursor | `mousemove` + CSS `::before` / `::after` pseudo-elements |
| Lagging dot | `requestAnimationFrame` + lerp interpolation |
| Letter animation | Dynamic `innerHTML` span injection with staggered `transition-delay` |
| Scroll reveal | `IntersectionObserver` API |
| Active nav highlight | `scroll` event + `offsetTop` comparison |
| Form feedback | `preventDefault` + `setTimeout` reset |

---

## Deploying

### Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → New Site from Git
3. Import your repo → Deploy
4. Live in ~30 seconds

### Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo → Deploy

### GitHub Pages
1. Go to your repo → Settings → Pages
2. Set source to `main` branch → `/ (root)`
3. Live at `https://qasim-akram.github.io/portfolio`

---

## License

This project is open source under the [MIT License](LICENSE). Feel free to use it as a template — just drop a star if it helped.

---

<div align="center">

Built with zero dependencies by **Muhammad Qasim Akram**

[Back to top](#)

</div>