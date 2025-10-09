# Copilot Instructions for SpinalSync

## Project Overview

SpinalSync is a Next.js app designed for mobile-first clinical education. It transforms static content into interactive modules for nurses in spinal rehabilitation. The app is scaffolded with one populated module (Bowel Management) as an example; new modules should follow its pattern.

## Architecture & Key Patterns

  - `app/page.tsx`: Home page
  - `app/education/page.tsx`: Module listing
  - `app/education/[slug]/page.tsx`: Dynamic module route for each education module

## Developer Workflows

  - `pnpm install` to install dependencies
  - `pnpm dev` to start the development server
  - `pnpm build` for production build
  - `pnpm start` to run the production build
  - Add a new JSON file to `data/` following the structure of `bowel.json`
  - Update `data/modules.json` to include the new module
  - The dynamic route in `app/education/[slug]/page.tsx` will automatically pick up new modules
  - Use Tailwind utility classes and design tokens from `tailwind.config.js`
  - Avoid custom CSS unless necessary; prefer updating design tokens for global changes

## Conventions & Patterns


## Integration Points


## Key Files & Directories


## Example: Adding a New Module

1. Create `data/yourmodule.json` with the same structure as `bowel.json`
2. Add an entry to `data/modules.json`
3. The new module will be available at `/education/yourmodule`


For questions about conventions or missing documentation, check `README.md` and the structure of existing files. If a pattern is unclear, ask for clarification before making broad changes.
