'use client';

import Image from 'next/image';
import { useState } from 'react';
import { marketImagePath } from '@/data/markets';

type Props = {
  name: string;
  city: string;
  country: string;
  imageFile: string;
};

export function MarketCard({ name, city, country, imageFile }: Props) {
  const [failed, setFailed] = useState(false);
  const src = marketImagePath(imageFile);

  return (
    <article className="group relative mx-3 w-[280px] shrink-0 overflow-hidden rounded-xl border border-border bg-surface-elevated sm:w-[320px]">
      <div className="relative h-44 overflow-hidden sm:h-52">
        {failed ? (
          <div className="flex h-full flex-col justify-end bg-gradient-to-br from-primary/40 via-surface-elevated to-ink p-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent/70">Photo pending</p>
          </div>
        ) : (
          <Image
            src={src}
            alt={`${name} market trading activity`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="320px"
            onError={() => setFailed(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-display text-xl font-semibold tracking-tight text-white">{name}</p>
          <p className="mt-0.5 font-mono text-xs uppercase tracking-widest text-accent-soft/90">
            {city} · {country}
          </p>
        </div>
      </div>
    </article>
  );
}
