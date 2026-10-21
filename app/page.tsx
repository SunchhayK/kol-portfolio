import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import WorkGrid from '@/components/WorkGrid';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section" id="work">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="h2">Things I made.</h2>
              <p className="lede">
                Product work, campaign work, and the event stuff in between. Every one has its own
                page with the process behind it.
              </p>
            </div>
          </div>
          <WorkGrid />
        </div>
      </section>

      <section className="section" id="timeline">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2 className="h2">Where the time went.</h2>
              <p className="lede">
                Degrees, internships, projects, and a lot of organising. A short version of a CV
                that is two pages long.
              </p>
            </div>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="section__head">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="h2">The short version.</h2>
            </div>
          </div>
          <About />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <Contact />
        </div>
      </section>
    </>
  );
}
