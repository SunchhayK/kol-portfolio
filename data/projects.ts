export type Category = 'Product' | 'Campaign' | 'Event';

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  period: string;
  role: string;
  tools: string;
  /** null renders a typographic cover, used where the work is not cleared for publication */
  cover: string | null;
  /** short mark shown on the typographic cover */
  glyph?: string;
  images: string[];
  summary: string;
  intro: string;
  did: string[];
  learned: string[];
};

export const categories: Category[] = ['Product', 'Campaign', 'Event'];

export const projects: Project[] = [
  {
    slug: 'online-safety-reporting',
    title: 'Online Safety Reporting System',
    category: 'Product',
    year: '2025',
    period: 'Jul 2025 - Aug 2025',
    role: 'UX/UI Designer',
    tools: 'Figma, Wireframing, Prototyping',
    cover: '/work/online-safety-reporting/cover.webp',
    images: [
      '/work/online-safety-reporting/01.webp',
      '/work/online-safety-reporting/02.webp',
      '/work/online-safety-reporting/03.webp',
      '/work/online-safety-reporting/04.webp',
    ],
    summary:
      'A reporting flow for online threats, designed so someone having a bad day can still finish it.',
    intro:
      'Reporting harassment usually starts at the worst moment of someone’s day. The goal was a form that does not feel like a form: short steps, plain language, and a clear sense of what happens after someone hits submit.',
    did: [
      'Mapped the reporting journey end to end and rewrote it into six short steps, one question per screen.',
      'Built wireframes and an interactive prototype in Figma, then walked classmates through them to check the wording landed.',
      'Defined the states a report can be in and designed the tracking view, so a reporter is never left guessing what happens next.',
    ],
    learned: [
      'Designing for a stressed user means removing decisions, not adding reassurance.',
      'Plain language was the biggest win. Testers moved through the form faster the moment it stopped sounding official.',
    ],
  },
  {
    slug: 'case-reporting-cms',
    title: 'Case Reporting & Content Management System',
    category: 'Product',
    year: '2025',
    period: 'Jun 2025 - Dec 2025',
    role: 'UX/UI Intern',
    tools: 'Figma, User Research, Prototyping',
    cover: null,
    glyph: 'CASE / CMS',
    images: [],
    summary:
      'One internal system to log cases, move them through review, and publish approved content. No screens shown while clearance is pending.',
    intro:
      'The most substantial project I have worked on. The team needed a single system to log cases, route them through review, and publish what was approved. There was no legacy tool to inherit, so research and definition came before any interface existed.',
    did: [
      'Ran user research and stakeholder interviews across the organisation to work out what a case actually is and who touches it.',
      'Turned those interviews into personas and scenarios, then into the technical requirements the developers built against.',
      'Designed high fidelity wireframes, user flows and interactive prototypes in Figma so the flow could be tested before any code was written.',
    ],
    learned: [
      'The interface was never the hard part. Getting six people to agree on what the system was for was.',
      'Prototyping early with real stakeholders replaces a long meeting with a short conversation.',
    ],
  },
  {
    slug: 'food-recipe-app',
    title: 'Food Recipe App Prototype',
    category: 'Product',
    year: '2025',
    period: 'Feb 2025 - Mar 2025',
    role: 'Self-initiated',
    tools: 'Figma, Wireframing, Prototyping',
    cover: '/work/food-recipe-app/cover.webp',
    images: [
      '/work/food-recipe-app/01.webp',
      '/work/food-recipe-app/02.webp',
      '/work/food-recipe-app/03.webp',
      '/work/food-recipe-app/04.webp',
    ],
    summary:
      'A recipe app that puts browsing and cooking on one screen, so the ingredient list is never far away.',
    intro:
      'A self-initiated prototype. Most recipe apps separate browsing from cooking, which means you hunt for the ingredient list with flour on your hands. This one puts both on one screen and tests whether that actually works.',
    did: [
      'Laid out low fidelity wireframes for the app structure, covering browse, search and cook modes.',
      'Set the typography and colour palette across the interface.',
      'Built an interactive prototype to demonstrate the UI improvements and test the cook mode interactions.',
    ],
    learned: [
      'Prototyping in low fidelity first kept the layout honest. Pretty colours were hiding flow problems until far too late.',
      'Cook mode needs bigger targets and fewer words than browse mode, even though it is the same app.',
    ],
  },
  {
    slug: 'digilab-learning',
    title: 'DigiLab Learning Platform',
    category: 'Product',
    year: '2025',
    period: '2025',
    role: 'UX/UI Designer',
    tools: 'Figma, Design Systems, Agile',
    cover: '/work/digilab-learning/cover.webp',
    images: [
      '/work/digilab-learning/01.webp',
      '/work/digilab-learning/02.webp',
      '/work/digilab-learning/03.webp',
      '/work/digilab-learning/04.webp',
    ],
    summary:
      'Type, colour and layout systems for a gamified learning platform, built to survive a small screen.',
    intro:
      'DigiLab is a learning platform built around short challenges. My work sat on the visual layer: the type scale, the colour hierarchy, and the layout system that keeps a gamified product from turning noisy.',
    did: [
      'Built the typography and colour hierarchy so progress and score read at a glance on a small screen.',
      'Worked in an agile loop with the project manager, iterating on feature designs in short cycles.',
      'Checked the flow against usability standards so a student working through a lesson never lost the thread.',
    ],
    learned: [
      'Gamification is a hierarchy problem. When everything glows, nothing glows.',
      'Short iteration cycles taught me to design in pieces small enough to ship and check.',
    ],
  },
  {
    slug: 'lava',
    title: 'Lava, a decentralised delivery app',
    category: 'Product',
    year: '2025',
    period: '2023 - 2025',
    role: 'Brand and Product Design',
    tools: 'Figma, Canva, CapCut, User Flows',
    cover: '/work/lava/cover.webp',
    images: [
      '/work/lava/01.webp',
      '/work/lava/02.webp',
      '/work/lava/03.webp',
      '/work/lava/04.webp',
    ],
    summary:
      'Brand channels, market research and feature specs for a decentralised delivery app, from social post to engineering handoff.',
    intro:
      'Lava is a decentralised delivery app. I joined through the brand side and moved into product: running the social channels first, then documenting the product work for the engineering team.',
    did: [
      'Designed promotional graphics and short videos, and handled brand communication across the social channels.',
      'Researched user requirements, market trends and the technical features the product needed.',
      'Documented workflows, user journeys and feature specifications so design could hand off to engineering cleanly.',
    ],
    learned: [
      'Working on both sides of a product made me better at judging which features are worth the effort.',
      'Writing a feature spec well is a design skill, not a documentation chore.',
    ],
  },
  {
    slug: 'ones-feet-symposium',
    title: 'Think on One’s Feet Symposium',
    category: 'Campaign',
    year: '2025',
    period: 'Jul 2025 - Nov 2025',
    role: 'Visual Design Lead',
    tools: 'Figma, Canva, PowerPoint, Social Media',
    cover: '/work/ones-feet-symposium/cover.webp',
    images: [
      '/work/ones-feet-symposium/01.webp',
      '/work/ones-feet-symposium/02.webp',
      '/work/ones-feet-symposium/03.webp',
      '/work/ones-feet-symposium/04.webp',
    ],
    summary:
      'Posters, slides and a registration campaign for a student symposium with no budget.',
    intro:
      'A student-run symposium with a real audience and a real budget problem. The visual work had to hold together across posters, presentation slides and social posts, and it had to be produced by people with no money to spend on it.',
    did: [
      'Led visual execution for the posters and the presentation deck, holding brand consistency across both.',
      'Ran the social media and direct outreach campaign that drove registrations and attendance.',
      'Helped land sponsorships by identifying the right contacts and managing the communication through to funding.',
    ],
    learned: [
      'Consistency is cheaper than inspiration. One set of templates beat three redraws.',
      'Promotion and design are the same job when the event is small. The poster is the campaign.',
    ],
  },
  {
    slug: 'erobot-social',
    title: 'ERobot Social Media',
    category: 'Campaign',
    year: '2026',
    period: 'Feb 2024 - present',
    role: 'Social Media Member',
    tools: 'Graphic Design, Video Editing, Copywriting',
    cover: '/work/erobot-social/cover.webp',
    images: [
      '/work/erobot-social/01.webp',
      '/work/erobot-social/02.webp',
      '/work/erobot-social/03.webp',
      '/work/erobot-social/04.webp',
    ],
    summary:
      'Ongoing social content for a robotics education programme: graphics, short video, and the words that go with them.',
    intro:
      'ERobot teaches young people to build robots. I have been part of the social side as a core member since early 2024, handling the graphics, the short videos, and the copy.',
    did: [
      'Produce social graphics and edit video for the programme’s channels.',
      'Write the copy and keep the posting rhythm consistent across the content calendar.',
    ],
    learned: [
      'A consistent posting rhythm matters more than a single great post.',
      'Explaining a technical idea to a younger audience taught me to start from what they can see, not from what I already know.',
    ],
  },
  {
    slug: 'online-safety-forum',
    title: 'Online Safety Forum',
    category: 'Event',
    year: '2025',
    period: 'Aug 2025',
    role: 'Organiser',
    tools: 'Registration Flow, Documentation',
    cover: '/work/online-safety-forum/cover.webp',
    images: [
      '/work/online-safety-forum/01.webp',
      '/work/online-safety-forum/02.webp',
      '/work/online-safety-forum/03.webp',
      '/work/online-safety-forum/04.webp',
    ],
    summary:
      'Organising a forum on the same subject I had been designing for, from registration through to session documentation.',
    intro:
      'An event on exactly the subject I had been designing for. Organising it meant owning the registration flow and the session documentation, not only the visuals.',
    did: [
      'Ran registration and produced the session documentation for the forum.',
      'Coordinated the day with the wider organising team.',
    ],
    learned: [
      'Designing a registration flow and running one are the same problem seen from opposite ends.',
      'Events teach deadlines. A poster is late when the doors open, not when the file is finished.',
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
