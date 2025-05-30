import './globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Engenheiro de Software`,
    template: `%s | ${DATA.name}`,
  },
  description: `Explore meu portfólio apresentando experiência profissional e expertise técnica em desenvolvimento de software.`,
  applicationName: `Portfólio ${DATA.name}`,
  authors: [
    {
      name: DATA.name,
      url: DATA.url,
    },
  ],
  creator: DATA.name,
  publisher: DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    'Gabriel Ribeiro',
    'Desenvolvedor de Software',
    'Desenvolvedor Backend',
    'Desenvolvedor Full Stack',
    'Node.js',
    'TypeScript',
    'React',
    'Next.js',
    'AWS',
    'Portfólio',
    'Desenvolvimento Web',
    'Desenvolvimento de Software',
    'Profissional de Tecnologia',
    'Programador',
    'Engenheiro de Software',
    'JavaScript',
    'Backend Developer',
    'Desenvolvedor React',
    'Desenvolvedor Node.js',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: DATA.url,
    siteName: `${DATA.name} - Portfólio`,
    title: `${DATA.name} - Engenheiro de Software`,
    description: `Portfólio profissional de ${DATA.name}`,
    images: [
      {
        url: '/og-image.png', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Portfólio`,
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: `${DATA.name} - Portfólio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gbr_osr',
    creator: '@gbr_osr',
    title: `${DATA.name} - Engenheiro de Software`,
    description: `Portfólio profissional de ${DATA.name}`,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: DATA.url,
  },
  category: 'tecnologia',
  classification: 'Portfólio Pessoal',
  verification: {
    google: '', // Add your Google Search Console verification code
    yandex: '', // Add your Yandex verification code if needed
    // bing: '', // Add Bing verification if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for better SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}/og-image.png`,
    description: DATA.description,
    jobTitle: 'Desenvolvedor de Software',
    worksFor: {
      '@type': 'Organization',
      name: 'Indústria de Tecnologia',
    },
    knowsAbout: [
      'Desenvolvimento de Software',
      'Desenvolvimento Backend',
      'TypeScript',
      'Node.js',
      'React',
      'Next.js',
      'AWS',
      'Desenvolvimento Web',
      'JavaScript',
      'Programação',
      'Engenharia de Software',
    ],
    sameAs: [
      DATA.contact?.social?.GitHub?.url,
      DATA.contact?.social?.LinkedIn?.url,
      DATA.contact?.social?.X?.url,
    ].filter((url): url is string => Boolean(url)),
    contactPoint: {
      '@type': 'ContactPoint',
      email: DATA.contact?.email,
      contactType: 'professional',
    },
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          'mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24',
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
