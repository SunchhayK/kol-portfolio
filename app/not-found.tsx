import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: '12rem', minHeight: '70vh' }}>
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="h2" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          That page is not here.
        </h1>
        <p className="lede" style={{ marginTop: '1.5rem' }}>
          It may have moved, or it may never have existed.
        </p>
        <p style={{ marginTop: '2.5rem' }}>
          <Link className="btn btn--primary" href="/">
            Back to the work <span className="btn__arrow">&rarr;</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
