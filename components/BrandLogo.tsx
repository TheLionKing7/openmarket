'use client';

import { useEffect, useRef, useState } from 'react';
import { AfricaLockup } from './AfricaLockup';

type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

/** logo.svg viewBox 681.75 × 205.5 — gold MARKET occupies the right wordmark band */
const AFRICA_LAYOUT = {
  header: {
    left: '54%',
    width: '41%',
    top: '67%',
    fontSize: 'clamp(8px, 0.82vw, 11px)',
  },
  footer: {
    left: '54%',
    width: '41%',
    top: '67%',
    fontSize: '11px',
  },
} as const;

export function BrandLogo({ variant = 'header', className = '' }: Props) {
  const isHeader = variant === 'header';
  const layout = isHeader ? AFRICA_LAYOUT.header : AFRICA_LAYOUT.footer;
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete) setLogoReady(true);
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative inline-block max-w-full leading-none ${className}`}
      aria-label="OpenMarket Africa"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src="/logo.svg"
        alt=""
        aria-hidden
        width={isHeader ? 280 : 320}
        height={isHeader ? 72 : 88}
        decoding="async"
        fetchPriority={isHeader ? 'high' : 'auto'}
        onLoad={() => setLogoReady(true)}
        className={`block w-auto max-w-full object-contain object-left ${
          isHeader ? 'h-11 sm:h-[3.25rem]' : 'h-14 sm:h-16'
        }`}
      />
      <AfricaLockup layout={layout} anchorRef={wrapRef} ready={logoReady} />
    </div>
  );
}
