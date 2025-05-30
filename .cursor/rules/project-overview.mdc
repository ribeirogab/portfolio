---
description: Overview of Gabriel Ribeiro's portfolio project structure and architecture
globs:
alwaysApply: true
---
# Project Overview

## Overview

Gabriel Ribeiro's portfolio is a modern web application built with Next.js 14 and the App Router architecture. It showcases professional experience, projects, skills, and education in a clean, accessible, and performant interface. The project leverages modern technologies like TypeScript, React, Next.js, Tailwind CSS, shadcn/ui, Framer Motion, and Magic UI to create an engaging user experience.

## Principles

- **Performance First**: Fast loading times and smooth animations
- **Responsive Design**: Optimized for all device sizes and screen types
- **Accessibility**: WCAG compliant components and interactions
- **Type Safety**: Strict TypeScript typing throughout the codebase
- **Component Reusability**: Well-structured, reusable UI components
- **Modern Development**: Latest React patterns and best practices
- **Clean Architecture**: Clear separation of concerns and maintainable code structure

## Applicability

- **When to apply**: When understanding the overall structure and purpose of the portfolio project
- **When not to apply**: When dealing with third-party integrations or external content management

## Recommended Structure

The portfolio follows this clean, organized structure:

```plaintext
portfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── _components/       # Page-specific components
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── magicui/         # Magic UI components
│   │   └── [component-name].tsx # Component files in kebab-case
│   ├── data/                # Static data and content
│   │   ├── resume.tsx       # Portfolio data
│   │   └── types.ts         # Type definitions
│   ├── lib/                 # Utility functions
│   └── constants.ts         # Application constants
├── public/                  # Static assets
└── [configuration files]    # Root level configuration
```

## Best Practices

- DO: Use the established component structure for consistency
- DO: Maintain clean separation between reusable and page-specific components
- DO: Follow the kebab-case naming convention for component files
- DO: Leverage TypeScript for type safety and better developer experience
- DO: Use the existing animation and UI patterns for consistency
- DON'T: Create duplicate components that could be reusable
- DON'T: Mix different naming conventions within the project
- DON'T: Add unnecessary complexity to the simple portfolio structure

## Common Pitfalls

- Creating components in wrong directories (page-specific vs reusable)
- Not following the established file naming conventions
- Adding heavy dependencies that affect performance
- Breaking the responsive design with fixed layouts
- Not maintaining accessibility standards

## Related Rules

- See [file-naming-conventions.md](./file-naming-conventions.md) for detailed naming guidelines
- See [nextjs.md](./nextjs.md) for Next.js App Router best practices
- See [typescript.md](./typescript.md) for TypeScript usage guidelines
- See [ui-components-guidelines.md](./ui-components-guidelines.md) for component patterns

## Additional Notes

- The project uses pnpm as the package manager
- Built with Next.js 14.2.4 and React 18
- Includes dark/light theme support with next-themes
- Uses Framer Motion for smooth animations and transitions
- Implements modern SEO and performance optimizations
