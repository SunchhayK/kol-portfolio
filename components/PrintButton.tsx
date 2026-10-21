'use client';

import Link from 'next/link';

export default function PrintButton() {
  return (
    <div className="resume-print-bar">
      <button type="button" className="btn btn--primary" onClick={() => window.print()}>
        Save as PDF
      </button>
      <Link className="btn btn--ghost" href="/">
        Back to the site
      </Link>
    </div>
  );
}
