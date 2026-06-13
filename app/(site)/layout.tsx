import type { Metadata } from 'next';
import { Bricolage_Grotesque, Source_Sans_3 } from 'next/font/google';
import './v2.css';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-v2-display',
  display: 'swap',
});

const sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-v2-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OpenMarket Africa — Intra-African wholesale trade infrastructure',
  description:
    'The coordination layer for open-market commerce across Africa. Restock, fulfill, and settle with verified payments — from Lagos Island to Kariakoo.',
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`v2-theme min-h-screen font-[family-name:var(--font-v2-sans)] ${display.variable} ${sans.variable}`}
    >
      {children}
    </div>
  );
}
