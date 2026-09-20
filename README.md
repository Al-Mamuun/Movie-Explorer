# 🎬 MovieHub

A responsive movie browsing website with a dark theme, search functionality, and a detailed movie modal view — built with HTML, CSS, and React.

## ✨ Features

- Responsive navbar with mobile-friendly layout
- Hero section with call-to-action
- Movie grid with search box
- Movie detail modal (poster, meta info, description)
- Fully responsive design (desktop, tablet, mobile)
- Clean dark UI with yellow accent color

## 📸 Preview

*(Add a screenshot or GIF of your site here once it's live)*

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- React (for components/state, e.g. search & modal)

## 📂 Project Structure

```
moviehub/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── style.css
├── package.json
└── README.md
```

> Note: Adjust this structure to match how your actual files are organized.

## 🚀 Getting Started

Follow these steps to run the project on your own machine.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/moviehub.git
cd moviehub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project locally

```bash
npm start
```

The site will open automatically at `http://localhost:3000`.

### 4. Build for production (optional)

```bash
npm run build
```

This creates an optimized production build inside the `build/` folder.

## 🎨 Customization

- Colors, fonts, and spacing are defined in `src/style.css` — change the CSS variables/colors (e.g. `#facc15`, `#111827`) to re-theme the site.
- Replace the hero background image URL inside `.hero` in `style.css` with your own image.
- Update movie data (title, poster, description) wherever it's being fetched or stored (e.g. an API call or a local JSON file).

## 📱 Responsive Breakpoints

| Breakpoint | Target Device |
|------------|----------------|
| `> 1000px` | Desktop |
| `768px – 1000px` | Tablet |
| `500px – 768px` | Large Mobile |
| `< 500px` | Small Mobile |

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
