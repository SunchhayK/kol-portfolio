'use client';

import { useEffect, useRef } from 'react';

export default function ProgressBar() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!bar.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      bar.current.style.transform = `scaleX(${ratio})`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="progress" ref={bar} aria-hidden="true" />;
}
