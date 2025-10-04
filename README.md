# LABI WINE - A Poem in Every Bottle

A React-based wine website showcasing the Labi Wine brand with navigation between different sections.

## Features

- **Home Page** - Main landing page with company story
- **Gallery** - Photo gallery of wines and vineyards
- **History** - Company history and tradition
- **Vineyards** - Information about wine production
- **Certificates** - Quality certifications
- **Contact** - Contact information and form
- **Shop** - Wine products and shopping
- **Search** - Search functionality
- **Login** - User authentication

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To build the project for production:

```bash
npm run build
```

This will create a `build` folder with optimized files ready for deployment.

## Project Structure

```
├── App/                 # Main App component and routing
├── mainfile/           # Entry point (index.html, index.js)
├── navbar/             # Navigation component
├── Footer/             # Footer component
├── Home/               # Home page component
├── main/               # Main page component
├── Galeria/            # Gallery page
├── History/            # History page
├── vreshtat/           # Vineyards page
├── certificates/       # Certificates page
├── contact/            # Contact page
├── search/             # Search page
├── Login/              # Login page
├── shop/               # Shop page
└── package.json        # Dependencies and scripts
```

## Navigation

The website uses React Router for client-side navigation. All routes are configured in `App/App.jsx`:

- `/` - Home page
- `/main` - Main page with company story
- `/galeria` - Gallery
- `/history` - Company history
- `/vreshtat` - Vineyards
- `/certificates` - Certificates
- `/contact` - Contact page
- `/search` - Search functionality
- `/login` - Login page
- `/shop` - Shop page

## Deployment

The project is ready for deployment to platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and upload the contents of the `build` folder to your hosting service.