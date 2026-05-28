# Copilot Instructions

## Build and run

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- No test or lint scripts are defined in `package.json` yet, so there is no single-test command to use

## Architecture

- This is a React 18 + Vite single-page app with client-side routing in `src/App.jsx`
- `App.jsx` owns the top-level shell: `Navbar` and `Footer` wrap routed pages, and `NotFound` handles unknown paths
- `src/components/` holds reusable UI pieces like the navbar, footer, cards, search, progress, loading, and theme toggle
- `src/pages/` contains the route-level screens: Home, Courses, Practice, Projects, Interview, Community, Dashboard, and NotFound
- `src/data/` contains the content model for the app: course modules, practice problems, projects, interview questions, and lesson content; most page content is rendered from these data objects rather than hardcoded JSX
- Styling is Tailwind-first, with global theme tokens and dark mode support in `src/index.css`

## Conventions

- Use functional React components and hooks; keep state local unless the pattern already exists in a shared data module
- Keep route definitions centralized in `src/App.jsx` and update navigation links in `src/components/Navbar.jsx` together
- Reuse the data-driven patterns already used in Courses and Interview: arrays/objects in `src/data/*` feed the UI, and pages index into that content
- Keep components small and composable; many shared UI blocks are plain function components defined in the same file as the page that uses them
- Preserve the Uzbek UI copy and the learning-platform tone used throughout the app
- If you are asked to create commits, use the `Farhodoff` git identity; repo notes and comments should stay in Uzbek where practical
- Use `lucide-react` icons and Tailwind utility classes instead of adding a new component library or styling system
- `ThemeToggle` drives dark mode by toggling the `dark` class on `document.documentElement`; keep any new dark-mode UI compatible with that approach
- Some pages persist user progress in `localStorage` (for example, Interview); follow that pattern if adding similarly lightweight client-side state
- Prefer small shared helpers like `src/lib/utils.js` (`cn`) for class merging when combining Tailwind classes
