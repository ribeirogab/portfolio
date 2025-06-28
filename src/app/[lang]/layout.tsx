import '../globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { getDictionary } from '@/i18n';
import { type Locale, locales } from '@/i18n/config';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Set the locale for OpenGraph
  const ogLocale = lang === 'pt' ? 'pt_BR' : 'en_US';

  return {
    metadataBase: new URL(dict.resume.url),
    title: {
      default: `${dict.resume.name} - ${dict.resume.jobTitle}`,
      template: `%s | ${dict.resume.name}`,
    },
    description: dict.resume.description,
    applicationName: dict.resume.name,
    authors: [
      {
        name: dict.resume.name,
        url: dict.resume.url,
      },
    ],
    creator: dict.resume.name,
    publisher: dict.resume.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    keywords: [...dict.resume.skills, dict.resume.jobTitle],
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: dict.resume.url,
      siteName: dict.resume.name,
      title: dict.resume.name,
      description: dict.resume.description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: dict.resume.name,
          type: 'image/png',
        },
        {
          url: '/og-image-square.png',
          width: 1200,
          height: 1200,
          alt: dict.resume.name,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@gbr_osr',
      creator: '@gbr_osr',
      title: dict.resume.name,
      description: dict.resume.description,
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
      canonical: dict.resume.url,
      languages: {
        'pt-BR': `${dict.resume.url}/pt`,
        'en-US': `${dict.resume.url}/en`,
      },
    },
    category: 'technology',
    classification: lang === 'pt' ? 'Portfólio Pessoal' : 'Personal Portfolio',
    verification: {
      google: '',
      yandex: '',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // JSON-LD structured data for better SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: dict.resume.name,
    url: dict.resume.url,
    image: `${dict.resume.url}/og-image.png`,
    description: dict.resume.description,
    jobTitle: dict.resume.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: dict.resume.work[0].company ?? 'Technology Industry',
    },
    knowsAbout: dict.resume.skills,
    sameAs: [
      dict.resume.contact?.social?.GitHub?.url,
      dict.resume.contact?.social?.LinkedIn?.url,
      dict.resume.contact?.social?.X?.url,
    ].filter((url): url is string => Boolean(url)),
    contactPoint: {
      '@type': 'ContactPoint',
      email: dict.resume.contact?.email,
      contactType: 'professional',
    },
  };

  const htmlLang = lang === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <html lang={htmlLang} suppressHydrationWarning>
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
            <Navbar dict={dict} />
          </TooltipProvider>
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId="G-VC1EG032LG" />
    </html>
  );
}
