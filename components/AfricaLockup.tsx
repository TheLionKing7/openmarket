'use client';

const AFRICA = 'AFRICA'.split('');

type Band = {
  left: string;
  width: string;
  top: string;
  fontSize: string;
};

export function AfricaLockup({ band }: { band: Band }) {
  return (
    <div
      className="pointer-events-none absolute flex justify-between font-sans font-bold uppercase leading-none"
      style={{
        left: band.left,
        width: band.width,
        top: band.top,
        fontSize: band.fontSize,
        color: '#FFFFFF',
      }}
      aria-hidden
    >
      {AFRICA.map((letter, index) => (
        <span key={`${letter}-${index}`}>{letter}</span>
      ))}
    </div>
  );
}
