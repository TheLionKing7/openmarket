'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BrandLogo } from './BrandLogo';

const NAV = [
  { href: '#markets', label: 'Markets' },
  { href: '#platform', label: 'Platform' },
  { href: '#retailers', label: 'Retailers' },
  { href: '#distributors', label: 'Distributors' },
  { href: '#partners', label: 'Partners' },
  { href: '#manufacturer', label: 'Manufacturers' },
  { href: '#logistics', label: 'Logistics' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.5rem] lg:px-10">
        <Link href="/" className="flex min-w-0 items-center" onClick={closeMenu}>
          <BrandLogo variant="header" priority />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="#register"
            className="hidden rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-soft transition hover:bg-accent/20 sm:inline-flex"
            onClick={closeMenu}
          >
            Register
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-white xl:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-ink px-4 py-4 xl:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-surface-elevated hover:text-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#register"
                className="block rounded-full border border-accent/40 bg-accent/10 px-4 py-3 text-center text-sm font-semibold text-accent-soft"
                onClick={closeMenu}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
