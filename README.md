# EchoFlix

EchoFlix is a modern movie browsing and recommendation web app built with React. It features movie details, trailers, cast info, reviews, gallery, and smart search powered by GPT.

## Live Demo

Visit the app: [https://echo-flix.web.app/](https://echo-flix.web.app/)

## Features

- Browse trending and recent movies
- View detailed movie info, cast, reviews, and gallery
- Watch trailers and clips
- Smart GPT-powered movie search
- Responsive design for all devices
- User authentication (Sign Up / Sign In)
- Personalized user profile
- Social links in footer

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **State Management:** Redux
- **Authentication:** Firebase
- **APIs:** TMDB (The Movie Database)
- **Search:** GPT integration

## Folder Structure

```
src/
  components/         # UI components (Browse, MovieDetail, Footer, etc.)
  utils/              # Utility functions, constants, hooks, redux slices
  index.css           # Global styles
  App.jsx             # Main app component
  main.jsx            # Entry point
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/souramay/EchoFlix.git
   cd EchoFlix-main
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up Firebase:**
   - Add your Firebase config to the appropriate file in `src\utils\firebase.js`.

4. **Start the development server:**
   ```
   npm run dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Environment Variables

- TMDB API Key
- Firebase config

Set these in your environment or directly in the config files as needed.

## Credits

Developed by **Souramay Bhowmik**  
B.Tech Computer Science and Engineering - 2026

## License

This project is for educational and personal use.