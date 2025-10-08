# SpinalSync

SpinalSync is a modern, mobile‑first education companion for primary nurses working in spinal rehabilitation. It transforms static PDF content into an interactive learning journey with micro‑lessons, quick quizzes, clinical scenarios and reflection prompts.

## Getting started

```
pnpm install      # install dependencies
pnpm dev          # start the development server
pnpm build        # build for production
pnpm start        # run the production build
```

> **Note**
> This project is a scaffold – only the **Bowel Management** module is populated as an example. Additional modules should follow the same pattern under `data/` and be wired into `data/modules.json`.

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

## Design system

Colours, typography, spacing and motion values have been defined in `tailwind.config.js` based on the locked design spec provided by the clinical education team. Components use these design tokens to ensure a consistent look and feel across the app.
