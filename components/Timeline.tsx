import { timeline } from '@/data/timeline';

export default function Timeline() {
  return (
    <div className="timeline">
      {timeline.map((entry) => (
        <div
          className={`tl${entry.current ? ' tl--current' : ''}`}
          data-reveal
          key={`${entry.period}-${entry.title}`}
        >
          <p className="tl__period">{entry.period}</p>
          <h3 className="tl__title">{entry.title}</h3>
          <p className="tl__org">{entry.org}</p>
          <p className="tl__note">{entry.note}</p>
        </div>
      ))}
    </div>
  );
}
