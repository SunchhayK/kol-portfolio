import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import { asset } from '@/lib/paths';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="proj">
      <div className="wrap">
        <Link href="/#work" className="proj__back">
          <span>&larr;</span> All work
        </Link>

        <p className="eyebrow">
          {project.category} &middot; {project.year}
        </p>
        <h1 className="proj__title">{project.title}</h1>
        <p className="proj__summary">{project.summary}</p>

        <dl className="proj__meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>{project.tools}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{project.category}</dd>
          </div>
        </dl>

        {project.cover ? (
          <figure className="proj__cover">
            <img
              src={asset(project.cover)}
              alt={`${project.title} cover`}
              width={1600}
              height={1000}
            />
          </figure>
        ) : (
          <div className="proj__cover card__media--text">
            <span className="card__glyph">{project.glyph}</span>
          </div>
        )}

        <div className="proj__body">
          <div className="proj__block">
            <h2>The brief</h2>
            <p>{project.intro}</p>
          </div>

          <div className="proj__block">
            <h2>What I did</h2>
            <ul className="proj__list">
              {project.did.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="proj__block">
            <h2>What I took from it</h2>
            <ul className="proj__list proj__list--learned">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.images.length > 0 && (
          <div className="proj__figures">
            {project.images.map((src, i) => (
              <figure className="proj__figure" key={src}>
                <img
                  src={asset(src)}
                  alt={`${project.title} screen ${i + 1}`}
                  width={1600}
                  height={1000}
                  loading="lazy"
                />
                <figcaption>
                  {project.title} &mdash; {String(i + 1).padStart(2, '0')}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="proj__next">
          <div>
            <p className="proj__next-label">Next project</p>
            <h2 className="proj__next-title">{next.title}</h2>
          </div>
          <Link className="btn btn--ghost" href={`/projects/${next.slug}/`}>
            View it <span className="btn__arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
