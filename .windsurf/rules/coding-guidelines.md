---
description: General coding guidelines and best practices project
globs:
alwaysApply: true
---
# Coding Guidelines

## Overview

This document outlines the general coding guidelines and best practices for Gabriel Ribeiro's portfolio project. These guidelines ensure code quality, maintainability, and consistency across the entire codebase. Following these practices helps create a professional, scalable, and maintainable portfolio website.

## Principles

- **Consistency**: Maintain uniform coding patterns and conventions
- **Readability**: Write clear, self-documenting code
- **Simplicity**: Prefer simple, straightforward solutions over complex ones
- **Performance**: Write efficient code that loads and runs fast
- **Maintainability**: Structure code for easy future updates and modifications
- **Type Safety**: Leverage TypeScript for robust, error-free development
- **Accessibility**: Ensure code supports accessible user experiences

## Applicability

- **When to apply**: For all code written in the portfolio project
- **When not to apply**: For third-party libraries or generated code

## Code Style and Formatting

The project uses Prettier and ESLint for consistent code formatting:

```typescript
// ✅ Good code formatting example
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: readonly string[];
  href: string;
  image?: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  href,
  image,
}: ProjectCardProps) {
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

## Variable and Function Naming

```typescript
// ✅ Good naming conventions
const BLUR_FADE_DELAY = 0.04; // Constants in SCREAMING_SNAKE_CASE
const PROJECT_CATEGORIES = ['frontend', 'backend', 'fullstack'] as const;

type UserPreferences = {
  theme: 'light' | 'dark';
  language: string;
}; // Types in PascalCase

function calculateExperience(startDate: Date): number {
  // Functions in camelCase with descriptive names
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - startDate.getTime();
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
}

const handleProjectClick = (projectId: string) => {
  // Event handlers prefixed with "handle"
  navigate(`/projects/${projectId}`);
};

// ❌ Poor naming examples
const d = new Date(); // Too short, unclear
const userDataFromAPIResponse = {}; // Too verbose
const fn1 = () => {}; // Non-descriptive
```

## Component Structure

```tsx
// ✅ Well-structured component
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

// 1. Type definitions
type SkillsSectionProps = {
  skills: readonly string[];
  className?: string;
};

// 2. Component function
export function SkillsSection({ skills, className }: SkillsSectionProps) {
  // 3. Local state and effects (if needed)
  // 4. Event handlers
  // 5. Render logic
  return (
    <section className={cn('space-y-4', className)}>
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
```

## Error Handling

```typescript
// ✅ Proper error handling
async function fetchProjectData(id: string): Promise<Project | null> {
  try {
    const response = await fetch(`/api/projects/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch project: ${response.statusText}`);
    }
    
    const project = await response.json();
    return project;
  } catch (error) {
    console.error('Error fetching project data:', error);
    return null;
  }
}

// ✅ Error boundaries for React components
export function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    loadProjects().catch((err) => {
      setError('Failed to load projects');
      console.error(err);
    });
  }, []);
  
  if (error) {
    return <div className="text-destructive">Error: {error}</div>;
  }
  
  return (
    <div>
      {/* Project content */}
    </div>
  );
}
```

## Performance Best Practices

```typescript
// ✅ Performance optimizations
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
export const ProjectCard = memo(function ProjectCard({ project }: Props) {
  return <div>{/* Component content */}</div>;
});

// Memoize expensive calculations
export function ProjectsSection({ projects }: Props) {
  const filteredProjects = useMemo(() => {
    return projects.filter(project => project.active);
  }, [projects]);
  
  const handleProjectClick = useCallback((id: string) => {
    // Event handler logic
  }, []);
  
  return (
    <div>
      {filteredProjects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project}
          onClick={handleProjectClick}
        />
      ))}
    </div>
  );
}
```

## Accessibility Considerations

```tsx
// ✅ Accessible component patterns
export function NavigationMenu() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex space-x-4">
        <li>
          <Link 
            href="/about"
            className="text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-current="page" // When on current page
          >
            About
          </Link>
        </li>
        <li>
          <Button
            variant="ghost"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <SunIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
```

## Best Practices

- ✅ Use meaningful, descriptive names for variables and functions
- ✅ Follow the established file naming conventions (kebab-case)
- ✅ Prefer `type` over `interface` for consistency
- ✅ Use TypeScript strictly without `any` types
- ✅ Implement proper error handling and loading states
- ✅ Write accessible code with proper ARIA attributes
- ✅ Use React hooks appropriately (useMemo, useCallback for performance)
- ✅ Keep components focused and single-purpose
- ✅ Use consistent import organization
- ✅ Follow the established component structure pattern
- ❌ Don't ignore TypeScript errors or warnings
- ❌ Don't use inline styles when Tailwind utilities exist
- ❌ Don't create overly complex components or functions
- ❌ Don't ignore accessibility requirements
- ❌ Don't hardcode values that should be configurable

## Code Comments

```typescript
// ✅ Good comments
/**
 * Calculates the blur fade delay for staggered animations
 * @param index - The index of the item in the list
 * @param baseDelay - The base delay for the first item
 * @returns The calculated delay in seconds
 */
function calculateBlurDelay(index: number, baseDelay = BLUR_FADE_DELAY): number {
  return baseDelay * (index + 1);
}

// Constants with clear purpose
const ANIMATION_DURATION = 300; // Duration in milliseconds
const MAX_PROJECTS_PER_PAGE = 6; // Limit for pagination

// ❌ Poor comments
// Increment i
i++; 

// This function does stuff
function doStuff() {}
```

## Common Pitfalls

- Not following the established naming conventions
- Using `any` type instead of proper TypeScript types
- Creating components that are too large or have too many responsibilities
- Not handling error states and loading states properly
- Ignoring accessibility requirements
- Not organizing imports consistently
- Using hard-coded values instead of constants
- Not memoizing expensive operations when appropriate

## Related Rules

- See [typescript.md](./typescript.md) for TypeScript-specific guidelines
- See [file-naming-conventions.md](./file-naming-conventions.md) for naming patterns
- See [ui-components-guidelines.md](./ui-components-guidelines.md) for component patterns
- See [nextjs.md](./nextjs.md) for Next.js specific practices

## Additional Notes

- The project uses ESLint and Prettier for automated code formatting
- TypeScript strict mode is enabled for maximum type safety
- All code should be written with performance and accessibility in mind
- The codebase follows modern React and Next.js best practices
- Consistent patterns make the code easier to maintain and understand
