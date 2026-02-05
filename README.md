# 🚀 Portfolio Website

A modern portfolio website built with React and Vite, featuring a stunning design with smooth animations.

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel)

---

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 🎨 **Modern UI/UX** - Beautiful gradient theme with glassmorphism effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎭 **Smooth Animations** - Floating particles, hover effects, and scroll animations
- 🧩 **Component-Based** - Reusable React components with scoped styling

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | UI library for building components |
| Vite | 5.0.8 | Build tool and dev server |
| CSS3 | - | Styling with modern features |
| Font Awesome | 7.1.0 | Icon library |

---

## 📁 Project Structure

```
Portfolio/
├── client/                          # React Frontend
│   ├── public/                      # Static assets
│   │   ├── certificates/            # PDF certificates
│   │   ├── images/                  # Images
│   │   └── resumes/                 # Resume files
│   ├── src/
│   │   ├── components/              # React Components
│   │   │   ├── About.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── package.json
├── vercel.json                      # Vercel deployment config
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sharique0002/portfolio.git
cd portfolio

# Install dependencies
cd client && npm install
```

### Development

```bash
# Run development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

---

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings from `vercel.json`
6. Click "Deploy"

### Vercel Configuration

The `vercel.json` file is pre-configured:

```json
{
  "buildCommand": "cd client && npm install && npm run build",
  "outputDirectory": "client/dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `client/src/components/Hero.jsx`
2. **About Section**: Edit `client/src/components/About.jsx`
3. **Projects**: Edit `client/src/components/Projects.jsx`
4. **Certifications**: Edit `client/src/components/Certifications.jsx`
5. **Achievements**: Edit `client/src/components/Achievements.jsx`
6. **Contact**: Edit `client/src/components/Contact.jsx`

### Add Certificates

Place your certificate PDFs in `client/public/certificates/` and update the paths in `Certifications.jsx`.

### Add Images

Place images in `client/public/images/` and reference them in your components.

---

## 📄 License

ISC License - Feel free to use this template for your own portfolio!

---

## 👤 Author

**Sharique Hussain**

- GitHub: [@sharique0002](https://github.com/sharique0002)
- LinkedIn: [Sharique Hussain](https://www.linkedin.com/in/shariquehussain02)
- Email: shariquehussain03@gmail.com
