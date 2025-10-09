pnpm install      # install dependencies
pnpm dev          # start the development server
pnpm build        # build for production
pnpm start        # run the production build
spinalsync/
├── app/                # Next.js app directory
│   ├── layout.tsx      # root layout with global styles
│   ├── page.tsx        # home page
│   └── education/      # education routes
│       ├── page.tsx    # module listing
│       └── [slug]/     # dynamic module route
│           └── page.tsx
├── components/         # reusable UI components
├── data/               # module content in JSON format
├── styles/             # global CSS
├── public/             # static assets
├── tailwind.config.js  # tailwind customisation (see design system)
├── postcss.config.js   # postcss configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # dependencies and scripts
# SpinalSync Documentation

SpinalSync is a modern, mobile‑first education companion for primary nurses working in spinal rehabilitation. It transforms static PDF content into an interactive learning journey with micro‑lessons, quick quizzes, clinical scenarios and reflection prompts.

## Setup
1. Clone the repo and run `pnpm install`
2. Start dev server: `pnpm dev`
3. For local persistence, no cloud setup is required. Supabase integration is scaffolded but optional.

## Usage
- Modules are stored in `data/` as JSON files.
- Add new modules by creating a JSON file and updating `modules.json`.
- Progress is saved locally and can sync to Supabase when configured.

## Contribution Guidelines
- Use the design system in `theme.ts` and Tailwind tokens.
- Add new UI components to `components/`.
- Write tests in `components/__tests__/` using Jest and React Testing Library.
- Ensure accessibility (WCAG, ARIA, keyboard navigation).

## Developer Docs
- **Module JSON Structure:** See `bowel.json` for schema.
- **State Management:** Zustand store in `store/progressStore.ts`.
- **Persistence:** LocalStorage via `utils/localProgress.ts`, Supabase via `utils/progressApi.ts`, local JSON via `utils/localJsonPersistence.ts`.
- **Testing:** Jest config in `jest.config.js`, Babel config in `babel.config.js`.

## Data Flows
- Module ingestion: `utils/ingestModules.ts`
- Progress tracking: Zustand + LocalStorage/Supabase/local JSON

## Extending
- Add new content types by updating `ModuleTemplate.tsx` and related components.
- For cloud sync, configure Supabase and update environment variables.

## File structure
```
spinalsync/
├── app/                # Next.js app directory
│   ├── layout.tsx      # root layout with global styles
│   ├── page.tsx        # home page
│   └── education/      # education routes
│       ├── page.tsx    # module listing
│       └── [slug]/     # dynamic module route
│           └── page.tsx
├── components/         # reusable UI components
├── data/               # module content in JSON format
├── styles/             # global CSS
├── public/             # static assets
├── tailwind.config.js  # tailwind customisation (see design system)
├── postcss.config.js   # postcss configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # dependencies and scripts
```

---
For questions, see the example files and comments throughout the codebase.

Colours, typography, spacing and motion values have been defined in `tailwind.config.js` based on the locked design spec provided by the clinical education team. Components use these design tokens to ensure a consistent look and feel across the app.
