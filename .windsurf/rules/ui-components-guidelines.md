---
description: Guidelines for creating and using UI components in Gabriel Ribeiro's portfolio project
globs: src/components/**
alwaysApply: false
---
# UI Components Guidelines

## Overview

This document outlines the standards for creating, structuring, and using UI components in Gabriel Ribeiro's portfolio project. Following these guidelines ensures consistent, accessible, and maintainable UI components throughout the application. The project uses a clear separation between reusable components (`src/components`) and page-specific components (`src/app/_components`).

## Principles

- **Reusability**: Components should be designed for reuse when appropriate
- **Accessibility**: All components must be accessible and follow WCAG guidelines
- **Composition**: Prefer composition over inheritance for component flexibility
- **Simplicity**: Keep components focused on a single responsibility
- **Consistency**: Maintain consistent patterns and APIs across components
- **Performance**: Optimize for fast loading and smooth animations
- **Type Safety**: Use TypeScript `type` definitions for all component props

## Applicability

- **When to apply**: When creating new UI components or modifying existing ones
- **When not to apply**: For application-specific business logic or data management

## Recommended Structure

Components should follow this general structure:

```tsx
// ✅ Example of a well-structured component
import React from 'react';
import { cn } from '@/lib/utils';

// Use type instead of interface for consistency
type ProjectCardProps = {
  /** The project title */
  title: string;
  /** Optional project URL */
  href?: string;
  /** Project description */
  description: string;
  /** Project dates or timeline */
  dates: string;
  /** Technology tags */
  tags: readonly string[];
  /** Optional project image */
  image?: string;
  /** Optional CSS classes */
  className?: string;
};

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  className,
}: ProjectCardProps) {
  return (
    <div className={cn('rounded-lg border bg-card', className)}>
      {/* Component implementation */}
    </div>
  );
}
```

## Component Organization

### Reusable Components (`src/components/`)

Place components that can be used across multiple pages or sections:

```plaintext
src/components/
├── ui/                    # shadcn/ui components
├── magicui/              # Magic UI components
├── project-card.tsx      # Project showcase card
├── resume-card.tsx       # Resume/experience card
├── navbar.tsx            # Navigation component
├── mode-toggle.tsx       # Theme toggle
├── theme-provider.tsx    # Theme context provider
└── icons.tsx             # Icon components
```

### Page-Specific Components (`src/app/_components/`)

Place components that are specific to particular pages or sections:

```plaintext
src/app/_components/
├── hero-section.tsx      # Landing page hero
├── about-section.tsx     # About information
├── projects-section.tsx  # Projects showcase
├── skills-section.tsx    # Skills overview
├── work-section.tsx      # Work experience
├── education-section.tsx # Education history
└── contact-section.tsx   # Contact information
```

## Component Props Guidelines

```typescript
// ✅ Good prop design
type ComponentProps = {
  // Required props first
  title: string;
  description: string;
  
  // Optional props after
  href?: string;
  className?: string;
  
  // Use readonly for arrays that shouldn't be mutated
  tags: readonly string[];
  
  // Use union types for limited options
  variant?: 'primary' | 'secondary' | 'outline';
  
  // Use React types for complex props
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
};

// ❌ Avoid interface for simple prop definitions
interface BadProps {  // Use type instead
  title: string;
}
```

## Animation and Interaction

Leverage the existing animation libraries:

```tsx
import { BlurFade } from '@/components/magicui/blur-fade';
import { BlurFadeText } from '@/components/magicui/blur-fade-text';

// ✅ Use consistent animation patterns
export function AnimatedSection({ children, delay = 0 }: Props) {
  return (
    <BlurFade delay={delay}>
      {children}
    </BlurFade>
  );
}
```

## Styling Guidelines

```tsx
// ✅ Use Tailwind classes with cn utility
import { cn } from '@/lib/utils';

type CardProps = {
  className?: string;
  variant?: 'default' | 'outline';
};

export function Card({ className, variant = 'default' }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg p-4',
        {
          'bg-card border': variant === 'default',
          'border border-input': variant === 'outline',
        },
        className
      )}
    >
      {/* Card content */}
    </div>
  );
}
```

## Best Practices

- ✅ Use `type` instead of `interface` for component props
- ✅ Include JSDoc comments for complex props
- ✅ Use the `cn` utility for conditional classes
- ✅ Implement proper keyboard navigation and ARIA attributes
- ✅ Use semantic HTML elements when possible
- ✅ Leverage existing shadcn/ui and Magic UI components
- ✅ Follow the kebab-case naming convention for component files
- ✅ Export components using PascalCase regardless of file naming
- ✅ Use React.forwardRef when components need ref forwarding
- ✅ Implement responsive design from mobile-first perspective
- ❌ Don't create overly complex components with too many responsibilities
- ❌ Don't hardcode styles without considering theme compatibility
- ❌ Don't ignore accessibility requirements
- ❌ Don't duplicate existing components without good reason

## Accessibility Requirements

```tsx
// ✅ Accessible component example
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  'aria-label'?: string;
};

export function Button({ 
  children, 
  onClick, 
  disabled, 
  'aria-label': ariaLabel 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {children}
    </button>
  );
}
```

## Common Pitfalls

- Creating components in the wrong directory (reusable vs page-specific)
- Using `interface` instead of `type` for component props
- Not following the established file naming conventions (kebab-case)
- Creating overly specific components that can't be reused
- Ignoring accessibility requirements
- Not using the existing design system components
- Hardcoding styles instead of using theme variables
- Not implementing proper responsive behavior

## Related Rules

- See [file-naming-conventions.md](./file-naming-conventions.md) for component file naming
- See [typescript.md](./typescript.md) for TypeScript best practices
- See [tailwindcss.md](./tailwindcss.md) for styling guidelines
- See [project-overview.md](./project-overview.md) for overall structure

## Additional Notes

- The project uses shadcn/ui as the base component library
- Magic UI components provide enhanced animations and effects
- All components should support dark/light theme switching
- Components should be optimized for performance and bundle size
- Follow the established pattern of using `type` for all prop definitions
- Maintain consistency with the existing component architecture
