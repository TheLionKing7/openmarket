'use client';

import { useCallback, useEffect, useState } from 'react';
import { AUDIENCES, type AudienceId } from '@/data/audiences';

const inputClass =
  'w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-white outline-none ring-accent/50 transition focus:ring-2';

const labelClass = 'mb-1.5 block text-xs font-medium text-muted';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function audienceFromHash(): AudienceId {
  if (typeof window === 'undefined') return 'merchant';
  const hash = window.location.hash.replace('#register-', '') as AudienceId;
  return AUDIENCES.some((a) => a.id === hash) ? hash : 'merchant';
}

export function RegisterSection() {
  const [active, setActive] = useState<AudienceId>('merchant');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const syncFromHash = useCallback(() => {
    setActive(audienceFromHash());
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [syncFromHash]);

  function selectAudience(id: AudienceId) {
    setActive(id);
    setFormState('idle');
    setErrorMsg('');
    window.history.replaceState(null, '', `#register-${id}`);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ audience: active, ...data }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Registration failed');
      }
      setFormState('success');
      form.reset();
    } catch (err) {
      setFormState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  const current = AUDIENCES.find((a) => a.id === active)!;

  return (
    <section id="register" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">Join the network</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Register for your lane
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Select your role. We route each registration to the right onboarding path — merchant app,
            distributor ledger, affiliate dashboard, manufacturer enterprise, or logistics partnership.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 px-1" role="tablist">
          {AUDIENCES.map((a) => (
            <button
              key={a.id}
              type="button"
              role="tab"
              aria-selected={active === a.id}
              id={`register-${a.id}`}
              onClick={() => selectAudience(a.id)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
                active === a.id
                  ? 'bg-primary text-white'
                  : 'border border-border text-muted hover:border-accent/40 hover:text-white'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface-elevated/50 p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">{current.label}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{current.headline}</h3>
          <p className="mt-2 text-sm text-muted">{current.positioning}</p>

          {formState === 'success' ? (
            <div className="mt-8 rounded-xl border border-primary/40 bg-primary/10 p-6 text-center">
              <p className="font-display text-xl text-white">Registration received.</p>
              <p className="mt-2 text-sm text-muted">
                We&apos;ll contact you within 48 hours to complete onboarding as a{' '}
                {current.label.toLowerCase().replace(/s$/, '')}.
              </p>
              <button
                type="button"
                onClick={() => setFormState('idle')}
                className="mt-6 text-sm font-semibold text-accent-soft hover:underline"
              >
                Submit another registration
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input type="hidden" name="audience" value={active} />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Full name</span>
                  <input required name="name" className={inputClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className={labelClass}>WhatsApp / phone</span>
                  <input required name="phone" type="tel" className={inputClass} placeholder="+234 …" />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Email</span>
                  <input name="email" type="email" className={inputClass} placeholder="you@company.com" />
                </label>
                <label className="block">
                  <span className={labelClass}>Business / company name</span>
                  <input required name="business" className={inputClass} placeholder="Legal or trading name" />
                </label>
              </div>

              {(active === 'merchant' || active === 'affiliate' || active === 'distributor') && (
                <label className="block">
                  <span className={labelClass}>Primary market hub</span>
                  <input
                    required
                    name="marketHub"
                    className={inputClass}
                    placeholder="e.g. Alaba, Lagos · Kejetia, Kumasi"
                  />
                </label>
              )}

              {active === 'merchant' && (
                <label className="block">
                  <span className={labelClass}>Shop / stall name</span>
                  <input required name="shopName" className={inputClass} placeholder="As customers know you" />
                </label>
              )}

              {active === 'distributor' && (
                <>
                  <label className="block">
                    <span className={labelClass}>Markets & regions served</span>
                    <input
                      required
                      name="coverage"
                      className={inputClass}
                      placeholder="e.g. Mile 12, Mushin, Oke-Arin"
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Approx. SKU lines in stock</span>
                    <input name="skuCount" className={inputClass} placeholder="e.g. 120" />
                  </label>
                </>
              )}

              {active === 'affiliate' && (
                <label className="block">
                  <span className={labelClass}>How will you reach merchants?</span>
                  <textarea
                    required
                    name="outreach"
                    rows={3}
                    className={inputClass}
                    placeholder="Market association, delivery routes, community trust…"
                  />
                </label>
              )}

              {active === 'manufacturer' && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Country of operations</span>
                      <input required name="country" className={inputClass} placeholder="e.g. Nigeria" />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Primary category</span>
                      <input
                        required
                        name="category"
                        className={inputClass}
                        placeholder="e.g. FMCG · Beverages · Textiles"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className={labelClass}>Interest</span>
                    <select required name="manufacturerInterest" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select primary interest
                      </option>
                      <option value="telemetry">Demand telemetry & market intelligence</option>
                      <option value="subsidy">SmartSubsidy trade campaigns</option>
                      <option value="procurement">Tier-1 procurement / distributor deals</option>
                      <option value="all">Enterprise partnership — all lanes</option>
                    </select>
                  </label>
                </>
              )}

              {active === 'logistics' && (
                <>
                  <label className="block">
                    <span className={labelClass}>Corridors served</span>
                    <input
                      required
                      name="corridors"
                      className={inputClass}
                      placeholder="e.g. Lagos ↔ Accra · South-East Nigeria"
                    />
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Fleet / capacity</span>
                      <input
                        required
                        name="fleet"
                        className={inputClass}
                        placeholder="e.g. 12 vans · 4 trucks"
                      />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Operating license (optional)</span>
                      <input name="license" className={inputClass} placeholder="Reg. number if applicable" />
                    </label>
                  </div>
                </>
              )}

              <label className="block">
                <span className={labelClass}>Anything else? (optional)</span>
                <textarea name="notes" rows={2} className={inputClass} placeholder="Volume, timeline, questions…" />
              </label>

              {formState === 'error' && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full rounded-full bg-primary py-4 text-sm font-semibold text-white transition hover:bg-primary-light disabled:opacity-60 sm:w-auto sm:px-12"
              >
                {formState === 'submitting' ? 'Submitting…' : current.registerCta}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
