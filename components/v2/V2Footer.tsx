import Link from 'next/link';
import { AUDIENCES } from '@/data/audiences';
import { BrandLogo } from '@/components/BrandLogo';

export function V2Footer() {
  return (
    <footer className="border-t border-[var(--v2-line)] bg-[var(--v2-paper-deep)] py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between">
        <div>
          <BrandLogo variant="footer" className="brightness-0" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--v2-muted)]">
            The intelligent coordination layer for intra-African wholesale trade. Local markets.
            Verified settlement. Continental ambition.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v2-muted)]">Register</p>
            <ul className="mt-3 space-y-2 text-sm">
              {AUDIENCES.map((a) => (
                <li key={a.id}>
                  <Link href={`/v2${a.anchor}`} className="text-[var(--v2-ink)] hover:text-[var(--v2-green)]">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v2-muted)]">Compare</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--v2-ink)]">
              <li>
                <Link href="/" className="hover:text-[var(--v2-green)]">
                  Current site (v1)
                </Link>
              </li>
              <li>
                <Link href="/v2" className="hover:text-[var(--v2-green)]">
                  Design preview (v2)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v2-muted)]">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--v2-muted)]">
              <li>hello@openmarket.africa</li>
              <li>Lagos · Accra · Nairobi</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--v2-line)] px-4 pt-6 sm:px-6">
        <p className="text-xs uppercase tracking-widest text-[var(--v2-muted)]">
          © {new Date().getFullYear()} OpenMarket Africa
        </p>
      </div>
    </footer>
  );
}
