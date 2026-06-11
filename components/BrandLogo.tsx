'use client';

import { AfricaLockup } from './AfricaLockup';

type Props = {
  variant?: 'header' | 'footer';
  priority?: boolean;
  className?: string;
};

/**
 * Measured from logo.svg raster (909×274): Africa spans M→T in MARKET.
 * left 50.275%, width 40.814%, baseline top 63.5% of logo height.
 */
const MARKET_BAND = {
  header: {
    left: '50.275%',
    width: '40.814%',
    top: '63.5%',
    fontSize: 'clamp(9px, 0.95vw, 12.5px)',
  },
  footer: {
    left: '50.275%',
    width: '40.814%',
    top: '63.5%',
    fontSize: '12.5px',
  },
} as const;

export function BrandLogo({ variant = 'header', className = '' }: Props) {
  const isHeader = variant === 'header';
  const band = isHeader ? MARKET_BAND.header : MARKET_BAND.footer;

  return (
    <div
      className={`relative inline-block max-w-full leading-none ${className}`}
      aria-label="OpenMarket Africa"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt=""
        aria-hidden
        width={isHeader ? 280 : 320}
        height={isHeader ? 72 : 88}
        decoding="async"
        fetchPriority={isHeader ? 'high' : 'auto'}
        className={`block w-auto max-w-full object-contain object-left ${
          isHeader ? 'h-11 sm:h-[3.25rem]' : 'h-14 sm:h-16'
        }`}
      />
      <AfricaLockup band={band} />
    </div>
  );
}
