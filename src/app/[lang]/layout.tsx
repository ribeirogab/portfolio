import '../globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import { getDictionary, type Locale, locales } from '@/i18n';
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
    metadataBase: new URL(DATA.url),
    title: {
      default: `${DATA.name} - ${dict.metadata.title}`,
      template: `%s | ${DATA.name}`,
    },
    description: dict.metadata.description,
    applicationName: dict.metadata.applicationName,
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
    keywords: dict.keywords,
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: DATA.url,
      siteName: dict.metadata.applicationName,
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: dict.metadata.applicationName,
          type: 'image/png',
        },
        {
          url: '/og-image-square.png',
          width: 1200,
          height: 1200,
          alt: dict.metadata.applicationName,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@gbr_osr',
      creator: '@gbr_osr',
      title: dict.metadata.twitterTitle,
      description: dict.metadata.twitterDescription,
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
      languages: {
        'pt-BR': `${DATA.url}/pt`,
        'en-US': `${DATA.url}/en`,
      },
    },
    category: 'tecnologia',
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

  // JSON-LD structured data for better SEO
  const jobTitle =
    lang === 'pt' ? 'Desenvolvedor de Software' : 'Software Developer';
  const worksFor =
    lang === 'pt' ? 'Indústria de Tecnologia' : 'Technology Industry';
  const knowsAboutPt = [
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
  ];
  const knowsAboutEn = [
    'Software Development',
    'Backend Development',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'AWS',
    'Web Development',
    'JavaScript',
    'Programming',
    'Software Engineering',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: DATA.name,
    url: DATA.url,
    image: `${DATA.url}/og-image.png`,
    description: DATA.description,
    jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: worksFor,
    },
    knowsAbout: lang === 'pt' ? knowsAboutPt : knowsAboutEn,
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
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
