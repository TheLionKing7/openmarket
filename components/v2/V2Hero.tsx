import Link from 'next/link';
import { OperationalArchitecture } from './OperationalArchitecture';

export function V2Hero() {
  return (
    <section className="border-b border-[var(--v2-line)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--v2-green)]">
            Wholesale infrastructure
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-v2-display)] text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--v2-ink)] sm:text-5xl lg:text-[3.25rem]">
            Where open markets meet{' '}
            <span className="text-[var(--v2-green)]">verified settlement.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--v2-muted)]">
            OpenMarket coordinates intra-African wholesale trade — merchants restock, distributors
            fulfill from virtual warehouse ledgers, and every naira splits on a programmable ledger.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/v2#register"
              className="rounded-md bg-[var(--v2-green)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Join the network
            </Link>
            <Link
              href="/v2#architecture"
              className="rounded-md border border-[var(--v2-line-strong)] bg-white px-6 py-3 text-sm font-semibold text-[var(--v2-ink)] transition hover:bg-[var(--v2-paper-deep)]"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-8 text-sm text-[var(--v2-muted)]">
            <span className="font-semibold text-[var(--v2-ink)]">Design preview</span> — compare with{' '}
            <Link href="/" className="text-[var(--v2-green)] underline-offset-2 hover:underline">
              current site
            </Link>
          </p>
        </div>

        <div id="architecture" className="scroll-mt-24">
          <OperationalArchitecture />
        </div>
      </div>
    </section>
  );
}
