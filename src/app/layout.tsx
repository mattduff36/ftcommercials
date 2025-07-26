import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'F.T. Commercials LTD - HGV and Commercial Vehicle Repairs',
  description: 'Your one stop shop for all HGV and commercial vehicle repairs and maintenance in Newark. Fully equipped 5-bay workshop with inground brake rollers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
