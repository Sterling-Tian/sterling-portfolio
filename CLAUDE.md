# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React 19, Vite, and Tailwind CSS v4. The site showcases multiple sections including resume, art gallery, music, and contact information with a cosmic/space theme.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Technology Stack

- **Build Tool**: Vite 7.x with React plugin and Tailwind CSS plugin
- **Framework**: React 19.2 with React Router DOM 7.x
- **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin)
- **UI Libraries**:
  - Radix UI (Toast components)
  - Lucide React (icons)
  - Swiper (carousel/slider)
- **Utilities**:
  - `clsx` + `tailwind-merge` via `cn()` helper in [src/lib/utils.js](src/lib/utils.js)
  - `class-variance-authority` for component variants

## Architecture

### Routing Structure

The app uses React Router with a simple structure defined in [src/App.jsx](src/App.jsx):
- `/` - Home page (main portfolio)
- `/*` - 404 Not Found page

All portfolio content is on a single scrollable home page with anchor-linked sections.

### Component Organization

The [src/pages/Home.jsx](src/pages/Home.jsx) component composes the entire portfolio layout in this order:
1. `StarBackground` - Animated cosmic background effect
2. `NavBar` - Fixed navigation with smooth scroll anchors
3. Main content sections (in order):
   - `SectionArt2` - Primary art showcase
   - `SectionResume` - Resume/CV section
   - `SectionAbout` - About me section
   - `SectionArt` - Secondary art gallery
   - `SectionMusic` - Music/audio showcase
   - `SectionContact` - Contact form/info
4. `Footer` - Site footer

**Note**: `ThemeToggle` component exists but is currently commented out in Home.jsx (line 17).

### Styling Architecture

Uses Tailwind CSS v4 with custom theme configuration in [src/index.css](src/index.css):

- **Theme System**: CSS variables defined in `:root` and `.dark` for color scheme support (though dark mode toggle is currently disabled)
- **Custom CSS Variables**: HSL-based color system (`--background`, `--foreground`, `--primary`, `--card`, `--border`)
- **Custom Animations**: Defined in `@theme` block:
  - `float` - Floating effect (6s infinite)
  - `pulse-subtle` - Subtle pulsing (4s infinite)
  - `fade-in` with staggered delays (0.2s, 0.4s, 0.6s, 0.8s)
  - `meteor` - Meteor animation for background effects
- **Custom Utilities**:
  - `container` - Responsive container with breakpoint-based max-widths
  - `text-glow` - Purple text shadow effect
  - `card-hover` - Hover scale and shadow transition
  - `gradient-border` - Gradient border effect
  - `cosmic-button` - Primary button styling with glow effect
  - `star` and `meteor` - Background effect utilities
- **Swiper Customization**: Custom styles for Swiper carousel (lines 174-190)

### Path Aliases

Vite is configured with `@` alias pointing to `src/` directory ([vite.config.js](vite.config.js:20)).

Import example: `import {cn} from "@/lib/utils"`

### ESLint Configuration

Uses flat config format ([eslint.config.js](eslint.config.js)) with:
- React Hooks plugin (recommended rules)
- React Refresh plugin (for Vite HMR)
- Custom rule: `no-unused-vars` allows uppercase/underscore-prefixed variables

### Static Assets

Images are stored in [public/projects/](public/projects/) directory and referenced directly in components (e.g., `/projects/Fig2.jpg`).

## Key Implementation Patterns

### Navigation

The [NavBar](src/components/NavBar.jsx) component:
- Uses hash-based anchor links (`#home`, `#resume`, `#art`, etc.)
- Implements responsive design (desktop horizontal menu, mobile hamburger menu)
- Tracks scroll state for backdrop blur effect
- Uses Lucide React icons (Menu, X)
- Mobile menu uses opacity/pointer-events for show/hide transitions

### Utility Helper

The `cn()` function in [src/lib/utils.js](src/lib/utils.js) merges class names using `clsx` and `tailwind-merge` to handle Tailwind class conflicts intelligently.
