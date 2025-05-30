---
description: Tailwind CSS configuration and best practices for Gabriel Ribeiro's portfolio
globs: src/**/*.tsx,*.css,tailwind.config.ts
alwaysApply: false
---
# Tailwind CSS

## Overview

This document outlines the Tailwind CSS configuration, usage patterns, and best practices for Gabriel Ribeiro's portfolio project. Tailwind CSS provides utility-first styling that enables rapid development of responsive, consistent, and maintainable user interfaces. The project integrates Tailwind with shadcn/ui components and supports dark/light theme switching.

## Principles

- **Utility-First**: Use utility classes for consistent and predictable styling
- **Component Composition**: Build complex designs from simple utility classes
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Design System**: Maintain consistency through design tokens and custom utilities
- **Performance**: Optimize CSS bundle size through purging unused styles
- **Theme Support**: Implement comprehensive dark/light theme switching

## Applicability

- **When to apply**: When styling components, layouts, or implementing responsive designs
- **When not to apply**: For component logic or data management concerns

## Configuration

The project uses a customized Tailwind configuration:

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Additional theme colors...
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
```

## Design System Integration

### CSS Variables for Themes

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.75rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    /* Additional dark theme variables... */
  }
}
```

## Utility Class Patterns

### Layout and Spacing

```tsx
// ✅ Consistent spacing and layout patterns
export function PageSection({ children }: Props) {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-8 px-4 py-12">
      {children}
    </section>
  );
}

// ✅ Responsive grid layouts
export function ProjectsGrid({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
```

### Component Styling with cn Utility

```tsx
import { cn } from '@/lib/utils';

// ✅ Conditional styling with cn utility
type CardProps = {
  className?: string;
  variant?: 'default' | 'outline';
  hoverable?: boolean;
};

export function Card({ className, variant = 'default', hoverable }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border p-6',
        {
          'bg-card text-card-foreground': variant === 'default',
          'border-input bg-transparent': variant === 'outline',
          'transition-shadow hover:shadow-lg': hoverable,
        },
        className
      )}
    >
      {/* Card content */}
    </div>
  );
}
```

### Responsive Design

```tsx
// ✅ Mobile-first responsive design
export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center space-y-4 px-4">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
        Gabriel Ribeiro
      </h1>
      <p className="max-w-[600px] text-center text-gray-500 md:text-xl dark:text-gray-400">
        Software Engineer specialized in backend development
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button size="lg">Get In Touch</Button>
        <Button variant="outline" size="lg">View Projects</Button>
      </div>
    </section>
  );
}
```

### Animation and Transitions

```tsx
// ✅ Smooth transitions and animations
export function ProjectCard({ href }: Props) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image
          src="/project-image.jpg"
          alt="Project"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
```

## Best Practices

- ✅ Use the `cn` utility function for combining classes conditionally
- ✅ Follow mobile-first responsive design principles
- ✅ Leverage CSS variables for theme consistency
- ✅ Use semantic spacing scale (space-y-4, gap-6, etc.)
- ✅ Implement consistent color schemes with design tokens
- ✅ Use Tailwind's built-in animations and transitions
- ✅ Combine utility classes for complex styling patterns
- ✅ Use container classes for consistent max-widths
- ✅ Implement proper focus states for accessibility
- ✅ Use grid and flexbox utilities for layout
- ❌ Don't use arbitrary values unless absolutely necessary
- ❌ Don't override Tailwind utilities with custom CSS
- ❌ Don't use inline styles when Tailwind utilities exist
- ❌ Don't ignore responsive design considerations

## Theme Implementation

```tsx
// ✅ Theme-aware component styling
export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

## Custom Component Classes

```tsx
// ✅ Custom utility classes for common patterns
@layer components {
  .section-container {
    @apply mx-auto w-full max-w-2xl space-y-8 px-4;
  }
  
  .heading-gradient {
    @apply bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent;
  }
  
  .glass-effect {
    @apply backdrop-blur-sm bg-background/80 border border-border/40;
  }
}
```

## Performance Considerations

```typescript
// Optimize Tailwind build by specifying content sources
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // This ensures only used classes are included in the final CSS
};
```

## Common Pitfalls

- Using arbitrary values (like `w-[123px]`) instead of design system values
- Not following mobile-first responsive design principles
- Overriding Tailwind utilities with custom CSS unnecessarily
- Not using the `cn` utility for conditional class application
- Ignoring theme variables and hardcoding colors
- Not leveraging Tailwind's built-in spacing and sizing scales
- Creating overly complex class strings that could be simplified
- Missing accessibility considerations in interactive elements

## Related Rules

- See [ui-components-guidelines.md](./ui-components-guidelines.md) for component styling patterns
- See [nextjs.md](./nextjs.md) for framework-specific considerations
- See [project-overview.md](./project-overview.md) for overall design system context

## Additional Notes

- The project uses Tailwind CSS 3.4.17 with the latest features
- Integration with shadcn/ui provides consistent component styling
- CSS variables enable seamless theme switching
- The tailwindcss-animate plugin provides smooth animations
- Typography plugin is available for markdown content styling
- All styling follows the established design system and theme variables
