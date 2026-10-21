'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories, projects, type Category } from '@/data/projects';
import { asset } from '@/lib/paths';

type Filter = 'All' | Category;

export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>('All');
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter work by category">
        {(['All', ...categories] as Filter[]).map((c) => (
          <button
            key={c}
            type="button"
            className="chip"
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="work-grid">
        {list.map((p) => (
          <article className="card" data-reveal key={p.slug}>
            <Link href={`/projects/${p.slug}/`}>
              <div className={`card__media${p.cover ? '' : ' card__media--text'}`}>
                {p.cover ? (
                  <img
                    src={asset(p.cover)}
                    alt={`${p.title} screens`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                  />
                ) : (
                  <span className="card__glyph">{p.glyph}</span>
                )}
              </div>

              <div className="card__body">
                <p className="card__meta">
                  <b>{p.category}</b>
                  <span>&middot;</span>
                  <span>{p.year}</span>
                </p>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__summary">{p.summary}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
