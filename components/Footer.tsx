import Link from 'next/link';
import { AUDIENCES } from '@/data/audiences';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:justify-between lg:px-10">
        <div>
          <BrandLogo variant="footer" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            The coordination layer for intra-African wholesale trade. Local markets. Verified
            settlement. Continental ambition.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Register</p>
            <ul className="mt-4 space-y-2 text-sm">
              {AUDIENCES.map((a) => (
                <li key={a.id}>
                  <Link href={a.anchor} className="text-white/80 hover:text-white">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>hello@openmarket.africa</li>
              <li>Lagos · Accra · Nairobi</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Legal</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-8 lg:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          © {new Date().getFullYear()} OpenMarket Africa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
