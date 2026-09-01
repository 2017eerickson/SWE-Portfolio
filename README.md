# SWE Portfolio

An animated portfolio site built to showcase fullstack projects and frontend fundamentals. Features smooth parallax scrolling, scroll-driven animations, and a custom cursor — all powered by Framer Motion.

## Tech Stack

- **Frontend:** React, Vite, SCSS
- **Animations:** Framer Motion
- **Contact Form:** EmailJS
- **Deployment:** Docker, Nginx

## Features

- Parallax scrolling with dynamic backgrounds (planets, mountains, stars)
- Scroll-triggered animations and staggered reveals
- Custom animated cursor
- Functional contact form via EmailJS
- Responsive design
- Progress bar tracking scroll position through the portfolio section

## Project Showcase

| Project | Description |
|---------|-------------|
| **Full-Stack Grocery Assistant App** | React, Django, PostgreSQL app with Gemini AI integration and Kroger API for vegan product verification |
| **Full-Stack Ecommerce Site** | React frontend, Django backend, Postgres database with Stripe checkout integration |
| **Ecommerce Site** | Responsive e-commerce site built with plain HTML, CSS, and JavaScript |
| **Promotional Email** | Responsive promotional email template showcasing HTML, CSS, and Photoshop skills |
| **Newsletter Email** | Responsive newsletter email template with cross-provider compatibility |

## Getting Started

### Prerequisites

- Node.js

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Docker

```bash
docker build -t swe-portfolio .
docker run -p 80:80 swe-portfolio
```

## Project Structure

```
src/
  App.jsx              # Main app layout and section routing
  componets/
    hero/              # Hero section with animated intro
    navBar/            # Navigation bar with sidebar menu
    parallax/          # Parallax scrolling backgrounds
    services/          # Services section (Design, Develop, Test, Launch)
    portfolio/         # Featured projects showcase
    contact/           # Contact form with EmailJS integration
    cursor/            # Custom animated cursor
    sideBar/           # Sidebar navigation with toggle
```
