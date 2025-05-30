---
description: ESLint configuration and linting standards for Gabriel Ribeiro's portfolio project
globs: *.ts,*.mjs,*.tsx
alwaysApply: false
---
# ESLint

## Overview

This document outlines the ESLint configuration and linting standards for Gabriel Ribeiro's portfolio project. ESLint is used to enforce code quality, catch errors, and maintain consistent coding styles across the entire application. The project uses a streamlined ESLint configuration optimized for Next.js, TypeScript, and React development.

## Principles

- **Consistency**: Maintain consistent code style across the entire codebase
- **Quality**: Catch common errors and anti-patterns early in development
- **Simplicity**: Keep rules straightforward and maintainable
- **Automation**: Integrate linting into the development workflow
- **Performance**: Optimize for fast development cycles
- **Modern Standards**: Use latest ESLint and TypeScript best practices

## Applicability

- **When to apply**: When writing or modifying any JavaScript or TypeScript code
- **When not to apply**: For generated code or third-party code that isn't modified

## Configuration Structure

The ESLint configuration is located in the root `eslint.config.mjs` file:

```js
// eslint.config.mjs
import { config as baseConfig } from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['.next/**', 'node_modules/**', 'dist/**'] },
  {
    extends: [
      baseConfig.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig,
    ],
    files: ['**/*.{ts,tsx,js,jsx,mjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      'prettier': prettierPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // Prettier integration
      'prettier/prettier': ['error'],
      
      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      
      // React Hooks rules
      ...reactHooksPlugin.configs.recommended.rules,
      
      // Next.js specific rules
      ...nextPlugin.configs.recommended.rules,
      
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-const': 'error',
      
      // React specific rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      
      // General code quality
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  // Special configuration for specific files
  {
    files: ['src/data/**/*.{ts,tsx}'],
    rules: {
      // Allow longer lines in data files
      'prettier/prettier': ['error', { printWidth: 120 }],
    },
  }
);
```

## Package.json Scripts

The project includes these linting scripts:

```json
{
  "scripts": {
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "lint:strict": "next lint --max-warnings 0"
  }
}
```

## Import Sorting Configuration

The project enforces automatic import sorting:

```typescript
// ✅ Correct import order (automatically sorted)
// 1. React and Next.js imports
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party library imports
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';

// 3. Internal component imports
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// 4. Utility imports
import { cn } from '@/lib/utils';
import { BLUR_FADE_DELAY } from '@/constants';

// 5. Data and type imports
import { DATA } from '@/data/resume';
import type { Project } from '@/data/types';
```

## Code Quality Rules

### TypeScript Rules

```typescript
// ✅ Good TypeScript patterns
type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
};

export function ProjectCard({ title, description, href }: ProjectCardProps) {
  return <div>{/* Component content */}</div>;
}

// ❌ Avoid these patterns
const badFunction = (data: any) => { // ESLint error: no-explicit-any
  var oldVar = data; // ESLint error: no-var
  console.log(data); // ESLint warning: no-console
};
```

### React Hooks Rules

```typescript
// ✅ Correct hooks usage
export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    loadProjects();
  }, []); // Dependencies array is correctly specified
  
  const handleProjectClick = useCallback((id: string) => {
    // Handler logic
  }, []); // Dependencies correctly specified
  
  return <div>{/* Component content */}</div>;
}

// ❌ Hooks violations caught by ESLint
export function BadComponent() {
  if (condition) {
    const [state] = useState(); // ESLint error: hooks can't be conditional
  }
  
  useEffect(() => {
    // Missing dependency array
  }); // ESLint warning: missing dependencies
}
```

## Best Practices

- ✅ Run `pnpm lint` before committing code
- ✅ Use `pnpm lint:fix` to automatically fix auto-fixable issues
- ✅ Address all ESLint errors before submitting pull requests
- ✅ Keep custom rule overrides to a minimum for consistency
- ✅ Use TypeScript strict mode with ESLint integration
- ✅ Follow the automatic import sorting rules
- ✅ Use meaningful variable names to avoid unused variable warnings
- ❌ Don't disable ESLint rules without good reason and documentation
- ❌ Don't use `// eslint-disable-next-line` comments excessively
- ❌ Don't ignore TypeScript errors by using `any` type
- ❌ Don't bypass React Hooks rules with workarounds

## Development Workflow

### Daily Development

```bash
# Check for linting issues
pnpm lint

# Fix auto-fixable issues
pnpm lint:fix

# Run with zero warnings (strict mode)
pnpm lint:strict
```

### IDE Integration

Configure your IDE for real-time ESLint feedback:

```json
// VS Code settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  }
}
```

## Error Resolution

### Common ESLint Errors

```typescript
// ❌ TypeScript errors
const data: any = {}; // Fix: Use proper typing
let unusedVariable = 'value'; // Fix: Remove or prefix with underscore

// ✅ Fixed versions
const data: ProjectData = {};
const _unusedVariable = 'value'; // Underscore prefix ignores unused warning
```

### Import Sorting Issues

```bash
# Fix import sorting automatically
pnpm lint:fix

# Or run ESLint specifically for imports
npx eslint --fix --rule 'simple-import-sort/imports: error' src/
```

## Performance Considerations

### ESLint Configuration Optimization

```js
// Optimize for faster linting
export default tseslint.config(
  { 
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'public/**',
      '*.config.js'
    ] 
  },
  // Rest of configuration...
);
```

## Common Pitfalls

- Disabling important rules that catch actual problems
- Not running linting before committing changes
- Using `any` type to bypass TypeScript errors
- Ignoring React Hooks dependencies warnings
- Not following the established import organization
- Overusing ESLint disable comments instead of fixing issues
- Not keeping ESLint and related dependencies up to date

## Related Rules

- See [coding-guidelines.md](./coding-guidelines.md) for general coding standards
- See [typescript.md](./typescript.md) for TypeScript-specific guidelines
- See [file-naming-conventions.md](./file-naming-conventions.md) for file organization
- See [nextjs.md](./nextjs.md) for Next.js specific linting considerations

## Additional Notes

- The project uses ESLint 8.57.1 with Next.js integration
- Prettier is integrated through eslint-plugin-prettier for consistent formatting
- Import sorting is enforced using eslint-plugin-simple-import-sort
- TypeScript-specific rules are applied using typescript-eslint
- React Hooks rules prevent common React development errors
- The configuration is optimized for the portfolio project's specific needs
- All linting rules support the project's kebab-case file naming convention
