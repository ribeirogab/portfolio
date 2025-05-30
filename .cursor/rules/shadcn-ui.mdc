---
description: shadcn/ui usage, customization, and best practices in Gabriel Ribeiro's portfolio project
globs: src/components/ui/**
alwaysApply: false
---
# shadcn/ui

## Overview

Gabriel Ribeiro's portfolio project uses shadcn/ui as its primary component system. shadcn/ui provides a collection of accessible, customizable, and reusable components that follow modern React patterns. These components are built on top of Radix UI primitives and styled with Tailwind CSS, offering a perfect balance between functionality and customization for the portfolio website.

## Principles

- **Accessibility**: All components meet WCAG accessibility standards out of the box
- **Customization**: Components can be fully customized while maintaining consistency
- **Copy-and-Own**: Follow the copy-and-paste methodology for full control
- **Type Safety**: Comprehensive TypeScript support for all components
- **Performance**: Optimized for fast loading and smooth interactions
- **Design System**: Consistent visual language across the entire portfolio

## Applicability

- **When to apply**: When building UI interfaces, forms, dialogs, and interactive elements
- **When not to apply**: For highly specialized portfolio-specific components that don't fit the shadcn/ui patterns

## Project Structure

The shadcn/ui components are organized in the portfolio project:

```plaintext
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx         # Button component
│   │   ├── card.tsx           # Card component
│   │   ├── badge.tsx          # Badge component
│   │   ├── separator.tsx      # Separator component
│   │   ├── tooltip.tsx        # Tooltip component
│   │   └── avatar.tsx         # Avatar component
│   ├── magicui/              # Magic UI components for animations
│   ├── project-card.tsx      # Custom portfolio components
│   └── resume-card.tsx       # Custom portfolio components
├── lib/
│   └── utils.ts              # Utility functions like cn()
└── app/
    └── globals.css           # Global styles and CSS variables
```

## Configuration

The shadcn/ui configuration is defined in `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## Component Implementation Examples

### Button Component

```tsx
// src/components/ui/button.tsx
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export type { ButtonProps };
```

### Card Component Usage

```tsx
// Example usage in portfolio components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: readonly string[];
};

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
```

## Theme Integration

shadcn/ui components work seamlessly with the portfolio's dark/light theme system:

```css
/* src/app/globals.css */
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
    /* Additional theme variables... */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* Dark theme variables... */
  }
}
```

## Installation and Updates

### Adding New Components

```bash
# Install a new shadcn/ui component
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge

# Install multiple components
npx shadcn@latest add button card badge tooltip
```

### Updating Components

```bash
# Update existing components
npx shadcn@latest diff

# Update specific component
npx shadcn@latest diff button
```

## Customization Patterns

### Creating Variants

```tsx
// Custom button variant for portfolio
import { buttonVariants } from '@/components/ui/button';

const portfolioButtonVariants = cva('', {
  extends: buttonVariants,
  variants: {
    portfolio: {
      hero: 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all',
      project: 'border-2 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10',
    }
  }
});
```

### Extending Components

```tsx
// Extended Card for project showcase
import { Card, CardProps } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ProjectCardProps = CardProps & {
  featured?: boolean;
  hoverable?: boolean;
};

export function ProjectCard({ 
  className, 
  featured, 
  hoverable = true, 
  ...props 
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'transition-all duration-300',
        {
          'ring-2 ring-primary/20 shadow-lg': featured,
          'hover:shadow-lg hover:scale-105': hoverable,
        },
        className
      )}
      {...props}
    />
  );
}
```

## Best Practices

- ✅ Use shadcn/ui components as the foundation for all UI elements
- ✅ Leverage the `cn()` utility function for conditional styling
- ✅ Follow the class-variance-authority (cva) pattern for variants
- ✅ Use React.forwardRef for components that need ref forwarding
- ✅ Prefer `type` over `interface` for component props
- ✅ Extend components rather than modifying the source
- ✅ Use CSS variables for theme consistency
- ✅ Test components in both light and dark themes
- ❌ Don't modify shadcn/ui components directly
- ❌ Don't hardcode colors outside the design system
- ❌ Don't bypass accessibility features
- ❌ Don't create duplicate components when shadcn/ui provides them

## Accessibility Features

shadcn/ui components include built-in accessibility features:

```tsx
// Accessibility is built-in
import { Button } from '@/components/ui/button';

export function AccessibleButton() {
  return (
    <Button
      aria-label="Download resume"
      className="focus:ring-2 focus:ring-primary"
    >
      Download CV
    </Button>
  );
}
```

## Performance Considerations

- Components are tree-shakeable and only import what's used
- Built on Radix UI primitives for optimal performance
- CSS variables reduce runtime style calculations
- Proper TypeScript support enables better bundling

## Common Pitfalls

- Not using the `cn()` utility for class merging
- Modifying shadcn/ui components directly instead of extending them
- Ignoring accessibility props and features
- Not testing components in both theme modes
- Creating custom components when shadcn/ui alternatives exist
- Not leveraging the variant system for design consistency
- Hardcoding styles instead of using design tokens

## Related Rules

- See [tailwindcss.md](./tailwindcss.md) for styling guidelines
- See [ui-components-guidelines.md](./ui-components-guidelines.md) for component patterns
- See [typescript.md](./typescript.md) for type safety guidelines
- See [file-naming-conventions.md](./file-naming-conventions.md) for component organization

## Additional Notes

- The project uses the "new-york" style for shadcn/ui components
- React Server Components (RSC) are enabled for better performance
- Lucide icons are the preferred icon library
- CSS variables enable seamless theme switching
- All components support the portfolio's responsive design requirements
- The configuration is optimized for TypeScript and modern React patterns
