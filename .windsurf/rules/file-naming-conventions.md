---
description: File naming conventions and structure for Gabriel Ribeiro's portfolio project
globs:
alwaysApply: true
---
# File Naming Conventions

## Overview

This document outlines the file naming conventions used throughout Gabriel Ribeiro's portfolio project. Consistent file naming improves codebase navigability, aids in automatic imports, and ensures a predictable project structure. These conventions apply to all code files in the repository and follow modern React and Next.js best practices.

## Principles

- **Consistency**: Follow the same patterns across the entire codebase
- **Clarity**: Names should clearly indicate the file's purpose or content
- **Predictability**: File organization should be intuitive and logical
- **Modularity**: Group related files in a logical structure
- **Kebab-case Preference**: Use kebab-case for component files to maintain consistency

## Applicability

- **When to apply**: When creating new files or renaming existing ones
- **When not to apply**: When working with third-party code or auto-generated files

## Recommended Structure

```plaintext
# ✅ Correct file naming examples

# React components (kebab-case for files)
project-card.tsx          # Component in kebab-case
resume-card.tsx           # Component in kebab-case
mode-toggle.tsx           # Component in kebab-case
hero-section.tsx          # Page-specific component in kebab-case

# Next.js App Router files
app/
├── layout.tsx           # Layout component
├── page.tsx             # Page component
├── globals.css          # Global styles
└── _components/         # Page-specific components directory
    ├── hero-section.tsx     # Page component in kebab-case
    ├── about-section.tsx    # Page component in kebab-case
    └── contact-section.tsx  # Page component in kebab-case

# Utility and data files
data/
├── resume.tsx           # Data file in kebab-case
├── types.ts             # Type definitions
└── constants.ts         # Application constants

lib/
├── utils.ts             # Utility functions
└── helpers.ts           # Helper functions

# Configuration files
eslint.config.mjs        # Config files with config suffix
tailwind.config.ts       # Standard configuration file names
prettier.config.mjs      # Configuration files

# ❌ Incorrect file naming examples
ProjectCard.tsx          # Don't use PascalCase for filenames
project_card.tsx         # Don't use snake_case
HERO_SECTION.tsx         # Don't use all caps
heroSection.tsx          # Don't use camelCase for component files
```

## Best Practices

- ✅ Use kebab-case for all component files (e.g., `project-card.tsx`, `hero-section.tsx`)
- ✅ Use kebab-case for directories when using compound names (e.g., `_components/`)
- ✅ Export components using PascalCase (e.g., `export function ProjectCard()`)
- ✅ Use appropriate file extensions: `.ts` for TypeScript, `.tsx` for TypeScript React components
- ✅ Follow Next.js conventions for App Router (`page.tsx`, `layout.tsx`, etc.)
- ✅ Group page-specific components in `_components` directories
- ✅ Place reusable components in the main `components` directory
- ✅ Use descriptive names that clearly indicate the component's purpose
- ❌ Don't use spaces in file or directory names
- ❌ Don't mix naming conventions within the same directory
- ❌ Don't use unnecessarily long or abbreviated file names
- ❌ Don't use PascalCase for file names (reserve for component exports)

## Component Organization

```plaintext
src/
├── components/              # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── magicui/           # Magic UI components
│   ├── project-card.tsx   # Reusable project card
│   ├── resume-card.tsx    # Reusable resume card
│   ├── navbar.tsx         # Navigation component
│   └── mode-toggle.tsx    # Theme toggle component
└── app/
    ├── _components/       # Page-specific components
    │   ├── hero-section.tsx      # Home page hero
    │   ├── about-section.tsx     # About section
    │   ├── projects-section.tsx  # Projects showcase
    │   ├── skills-section.tsx    # Skills overview
    │   ├── work-section.tsx      # Work experience
    │   ├── education-section.tsx # Education history
    │   └── contact-section.tsx   # Contact information
    ├── page.tsx           # Home page
    └── layout.tsx         # Root layout
```

## Common Pitfalls

- Using PascalCase for file names instead of kebab-case
- Placing page-specific components in the global components directory
- Not following the established directory structure
- Using inconsistent naming patterns within the same directory
- Creating overly nested directory structures for simple components

## Related Rules

- See [project-overview.md](./project-overview.md) for overall project structure
- See [nextjs.md](./nextjs.md) for Next.js-specific file conventions
- See [ui-components-guidelines.md](./ui-components-guidelines.md) for component organization
- See [typescript.md](./typescript.md) for TypeScript file conventions

## Additional Notes

- The kebab-case convention for component files is consistently applied across the project
- Component exports should always use PascalCase regardless of file naming
- This convention aligns with modern React development practices and improves readability
- File naming is optimized for auto-imports and IDE navigation
