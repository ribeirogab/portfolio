---
description: Next.js App Router configuration and best practices for Gabriel Ribeiro's portfolio
globs: src/app/**,next.config.mjs
alwaysApply: false
---
# Next.js

## Overview

This document outlines the Next.js configuration, usage, and best practices for Gabriel Ribeiro's portfolio project. The project uses Next.js 14 with the App Router architecture to create a modern, performant, and SEO-optimized portfolio website. The application follows Next.js conventions while maintaining the project's specific file naming and component organization patterns.

## Principles

- **App Router**: Leverage the modern App Router for improved performance and developer experience
- **File-based Routing**: Use Next.js file-based routing conventions
- **Server Components**: Prefer Server Components for better performance by default
- **Static Generation**: Optimize for static generation where possible
- **SEO Optimization**: Implement proper metadata and SEO practices
- **Performance**: Optimize for Core Web Vitals and user experience

## Applicability

- **When to apply**: When working with Next.js App Router features, routing, or server-side functionality
- **When not to apply**: For client-side only logic or component styling details

## Recommended Structure

The portfolio follows Next.js App Router conventions:

```plaintext
src/app/
├── layout.tsx              # Root layout with metadata and providers
├── page.tsx                # Home page component
├── globals.css             # Global styles and CSS variables
├── favicon.ico             # Favicon
└── _components/            # Page-specific components
    ├── hero-section.tsx         # Landing section
    ├── about-section.tsx        # About information
    ├── projects-section.tsx     # Projects showcase
    ├── skills-section.tsx       # Skills overview
    ├── work-section.tsx         # Work experience
    ├── education-section.tsx    # Education history
    └── contact-section.tsx      # Contact information
```

## App Router Best Practices

### Root Layout

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gabriel Ribeiro - Software Engineer',
  description: 'Portfolio of Gabriel Ribeiro, Software Engineer specialized in backend development',
  authors: [{ name: 'Gabriel Ribeiro' }],
  keywords: ['software engineer', 'backend', 'typescript', 'node.js'],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-background')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Page Components

```tsx
// src/app/page.tsx
import { BLUR_FADE_DELAY } from '@/constants';
import { HeroSection } from './_components/hero-section';
import { AboutSection } from './_components/about-section';
import { ProjectsSection } from './_components/projects-section';

export default function HomePage() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* Additional sections */}
    </main>
  );
}
```

### Metadata and SEO

```tsx
// Enhanced metadata for specific pages
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gabriel Ribeiro | Software Engineer Portfolio',
  description: 'Experienced Software Engineer specializing in backend development with Node.js, TypeScript, and AWS',
  openGraph: {
    title: 'Gabriel Ribeiro - Software Engineer',
    description: 'Portfolio showcasing projects and experience in software engineering',
    url: 'https://gabrielribeiro.work',
    siteName: 'Gabriel Ribeiro Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Ribeiro - Software Engineer',
    description: 'Portfolio showcasing projects and experience in software engineering',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

## Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image';

// ✅ Optimized image usage
export function ProjectCard({ image, title }: Props) {
  return (
    <div className="relative">
      {image && (
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg object-cover"
          priority={false} // Only set to true for above-the-fold images
        />
      )}
    </div>
  );
}
```

### Font Optimization

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google';

// ✅ Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});
```

### Static Generation

```tsx
// Force static generation for better performance
export const dynamic = 'force-static';

// Or enable ISR for data that might change
export const revalidate = 3600; // Revalidate every hour
```

## Best Practices

- ✅ Use Server Components by default for better performance
- ✅ Implement proper metadata for SEO optimization
- ✅ Optimize images with Next.js Image component
- ✅ Use the `app` directory structure and conventions
- ✅ Implement proper error boundaries and loading states
- ✅ Follow the established file naming conventions (kebab-case)
- ✅ Use TypeScript for all components and pages
- ✅ Implement responsive design with Tailwind CSS
- ✅ Optimize fonts with next/font
- ✅ Use proper semantic HTML for accessibility
- ❌ Don't use Client Components unnecessarily
- ❌ Don't ignore Core Web Vitals and performance metrics
- ❌ Don't forget to add proper alt text for images
- ❌ Don't hardcode URLs or configuration values

## Client vs Server Components

```tsx
// ✅ Server Component (default)
export default function ProjectsSection() {
  // Fetch data, render static content
  return <div>Server-rendered content</div>;
}

// ✅ Client Component when needed
'use client';

import { useState } from 'react';

export function InteractiveComponent() {
  const [state, setState] = useState(false);
  // Component with interactivity
  return <button onClick={() => setState(!state)}>Toggle</button>;
}
```

## Error Handling

```tsx
// app/error.tsx
'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <button onClick={reset} className="mt-4 rounded bg-primary px-4 py-2 text-primary-foreground">
        Try again
      </button>
    </div>
  );
}
```

## Common Pitfalls

- Using Client Components when Server Components would suffice
- Not implementing proper metadata and SEO optimization
- Ignoring Next.js Image optimization features
- Not following the App Router file conventions
- Missing error boundaries and loading states
- Not optimizing for Core Web Vitals
- Hardcoding configuration values instead of using environment variables

## Related Rules

- See [file-naming-conventions.md](./file-naming-conventions.md) for Next.js file naming
- See [typescript.md](./typescript.md) for TypeScript integration
- See [ui-components-guidelines.md](./ui-components-guidelines.md) for component patterns
- See [tailwindcss.md](./tailwindcss.md) for styling with Tailwind CSS

## Additional Notes

- The project uses Next.js 14.2.4 with App Router
- All pages and components follow TypeScript best practices
- The portfolio is optimized for static generation and performance
- Responsive design is implemented throughout the application
- Dark/light theme support is available with next-themes
- The project follows modern Next.js patterns and conventions
