import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://openmarket.africa'),
  title: 'OpenMarket Africa — Intra-African wholesale trade infrastructure',
  description:
    'The coordination layer for open-market commerce across Africa. Restock, fulfill, and settle with verified payments — from Lagos Island to Kariakoo.',
  openGraph: {
    title: 'OpenMarket Africa',
    description: 'Premier B2B trade infrastructure for Africa\'s open markets.',
    images: ['/logo.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} bg-ink overflow-x-hidden`}
    >
      <body className="min-h-screen bg-ink font-sans text-[#f4f6f8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
