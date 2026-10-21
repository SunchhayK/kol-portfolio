import { mailUrl, site, telegramUrl } from '@/data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="footer__links">
          <a href={mailUrl}>{site.email}</a>
          <a href={telegramUrl} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
