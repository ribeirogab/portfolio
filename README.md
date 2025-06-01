# Gabriel Ribeiro's Portfolio

Personal portfolio with multi-language support (PT/EN).

## Getting Started

```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Build for production
pnpm build
```

## Internationalization

- **Languages**: Portuguese (pt) and English (en)
- **URLs**: `/pt` and `/en`
- **Dictionaries**: `src/i18n/dictionaries/`
- **Auto-detection**: Browser headers + redirects

### i18n Structure

```plaintext
src/i18n/
├── index.ts              # Main loader
├── config.ts             # Configuration
├── locale-detector.ts    # Language detection
├── types/               # Type definitions
└── dictionaries/        # Translations (TSX)
    ├── pt.tsx
    └── en.tsx
```

### Dictionaries

Each dictionary has two sections:

- **`resume`**: Personal data (experience, projects, etc.)
- **`ui`**: Interface texts (titles, buttons, etc.)

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** + **Magic UI**
- **Framer Motion**

## Structure

```plaintext
src/
├── app/[lang]/          # Pages with language support
├── components/          # Reusable components
├── i18n/               # Internationalization system
└── data/               # Static data
```

## Scripts

- `pnpm dev` - Development
- `pnpm build` - Build
- `pnpm lint` - Linting

## Credits

Portfolio template forked from [Magic UI](https://magicui.design/docs/templates/portfolio).
