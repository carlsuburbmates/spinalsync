# Copilot Instructions for SpinalSync

## Project Overview

SpinalSync is a Next.js app designed for mobile-first clinical education. It transforms static content into interactive modules for nurses in spinal rehabilitation. The app is scaffolded with one populated module (Bowel Management) as an example; new modules should follow its pattern.

## Architecture & Key Patterns

- **App Directory Structure**: Uses Next.js `app/` routing. Main routes:
  - `app/page.tsx`: Home page
  - `app/education/page.tsx`: Module listing
  - `app/education/[slug]/page.tsx`: Dynamic module route for each education module
- **Components**: All reusable UI elements are in `components/`. Examples: `LearnCard`, `QuizBlock`, `ReflectionPrompt`, `ScenarioPanel`.
- **Data**: Module content is stored as JSON in `data/`. Each module (e.g., `bowel.json`) is referenced in `data/modules.json` for dynamic routing and listing.
- **Design System**: Tailwind CSS tokens (colors, typography, spacing) are defined in `tailwind.config.js` and used throughout components for visual consistency.

## Developer Workflows

- **Install & Run**:
  - `pnpm install` to install dependencies
  - `pnpm dev` to start the development server
  - `pnpm build` for production build
  - `pnpm start` to run the production build
- **Adding Modules**:
  - Add a new JSON file to `data/` following the structure of `bowel.json`
  - Update `data/modules.json` to include the new module
  - The dynamic route in `app/education/[slug]/page.tsx` will automatically pick up new modules
- **Styling**:
  - Use Tailwind utility classes and design tokens from `tailwind.config.js`
  - Avoid custom CSS unless necessary; prefer updating design tokens for global changes

## Conventions & Patterns

- **Content Structure**: All education content is JSON-based for easy updates and dynamic rendering
- **Component Usage**: UI logic is encapsulated in components; avoid duplicating UI logic in pages
- **Routing**: Dynamic routing for modules is handled via `[slug]` in Next.js app directory
- **Extensibility**: New modules and components should follow the established patterns for consistency

## Integration Points

- **No external API calls**: All data is local JSON; integration with external services is not present in the scaffold
- **Tailwind & PostCSS**: Styling is managed via Tailwind and PostCSS config files

## Key Files & Directories

- `app/` — Next.js routes and layouts
- `components/` — UI building blocks
- `data/` — JSON content for modules
- `tailwind.config.js` — Design tokens
- `README.md` — Project overview and setup

## Example: Adding a New Module

1. Create `data/yourmodule.json` with the same structure as `bowel.json`
2. Add an entry to `data/modules.json`
3. The new module will be available at `/education/yourmodule`

---

For questions about conventions or missing documentation, check `README.md` and the structure of existing files. If a pattern is unclear, ask for clarification before making broad changes.
