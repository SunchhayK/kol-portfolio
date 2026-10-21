import { mailUrl, site, telegramUrl } from '@/data/site';
import { asset } from '@/lib/paths';

export default function Contact() {
  return (
    <div className="contact-panel" data-reveal>
      <p className="eyebrow">Contact</p>
      <h2 className="h2">Let&rsquo;s talk about the work.</h2>
      <p className="lede">
        Open to UX/UI roles and freelance design work. I reply to everything, usually within a day.
      </p>

      <p style={{ marginTop: '1.75rem' }}>
        <a className="contact__email" href={mailUrl}>
          {site.email}
        </a>
      </p>

      <div className="contact__actions">
        <a className="btn btn--primary" href={mailUrl}>
          Email me
          <span className="btn__arrow">&rarr;</span>
        </a>
        <a className="btn btn--ghost" href={telegramUrl} target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a className="btn btn--ghost" href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn btn--ghost" href={asset(site.resume)} download>
          Resume
        </a>
      </div>
    </div>
  );
}
