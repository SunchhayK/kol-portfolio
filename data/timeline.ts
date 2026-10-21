export type Entry = {
  period: string;
  title: string;
  org: string;
  note: string;
  current?: boolean;
};

export const timeline: Entry[] = [
  {
    period: '2023 - 2026',
    title: 'BSc Digital Economy, International Program',
    org: 'National University of Management',
    note: 'Fourth year. GPA 3.5. Expected graduation August 2026.',
    current: true,
  },
  {
    period: 'Dec 2025',
    title: 'Digital Government Forum',
    org: 'Ministry of Post and Telecommunications',
    note: 'Hospitality and attendee guidance.',
  },
  {
    period: 'Nov 2025',
    title: 'IDP Global Education & Career Expo',
    org: 'Event organiser',
    note: 'Event operations and participant assistance.',
  },
  {
    period: 'Jul - Dec 2025',
    title: 'UX/UI Intern',
    org: 'Ministry of Post and Telecommunications',
    note: 'Ran end to end design for a case reporting and content management system.',
  },
  {
    period: 'Jul - Nov 2025',
    title: 'Visual design lead',
    org: 'Think on One’s Feet Symposium',
    note: 'Posters, presentation slides, and the registration campaign.',
  },
  {
    period: 'Aug 2025',
    title: 'Organiser',
    org: 'Online Safety Forum',
    note: 'Registration and session documentation.',
  },
  {
    period: 'Feb - Mar 2025',
    title: 'Food Recipe App',
    org: 'Self-initiated project',
    note: 'Wireframes, visual design, interactive prototype.',
  },
  {
    period: 'Jan - Mar 2025',
    title: 'UX/UI Design course',
    org: 'IT STEP Academy Cambodia',
    note: 'Full time course in product and interface design.',
  },
  {
    period: 'Sep - Nov 2024',
    title: 'Logistics member',
    org: 'Clean Energy Week',
    note: 'Materials preparation and participant support.',
  },
  {
    period: 'Feb 2024 - present',
    title: 'Social media member',
    org: 'ERobot',
    note: 'Graphic design, video editing, copywriting.',
  },
  {
    period: 'Jan - Mar 2024',
    title: 'Student mentor',
    org: 'MOEYS Digital Education Agency',
    note: 'Mentored high school students on study techniques and exam preparation.',
  },
  {
    period: 'Aug 2024',
    title: 'Learning Express programme',
    org: 'Singapore Polytechnic',
    note: 'Social innovation and design thinking, with field research and a community homestay in Kampong Cham.',
  },
  {
    period: '2023 - 2025',
    title: 'Brand and product design',
    org: 'Lava',
    note: 'Social channels, market research, and feature specification for a decentralised delivery app.',
  },
  {
    period: 'Apr - May 2023',
    title: 'Marketing intern',
    org: 'Spring Education Center',
    note: 'Sales initiatives, marketing plans, and social media content.',
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: 'Design',
    items: [
      'Figma',
      'Design Thinking',
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Design Systems',
      'Mobile App Design',
      'Web Design',
    ],
  },
  {
    label: 'Research',
    items: ['User Research', 'Usability Testing', 'Personas', 'Stakeholder Interviews'],
  },
  {
    label: 'Production',
    items: ['Graphic Design', 'Canva', 'CapCut', 'Presentation Design', 'Copywriting'],
  },
  {
    label: 'Building',
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'Git'],
  },
];

export const awards = [
  { year: '2025', title: 'LOTTE Scholarship', note: 'Full tuition, one academic year.' },
  { year: '2024', title: 'Third place, business plan competition', note: 'Spring Education Center.' },
  { year: '2023', title: 'USAID Scholarship', note: 'Two years, full tuition, stipend and health insurance.' },
];

export const bio = [
  'I came to design from the market side. A marketing internship first, then six months as a UX/UI intern at the Ministry of Post and Telecommunications, and every project since that has put me in front of users and asked me to explain what I built.',
  'I work fast and I keep the work visible. Figma is where I think, and I would rather hand over something half finished and honest than something polished and vague.',
];
