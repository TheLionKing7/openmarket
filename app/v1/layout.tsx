import type { Metadata } from 'next';

/** Archived v1 — dark editorial theme, kept for reference (not linked from production) */
export const metadata: Metadata = {
  title: 'OpenMarket Africa (archived v1)',
  robots: { index: false, follow: false },
};

export default function V1ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ink font-sans text-[#f4f6f8]">{children}</div>
  );
}
