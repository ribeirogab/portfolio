---
description: pnpm package manager usage and best practices
globs:
alwaysApply: true
---
# pnpm

## Overview

This document outlines the usage and best practices for pnpm package manager in Gabriel Ribeiro's portfolio project. pnpm is used for its efficiency, disk space optimization, and fast dependency installation. The project leverages pnpm's capabilities to manage dependencies in a clean and efficient manner.

## Principles

- **Efficiency**: Faster installation and better disk space usage
- **Consistency**: Reproducible builds with lockfile management
- **Security**: Safer dependency resolution and management
- **Simplicity**: Straightforward dependency management for single-project setup
- **Performance**: Optimized for quick development iterations

## Applicability

- **When to apply**: When managing dependencies, running scripts, or setting up the development environment
- **When not to apply**: For project-specific configuration that doesn't involve package management

## Package Management

### Installing Dependencies

```bash
# Install all dependencies
pnpm install

# Add a new dependency
pnpm add <package-name>

# Add a development dependency
pnpm add -D <package-name>

# Add a peer dependency
pnpm add -P <package-name>

# Install specific version
pnpm add <package-name>@<version>
```

### Managing Dependencies

```bash
# Update all dependencies
pnpm update

# Update specific package
pnpm update <package-name>

# Check for outdated packages
pnpm outdated

# Remove a dependency
pnpm remove <package-name>

# Audit dependencies for vulnerabilities
pnpm audit

# Fix security vulnerabilities
pnpm audit --fix
```

### Project Scripts

The portfolio project includes these common scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  }
}
```

Running scripts:

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Configuration

### .npmrc Configuration

```ini
# .npmrc
# Enable shamefully-hoist for better compatibility
shamefully-hoist=true

# Auto-install peers
auto-install-peers=true

# Store directory (optional, for custom store location)
# store-dir=~/.pnpm-store

# Registry settings (if using private registry)
# registry=https://registry.npmjs.org/
```

### Package.json Best Practices

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    // Production dependencies
    "next": "14.2.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    // Development dependencies
    "@types/node": "^20.17.30",
    "@types/react": "^18.3.20",
    "typescript": "^5.8.3"
  },
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
```

## Lockfile Management

### pnpm-lock.yaml

The `pnpm-lock.yaml` file ensures reproducible installations:

```yaml
# Always commit the lockfile
git add pnpm-lock.yaml
git commit -m "Update lockfile"

# Never manually edit the lockfile
# Let pnpm manage it automatically
```

### Best Practices for Lockfile

- ✅ Always commit `pnpm-lock.yaml` to version control
- ✅ Don't manually edit the lockfile
- ✅ Use `pnpm install --frozen-lockfile` in CI/CD
- ✅ Update lockfile regularly with `pnpm update`
- ❌ Don't ignore the lockfile in `.gitignore`
- ❌ Don't delete lockfile to "fix" dependency issues

## Development Workflow

### Setting Up the Project

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Daily Development

```bash
# Add new dependency
pnpm add <package-name>

# Update dependencies periodically
pnpm update

# Check for issues
pnpm lint

# Build to test production
pnpm build
```

## Performance Optimization

### Cache Management

```bash
# Clear pnpm cache if needed
pnpm store prune

# View store status
pnpm store status

# Clean unused packages
pnpm store prune --force
```

### Dependency Optimization

```bash
# Check bundle size impact
pnpm build && pnpm analyze

# Remove unused dependencies
pnpm remove <unused-package>

# Deduplicate dependencies
pnpm dedupe
```

## Best Practices

- ✅ Use pnpm for all package management operations
- ✅ Commit the `pnpm-lock.yaml` file to version control
- ✅ Use exact versions for critical dependencies
- ✅ Regularly update dependencies to latest stable versions
- ✅ Use `pnpm audit` to check for security vulnerabilities
- ✅ Keep the store clean with periodic pruning
- ✅ Use `.npmrc` for project-specific configuration
- ✅ Specify Node.js and pnpm version requirements in package.json
- ❌ Don't mix package managers (npm, yarn, pnpm) in the same project
- ❌ Don't ignore the lockfile in version control
- ❌ Don't manually edit dependency versions in package.json without testing
- ❌ Don't install packages globally when project-local installation is sufficient

## Troubleshooting

### Common Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install

# Reset pnpm store if corrupted
pnpm store prune --force
pnpm install

# Fix peer dependency warnings
pnpm install --force

# Check for conflicting dependencies
pnpm list --depth=0
```

### CI/CD Integration

```yaml
# GitHub Actions example
- name: Setup pnpm
  uses: pnpm/action-setup@v2
  with:
    version: 8

- name: Install dependencies
  run: pnpm install --frozen-lockfile

- name: Build project
  run: pnpm build
```

## Common Pitfalls

- Using `npm install` instead of `pnpm install` in a pnpm project
- Not committing the lockfile, leading to inconsistent installations
- Mixing different package managers in the same project
- Not specifying Node.js version requirements
- Ignoring security audit warnings
- Not cleaning the store periodically, leading to disk space issues
- Using `--force` flag unnecessarily, which can cause dependency conflicts

## Related Rules

- See [project-overview.md](./project-overview.md) for overall project structure
- See [nextjs.md](./nextjs.md) for Next.js specific package requirements
- See [typescript.md](./typescript.md) for TypeScript dependency management

## Additional Notes

- The project uses pnpm for its superior disk space efficiency
- pnpm creates a non-flat node_modules structure by default
- The lockfile format is different from npm/yarn but provides better dependency resolution
- pnpm's store is shared across projects, saving disk space
- Auto-install peers option helps with React ecosystem packages
- The project is configured to work optimally with pnpm's linking strategy
