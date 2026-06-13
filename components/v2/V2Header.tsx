'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE_NAV } from '@/data/audiences';
import { BrandLogo } from '@/components/BrandLogo';

export function V2Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--v2-line)] bg-[var(--v2-paper)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.25rem]">
        <Link href="/" className="flex shrink-0 items-center" aria-label="OpenMarket Africa home">
          <BrandLogo variant="header" theme="light" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {SITE_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--v2-muted)] transition hover:text-[var(--v2-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="#register"
            className="rounded-md bg-[var(--v2-green)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Register
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--v2-line-strong)] lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--v2-line)] px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {SITE_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-[var(--v2-muted)] hover:bg-[var(--v2-paper-deep)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
