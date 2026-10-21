import { awards, bio, skillGroups } from '@/data/timeline';
import { asset } from '@/lib/paths';

export default function About() {
  return (
    <div className="about-grid">
      <div className="portrait" data-reveal>
        <img
          src={asset('/images/portrait.webp')}
          alt="Roit Sovanmongkol"
          width={800}
          height={1000}
          loading="lazy"
        />
      </div>

      <div>
        <div className="bio" data-reveal>
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skill-group" data-reveal key={group.label}>
              <p className="skill-group__label">{group.label}</p>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="awards" data-reveal>
          <p className="skill-group__label">Awards &amp; scholarships</p>
          {awards.map((award) => (
            <div className="award" key={award.title}>
              <span className="award__year">{award.year}</span>
              <span>
                <p className="award__title">{award.title}</p>
                <p className="award__note">{award.note}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
