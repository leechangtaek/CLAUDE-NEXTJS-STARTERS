# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Setup

### Prerequisites
- Node.js 18+ and npm

### Common Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

### Quick Testing
- Always start the dev server with `npm run dev` to verify UI changes work as intended in the browser before marking tasks complete.

## Architecture Overview

### Project Structure
```
app/                      # Next.js App Router
  page.tsx               # Home page (entry point)
  layout.tsx             # Root layout wrapper
  globals.css            # Global styles
  favicon.ico

components/
  ui/                    # shadcn/ui base components
    button.tsx           # Standard button
    card.tsx, badge.tsx, input.tsx, etc. (form/UI primitives)
    sonner.tsx           # Toast notification provider
    sheet.tsx            # Drawer/modal component
    
  layout/                # Page layout components
    header.tsx           # Navigation header
    footer.tsx           # Page footer
    page-container.tsx   # Wrapper for page content
    
  sections/              # Page section components
    hero.tsx             # Hero section
    features.tsx         # Features section
    stats.tsx            # Statistics section
    cta.tsx              # Call-to-action section
    
  examples/              # Example/demo components
    contact-form.tsx     # Example form (react-hook-form + zod)

lib/
  utils.ts               # Utility functions (tailwind merge, className helpers)
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.9 (App Router, breaking changes possible) |
| Runtime | React 19.2.4, TypeScript 5 |
| Styling | Tailwind CSS 4 + @tailwindcss/postcss |
| UI Components | shadcn/ui (Radix UI primitives) |
| Forms | react-hook-form 7.79.0 + zod 4.4.3 |
| Theme | next-themes 0.4.6 |
| Notifications | sonner 2.0.7 (toast library) |
| Icons | lucide-react 1.20.0 |
| Linting | ESLint 9 (Next.js config) |

### Key Patterns

**Component Structure**: React functional components with TypeScript. Location-based organization (ui/ for primitives, sections/ for composed sections, layout/ for structural components).

**Styling**: Tailwind CSS classes composed with `cn()` utility from `lib/utils.ts` (uses clsx + tailwind-merge). No CSS modules or styled-components needed.

**Forms**: Use react-hook-form for state management + zod for schema validation. Example: `components/examples/contact-form.tsx`.

**Theme Switching**: next-themes provider handles dark/light mode persistence. Components can use `useTheme()` hook.

**Notifications**: Sonner toast via `<Sonner />` provider in layout. Trigger with `toast.success()` / `toast.error()` etc.

**UI Components**: Import shadcn components from `components/ui/`. Add new ones with `npx shadcn-ui@latest add <component>`.

## Important Notes

### Next.js 16 Breaking Changes
Next.js 16.2.9 has breaking changes from earlier versions. Before writing new code that uses Next.js APIs:
1. Read the relevant guide in `node_modules/next/dist/docs/` (especially App Router, routing, metadata, etc.)
2. Watch for deprecation notices in error messages
3. Consult the official Next.js 16 documentation if uncertain about API changes

This is critical for stable code — training data may reference older Next.js patterns.

### Path Alias
Project uses `@/*` alias pointing to repository root. Import components and utilities with:
```typescript
import Component from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

### React 19 & Compiler
This project targets React 19. New features like React Server Components and the React Compiler are available — check docs if using advanced patterns.

### Configuration
- TypeScript strict mode enabled
- ESLint configured for Core Web Vitals + TypeScript
- Tailwind PostCSS integration (TailwindCSS 4)
- No Tailwind config file (using Tailwind 4 defaults with PostCSS plugin)
