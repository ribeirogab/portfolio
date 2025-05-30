# Gabriel Ribeiro's Portfolio

A modern, responsive portfolio website showcasing professional experience, projects, and skills. Built with cutting-edge technologies for optimal performance and user experience.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Performance Optimized**: Fast loading times and smooth interactions
- **Accessibility First**: WCAG compliant components and interactions
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Type Safe**: Full TypeScript support throughout the codebase

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Magic UI](https://magicui.design/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```plaintext
src/
├── app/                    # Next.js App Router pages
│   ├── _components/       # Page-specific components
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── magicui/         # Magic UI components
│   └── [component].tsx  # Custom components
├── data/                # Static data and content
├── lib/                 # Utility functions
└── constants.ts         # Application constants
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm 8.0 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ribeirogab/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Adding New Components

The project uses shadcn/ui for consistent, accessible components:

```bash
# Add new shadcn/ui components
npx shadcn@latest add [component-name]
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established component patterns
- Maintain responsive design principles
- Support both light and dark themes

### Content Updates

Update portfolio content in:

- `src/data/resume.tsx` - Personal information, experience, projects
- `public/` - Static assets like images and documents

## 🚀 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 📱 Responsive Design

The portfolio is fully responsive and tested on:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop screens (1024px+)
- Large displays (1440px+)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus management
- High contrast support

## 🙏 Acknowledgments

Portfolio template forked from [Magic UI](https://magicui.design/docs/templates/portfolio).
