'use client';

import { useEffect, useRef } from 'react';
import { site } from '@/data/site';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    };

    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <section className="hero" ref={ref}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="wrap hero__inner">
        <p className="hero__status">Graduating Aug 2026 &middot; Phnom Penh</p>

        <h1 className="hero__title">
          {site.hero.headline.map((line, i) => (
            <span className="hero__line" key={line}>
              <span>
                {i === 2 ? <em>{line}</em> : line}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero__sub">{site.hero.sub}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            See the work
            <span className="btn__arrow">&rarr;</span>
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <span className="hero__scroll" aria-hidden="true">
        Scroll
      </span>
    </section>
  );
}
