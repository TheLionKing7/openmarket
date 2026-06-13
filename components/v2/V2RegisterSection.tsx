'use client';

import { useCallback, useEffect, useState } from 'react';
import { AUDIENCES, type AudienceId } from '@/data/audiences';
import { AudienceRegisterForm } from '@/components/v1/AudienceRegisterForm';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function audienceFromHash(): AudienceId {
  if (typeof window === 'undefined') return 'merchant';
  const hash = window.location.hash.replace('#register-', '') as AudienceId;
  return AUDIENCES.some((a) => a.id === hash) ? hash : 'merchant';
}

export function V2RegisterSection() {
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
    <section id="register" className="border-t border-[var(--v2-line)] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-v2-display)] text-2xl font-semibold text-[var(--v2-ink)] sm:text-3xl">
          Register for your lane
        </h2>
        <p className="mt-3 text-[var(--v2-muted)]">
          Merchants, distributors, partners, manufacturers, and logistics firms onboard separately.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist">
          {AUDIENCES.map((a) => (
            <button
              key={a.id}
              type="button"
              role="tab"
              aria-selected={active === a.id}
              onClick={() => selectAudience(a.id)}
              className={`rounded-md px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                active === a.id
                  ? 'bg-[var(--v2-green)] text-white'
                  : 'border border-[var(--v2-line)] bg-[var(--v2-paper)] text-[var(--v2-muted)] hover:border-[var(--v2-green)]'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-[var(--v2-line)] bg-[var(--v2-paper)] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--v2-green)]">
            {current.label}
          </p>
          <h3 className="mt-1 font-[family-name:var(--font-v2-display)] text-xl font-semibold text-[var(--v2-ink)]">
            {current.headline}
          </h3>
          <p className="mt-2 text-sm text-[var(--v2-muted)]">{current.positioning}</p>

          <div className="mt-6 [&_input]:border-[var(--v2-line-strong)] [&_input]:bg-white [&_input]:text-[var(--v2-ink)] [&_label]:text-[var(--v2-ink)]">
            {formState === 'success' ? (
              <div className="rounded-md border border-[var(--v2-green)] bg-[var(--v2-green-soft)] p-6 text-center">
                <p className="font-semibold text-[var(--v2-ink)]">Registration received.</p>
                <p className="mt-2 text-sm text-[var(--v2-muted)]">
                  We&apos;ll contact you within 48 hours for {current.label.toLowerCase()} onboarding.
                </p>
                <button
                  type="button"
                  onClick={() => setFormState('idle')}
                  className="mt-4 text-sm font-semibold text-[var(--v2-green)] hover:underline"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="audience" value={active} />
                <AudienceRegisterForm audience={active} />

                {formState === 'error' && (
                  <p className="text-sm text-red-700" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full rounded-md bg-[var(--v2-green)] py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-10"
                >
                  {formState === 'submitting' ? 'Submitting…' : current.registerCta}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
