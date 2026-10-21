export const site = {
  name: 'Roit Sovanmongkol',
  role: 'UX/UI Designer',
  location: 'Phnom Penh, Cambodia',
  email: 'sovanmongkolroit@gmail.com',

  // TODO: replace with your Telegram username, without the @.
  telegramHandle: 'YOUR_TELEGRAM_HANDLE',

  linkedin: 'https://linkedin.com/in/sovanmongkol-roit',
  resume: '/resume/roit-sovanmongkol-resume.pdf',

  hero: {
    headline: ['I design,', 'test, and', 'rebuild', 'interfaces.'],
    sub: 'UX/UI designer in Phnom Penh. Six months designing internal government systems, a set of public safety products, and a lot of poster work in between.',
  },
} as const;

export const telegramUrl = `https://t.me/${site.telegramHandle}`;
export const mailUrl = `mailto:${site.email}`;
