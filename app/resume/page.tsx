import type { Metadata } from 'next';
import PrintButton from '@/components/PrintButton';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of ${site.name}, ${site.role} in Phnom Penh.`,
};

const experience = [
  {
    title: 'UX/UI Intern',
    org: 'Ministry of Post and Telecommunications',
    date: 'Jun 2025 - Dec 2025',
    bullets: [
      'Ran end-to-end design for a Case Reporting & Content Management System, conducting user research and stakeholder interviews to define technical requirements.',
      'Developed high-fidelity wireframes, user flows, and interactive prototypes in Figma to streamline system navigation.',
      'Synthesized research into personas and scenarios that guided development and digital safety campaign strategies.',
      'Produced visual assets and presentation materials for the Cambodia Community Tech Center and local product marketing.',
    ],
  },
  {
    title: 'Marketing Intern',
    org: 'Spring Education Center',
    date: 'Apr 2023 - May 2023',
    bullets: [
      'Executed sales initiatives, marketing plans, and customer data collection.',
      'Managed social media content to increase brand awareness and audience engagement.',
    ],
  },
];

const education = [
  {
    title: 'Bachelor of Science in Digital Economy',
    org: 'National University of Management, Faculty of Digital Economy',
    date: '2023 - 2026',
    note: 'International Program. GPA 3.5. Expected graduation August 2026.',
  },
  {
    title: 'UX/UI Design Course',
    org: 'IT STEP Academy Cambodia',
    date: 'Jan 2025 - Mar 2025',
    note: '',
  },
  {
    title: 'General English Program and Diploma Program',
    org: 'Australian Center for Education',
    date: '2021 - 2025',
    note: 'Diploma included public speaking, listening and notetaking, reading and vocabulary.',
  },
];

const projects = [
  {
    title: 'Online Safety Reporting System',
    date: 'Jul 2025 - Aug 2025',
    bullets: [
      'Designed an intuitive platform enabling users to report online threats and harassment.',
      'Built a clickable interactive prototype for realistic user testing and workflow validation.',
    ],
  },
  {
    title: 'Think on One’s Feet Symposium',
    date: 'Jul 2025 - Nov 2025',
    bullets: [
      'Led visual design execution for posters and presentation slides, maintaining brand consistency.',
      'Promoted campaigns through social media and direct outreach, increasing registration and attendance.',
      'Assisted sponsorship acquisition by identifying target contacts and managing communication pipelines.',
    ],
  },
  {
    title: 'Lava, a decentralised delivery app',
    date: '2023 - 2025',
    bullets: [
      'Managed social channels through promotional graphics and short video.',
      'Documented workflows, user journeys, and feature specifications for design and engineering handoff.',
    ],
  },
  {
    title: 'Food Recipe App Prototype',
    date: 'Feb 2025 - Mar 2025',
    bullets: [
      'Built low-fidelity wireframes defining layout and architecture for a recipe application.',
      'Created an interactive prototype to demonstrate UI improvements and test user interactions.',
    ],
  },
];

const skills = {
  'UX & UI Design': 'Figma, Design Thinking, Web Design, Mobile App Design',
  'Graphic & Video': 'Canva, CapCut, Graphic Design, Presentation Design',
  Productivity: 'Microsoft Word, PowerPoint, Excel',
  Programming: 'Python, HTML, CSS',
  Methods: 'User Research, Wireframing, Prototyping, Usability Testing',
};

const honours = [
  'LOTTE Scholarship (2025) - full tuition, one academic year.',
  'Third place business plan winner (2024) - Spring Education Center competition.',
  'USAID Scholarship (2023) - two years, full tuition, stipend and health insurance.',
];

const involvement = [
  'ERobot - social media member, graphic design, video editing, copywriting (Feb 2024 - present).',
  'MOEYS EdTech Cambodia - core member, event coordination and participant support (Feb 2025).',
  'Online Safety Forum - organiser, registration and session documentation (Aug 2025).',
  'IDP Global Education & Career Expo - event organiser (Nov 2025).',
  'Digital Government Forum, MPTC - hospitality (Dec 2025).',
  'MOEYS Digital Education Agency - student mentor (Jan 2024 - Mar 2024).',
  'Clean Energy Week - logistics member (Oct 2024 - Nov 2024).',
  'Smart Cities Youth Network - environmental sustainability member (Sep 2024).',
  '21st Annual CamTESOL - conference crew (Feb 2025).',
  'Learning Express Programme, Singapore Polytechnic - social innovation and design thinking (May 2024).',
  'Data Science Camp, UNESCO UNITWIN - standard level (Aug 2023).',
  'Media and Information Literacy, CCIM - completed 3-month course (Mar 2024 - Jun 2024).',
];

export default function ResumePage() {
  return (
    <div className="resume-page">
      <PrintButton />

      <div className="resume-sheet">
        <h1>{site.name}</h1>
        <p className="resume-sheet__role">
          {site.role} &middot; {site.location}
        </p>
        <p className="resume-sheet__contact">
          {site.email} &middot; +855-78-575-763 &middot; linkedin.com/in/sovanmongkol-roit
        </p>

        <h2>Summary</h2>
        <p>
          Fourth-year Digital Economy student (International Program) at the National University of
          Management, moving a background in digital markets and data into UX/UI design. Reliable,
          deadline-driven collaborator in team environments, with a strong drive to learn new
          methodologies and tools. Focused on designing user experiences that combine usability
          with business and market outcomes.
        </p>

        <h2>Experience</h2>
        {experience.map((job) => (
          <div className="resume-sheet__item" key={job.title + job.org}>
            <div className="resume-sheet__item-head">
              <span className="resume-sheet__item-title">{job.title}</span>
              <span className="resume-sheet__item-date">{job.date}</span>
            </div>
            <p className="resume-sheet__item-org">{job.org}</p>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Selected projects</h2>
        {projects.map((p) => (
          <div className="resume-sheet__item" key={p.title}>
            <div className="resume-sheet__item-head">
              <span className="resume-sheet__item-title">{p.title}</span>
              <span className="resume-sheet__item-date">{p.date}</span>
            </div>
            <ul>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Education</h2>
        {education.map((e) => (
          <div className="resume-sheet__item" key={e.title + e.org}>
            <div className="resume-sheet__item-head">
              <span className="resume-sheet__item-title">{e.title}</span>
              <span className="resume-sheet__item-date">{e.date}</span>
            </div>
            <p className="resume-sheet__item-org">{e.org}</p>
            {e.note && <p className="resume-sheet__item-org">{e.note}</p>}
          </div>
        ))}

        <h2>Skills</h2>
        {Object.entries(skills).map(([label, value]) => (
          <div className="resume-sheet__item" key={label}>
            <p className="resume-sheet__item-title">{label}</p>
            <p className="resume-sheet__item-org">{value}</p>
          </div>
        ))}

        <h2>Honours and awards</h2>
        <ul>
          {honours.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <h2>Leadership and involvement</h2>
        <ul className="resume-sheet__involvement">
          {involvement.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        <h2>Languages</h2>
        <p>Khmer (native), English (B2, IELTS 6.0)</p>
      </div>
    </div>
  );
}
