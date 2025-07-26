import type { Metadata, Viewport } from 'next';
import { Inter, Roboto } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import StructuredData from '@/components/StructuredData';
import SkipNavigation from '@/components/SkipNavigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F2A75C',
  colorScheme: 'normal',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ftcommercialslimited.com'),
  title: {
    default: 'F.T. Commercials LTD | HGV & Commercial Vehicle Repairs',
    template: '%s | F.T. Commercials LTD',
  },
  description:
    'F.T. Commercials LTD - Your one stop shop for all HGV and commercial vehicle repairs and maintenance. 5-bay fully equipped workshop with inground brake rollers in Newark.',
  keywords: [
    'HGV repairs Newark',
    'commercial vehicle repairs',
    'PMI testing',
    'brake testing',
    'tail lift repairs',
    'electrical diagnostics',
    'welding fabrication',
    'spray painting',
    'bodywork repairs',
    'inground brake rollers',
    'Traffic Commissioner Guidelines',
  ],
  authors: [{ name: 'F.T. Commercials LTD' }],
  creator: 'F.T. Commercials LTD',
  publisher: 'F.T. Commercials LTD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ftcommercialslimited.com',
    siteName: 'F.T. Commercials LTD',
    title: 'F.T. Commercials LTD | HGV & Commercial Vehicle Repairs',
    description:
      'F.T. Commercials LTD - Your one stop shop for all HGV and commercial vehicle repairs and maintenance. 5-bay fully equipped workshop with inground brake rollers in Newark.',
    images: [
      {
        url: '/building.jpg',
        width: 1200,
        height: 630,
        alt: 'F.T. Commercials LTD - HGV & Commercial Vehicle Workshop',
        type: 'image/jpeg',
      },
      {
        url: '/Logo-trans-bg.png',
        width: 800,
        height: 800,
        alt: 'F.T. Commercials LTD Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F.T. Commercials LTD | HGV & Commercial Vehicle Repairs',
    description:
      'F.T. Commercials LTD - Your one stop shop for all HGV and commercial vehicle repairs and maintenance. 5-bay fully equipped workshop with inground brake rollers in Newark.',
    images: [
      {
        url: '/building.jpg',
        width: 1200,
        height: 630,
        alt: 'F.T. Commercials LTD - HGV & Commercial Vehicle Workshop',
      },
      {
        url: '/Logo-trans-bg.png',
        width: 800,
        height: 800,
        alt: 'F.T. Commercials LTD Logo',
      },
    ],
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual code when available
    yandex: 'yandex-verification-code', // Replace with actual code when available
    other: {
      'msvalidate.01': 'bing-verification-code', // Bing/Microsoft verification
    },
  },
  alternates: {
    canonical: 'https://ftcommercialslimited.com',
    languages: {
      'en-GB': 'https://ftcommercialslimited.com',
    },
  },
  applicationName: 'F.T. Commercials LTD',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  category: 'Commercial Vehicle Services',
  generator: 'Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Font preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <SkipNavigation />
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          <AnimatedSection animation="fade">{children}</AnimatedSection>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
