import type { Metadata } from 'next';
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import RevealWatcher from '@/components/RevealWatcher';
import { site } from '@/data/site';
import { basePath } from '@/lib/paths';

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

// TODO: point this at your real Pages URL before deploying.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    'UX/UI designer in Phnom Penh. Product work for safety and government systems, campaign and event design, and the process behind all of it.',
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      'UX/UI designer in Phnom Penh. Product work for safety and government systems, campaign and event design, and the process behind all of it.',
    type: 'website',
    images: [`${basePath}/og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: 'UX/UI designer in Phnom Penh.',
    images: [`${basePath}/og.png`],
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`no-js ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }}
        />
        <ProgressBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <RevealWatcher />
      </body>
    </html>
  );
}
