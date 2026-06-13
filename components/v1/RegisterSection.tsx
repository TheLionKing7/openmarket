'use client';

import { useCallback, useEffect, useState } from 'react';
import { AUDIENCES, type AudienceId } from '@/data/audiences';
import { AudienceRegisterForm } from './AudienceRegisterForm';

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
    <section id="register" className="border-t border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent/80">Join the network</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Register for your lane
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Each form captures what we need for your role — merchants, distributors, partners,
            manufacturers, and logistics firms are onboarded separately.
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
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'border border-border bg-ink/40 text-muted hover:border-accent/40 hover:text-white'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface-elevated">
          <div className="border-b border-border bg-ink/40 px-6 py-5 sm:px-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">{current.label}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-white">{current.headline}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{current.positioning}</p>
          </div>

          <div className="p-6 sm:p-8">
            {formState === 'success' ? (
              <div className="rounded-xl border border-primary/40 bg-primary/10 p-8 text-center">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="audience" value={active} />
                <AudienceRegisterForm audience={active} />

                {formState === 'error' && (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted">
                    By submitting, you agree to be contacted about OpenMarket Africa onboarding.
                  </p>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="shrink-0 rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light disabled:opacity-60"
                  >
                    {formState === 'submitting' ? 'Submitting…' : current.registerCta}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
