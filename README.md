# ResumeBuilder

A simple web app to build professional resumes and cover letters. Create, preview, and generate ATS-friendly documents in minutes.

## Features

- Build resumes with live preview
- Generate cover letters
- Clean, modern templates
- Easy-to-use form interface

## Tech Stack

- React 19
- Vite 7
- React Router
- Tailwind CSS

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Docker

```bash
docker build -t resumebuilder .
docker run -d -p 3000:80 resumebuilder
```

App will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── components/   # Reusable components (Builder form)
├── layouts/      # Header & Footer
├── pages/        # Home, Demo
├── context/      # App context/state
├── utils/        # Utility functions
└── assets/       # Static assets
```

## License

MIT
