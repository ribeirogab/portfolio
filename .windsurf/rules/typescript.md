---
description: TypeScript configuration, usage, and best practices in Gabriel Ribeiro's portfolio project
globs:
alwaysApply: true
---
# TypeScript

## Overview

This document outlines the TypeScript configuration, usage, and best practices in Gabriel Ribeiro's portfolio project. TypeScript provides static type checking to enhance code quality, developer experience, and maintainability. The project uses strict TypeScript configurations to ensure type safety throughout the codebase, with a preference for `type` declarations over `interface` for consistency.

## Principles

- **Type Safety**: Leverage TypeScript's type system to catch errors at compile time
- **Consistency**: Maintain consistent TypeScript patterns across all files
- **Developer Experience**: Enhance IDE integration and code intelligence
- **Documentation**: Use types as a form of self-documenting code
- **Simplicity**: Prefer `type` over `interface` for consistency and simplicity
- **Strict Mode**: Enable strict TypeScript settings for maximum type safety

## Applicability

- **When to apply**: When writing any new code or modifying existing TypeScript code
- **When not to apply**: For generated code or specific JavaScript files that cannot be converted

## Recommended Structure

The TypeScript configuration follows modern best practices:

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Type Definitions

Prefer `type` over `interface` for consistency:

```typescript
// ✅ Preferred: Use type for object definitions
type Props = {
  title: string;
  description: string;
  className?: string;
};

type ProfileData = {
  name: string;
  email: string;
  skills: string[];
  projects: Project[];
};

type Project = {
  id: string;
  title: string;
  technologies: string[];
  href: string;
};

// ✅ Use type for union types
type Theme = 'light' | 'dark';
type Status = 'loading' | 'success' | 'error';

// ✅ Use type for function signatures
type EventHandler = (event: React.MouseEvent) => void;
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

// ❌ Avoid interface unless extending is needed
interface ButtonProps {  // Use type instead
  onClick: () => void;
}
```

## Best Practices

- ✅ Always define proper types for component props, parameters, and return values
- ✅ Use TypeScript's utility types where appropriate (Pick, Omit, Partial, etc.)
- ✅ Prefer `type` declarations over `interface` for consistency
- ✅ Create type aliases for complex or reused data structures
- ✅ Enable strict mode and strict null checks
- ✅ Use type narrowing and type guards for runtime type checking
- ✅ Use the `unknown` type instead of `any` when the type is truly unknown
- ✅ Leverage React's built-in types (React.ComponentProps, React.ReactNode, etc.)
- ✅ Use satisfies operator for better type inference when needed
- ❌ Avoid using `any` unless absolutely necessary
- ❌ Don't disable TypeScript checks with `// @ts-ignore` without good reason
- ❌ Avoid type assertions (`as Type`) when possible
- ❌ Don't use `interface` when `type` would suffice

## Component Typing Examples

```typescript
// ✅ Component props with type
type ProjectCardProps = {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
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
  // Component implementation
}

// ✅ Event handler typing
type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

// ✅ Data typing
type WorkExperience = {
  company: string;
  href?: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: React.ReactElement;
};
```

## Common Pitfalls

- Using `any` to work around type checking issues
- Not properly typing component props or function parameters
- Using `interface` when `type` would be more appropriate and consistent
- Ignoring TypeScript errors instead of fixing the underlying issues
- Not keeping TypeScript dependencies and configurations up to date
- Using type assertions inappropriately
- Not leveraging TypeScript's built-in React types

## Related Rules

- See [coding-guidelines.md](./coding-guidelines.md) for general coding standards
- See [ui-components-guidelines.md](./ui-components-guidelines.md) for component typing patterns
- See [file-naming-conventions.md](./file-naming-conventions.md) for TypeScript file conventions

## Additional Notes

- The project uses TypeScript 5.8.3 as specified in package.json
- Strict mode is enabled for maximum type safety
- Path mapping is configured with `@/*` pointing to `./src/*`
- Next.js plugin is included for framework-specific TypeScript support
- The preference for `type` over `interface` maintains consistency across the codebase
- All React component props should be explicitly typed for better developer experience
