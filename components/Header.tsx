'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { asset } from '@/lib/paths';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [onHome]);

  return (
    <header className="header" data-scrolled={scrolled}>
      <div className="wrap header__inner">
        <Link href="/" className="brand" aria-label="Roit Sovanmongkol, home">
          <span className="brand__mark">RS</span>
          <span>
            <span className="brand__name">Roit Sovanmongkol</span>
            <br />
            <span className="brand__role">UX/UI Designer</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={onHome ? `#${link.id}` : asset(`/#${link.id}`)}
              className="nav__link"
              aria-current={onHome && active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
          <Link href="/resume" className="nav__link nav__cta">
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
