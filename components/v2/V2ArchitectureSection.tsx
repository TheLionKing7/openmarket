import { OperationalArchitecture } from './OperationalArchitecture';

export function V2ArchitectureSection() {
  return (
    <section id="architecture" className="scroll-mt-24 border-b border-[var(--v2-line)] bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--v2-green)]">
            Operational architecture
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-v2-display)] text-3xl font-semibold text-[var(--v2-ink)] sm:text-4xl">
            How the coordination layer works
          </h2>
          <p className="mt-4 text-[var(--v2-muted)] leading-relaxed">
            Not a consumer marketplace — infrastructure for the traders, wholesalers, and partners who
            already move goods within and across borders every day.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <OperationalArchitecture centered />
        </div>
      </div>
    </section>
  );
}
