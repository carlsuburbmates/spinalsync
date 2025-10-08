# SpinalSync Project Roadmap

## Summary

- Scaffold Next.js app with locked design system.
- Wire shadcn/ui, Tailwind, Framer Motion, module routes, and bottom nav.
- Import Bowel pilot data; verify the full Discover→Learn→Apply→Reflect→Reward loop.
- Generalize loaders; add remaining 10 modules.
- Add Quick-Ref sheets, Checklists, and minimal analytics.
- Ship to Vercel; iterate with content-only PRs.

---

## Detailed Breakdown

### 0) Repo + Local Setup

- Create a new private repo (e.g., `spinalsync-app`) in GitHub.
- In your IDE terminal:
  ```bash
  pnpm init
  pnpm add next@latest react react-dom
  pnpm add tailwindcss postcss autoprefixer framer-motion lucide-react class-variance-authority
  pnpm add @radix-ui/react-collapsible @radix-ui/react-dialog @radix-ui/react-accordion
  pnpm dlx tailwindcss init -p
  ```
- Add baseline files:
  - `next.config.mjs`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.js`
  - `styles/globals.css` with your tokens (colors, gradients, type scale).
  - `app/layout.tsx`, `app/page.tsx`.

### 1) Design System (locked spec)

- Implement tokens in `tailwind.config.js`.
- `globals.css`: fonts, focus ring, motion-reduced media query.

### 2) UI Library & Components

- Install shadcn/ui and add components:
  ```bash
  pnpm dlx shadcn-ui@latest init
  pnpm shadcn add card button checkbox dialog progress tabs tooltip textarea radio-group sheet badge accordion separator input slider
  ```
- Create custom components under `/components`.

### 3) Routing & Structure

- App routes in `/app`.
- Data in `/data`.
- Lib helpers in `/lib`.

### 4) Pilot Module: Bowel Management

- Add five-phase flow screens to `/data/education/bowel/*`.
- Implement `/app/education/bowel/page.tsx` for Discover→Learn→Apply→Reflect→Reward.
- Hook QuickRefSheet to AD protocol.

### 5) Generalize Module Player

- In `[slug]/page.tsx`, load module by slug from `modules.json`.
- Map JSON/MD to components.

### 6) Bottom Navigation + Index

- Add `BottomNav` to `layout.tsx`.
- `/education/page.tsx` lists modules with title, purpose, progress ring, CTA.

### 7) Quick-Reference

- `/quick-ref/page.tsx`: grid of Quick-Ref Chips.
- Chips open QuickRefSheet.

### 8) Checklists

- `/components/Checklist.tsx`: grouped rows, checkboxes, notes icon.
- Each module loads `/checklist.json`.

### 9) Resources

- `/resources/page.tsx`: icon grid, links, labels.

### 10) Content Import (bulk)

- Convert remaining 10 modules from PDFs.
- For each: produce `content.md`, `metadata.json`, `quiz.json`, `scenario.json`, `checklist.json`.

### 11) State & Storage (Phase 1: local)

- Use `localStorage` for progress, last position, reflection drafts.

### 12) QA & Accessibility

- Keyboard navigation, screen reader labels, motion-reduced support, Lighthouse scores.

### 13) CI/CD

- GitHub branch protection, PR checks, minimal CI workflow.

### 14) Deploy

- Vercel: connect repo, Next.js app router, build with `pnpm build`.

### 15) Pilot Review & Iterate

- Test with pilot cohort, collect feedback, fix issues.

### 16) Scale Content

- Clone Bowel structure for each module, weekly sprints, content-only PRs.

### 17) (Phase 2)

- Supabase, analytics, AI Q&A, offline cache as needed.

---

## Step-by-Step Checklist

- [ ] Initialize repo and local setup
- [ ] Implement design system
- [ ] Install UI library and build components
- [ ] Set up routing and structure
- [ ] Build Bowel Management pilot module
- [ ] Generalize module player
- [ ] Add bottom navigation and module index
- [ ] Implement Quick-Reference feature
- [ ] Add checklists to modules
- [ ] Build resources page
- [ ] Bulk import remaining modules
- [ ] Implement local state and storage
- [ ] QA and accessibility
- [ ] Set up CI/CD
- [ ] Deploy to Vercel
- [ ] Pilot review and iteration
- [ ] Scale content via sprints
- [ ] Phase 2 enhancements
