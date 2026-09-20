import './WhyOneCategory.css';

const REASONS = [
  {
    n: '01',
    title: 'Focus',
    copy:
      'No parallel 3K or 5K races competing for road space or attention. Every mile of this event is built around one runner journey — yours.',
  },
  {
    n: '02',
    title: 'Flow',
    copy:
      'One distance, one direction. Simpler wayfinding, cleaner pacing, and a start corral that isn’t fighting three different race clocks.',
  },
  {
    n: '03',
    title: 'Experience',
    copy:
      'A cleaner field and a purpose-built 10K environment — from bib to medal — make for a genuinely premium race-day feel.',
  },
  {
    n: '04',
    title: 'Community',
    copy:
      'One crowd, one course, one finish line. Every runner is part of the same story, cheered by the same city, at the same time.',
  },
];

export default function WhyOneCategory() {
  return (
    <section className="why">
      <div className="container">
        <div className="why-head">
          <p className="eyebrow">The Difference</p>
          <h2 className="why-title">Why a single-category 10K?</h2>
          <p className="why-sub">Because scale doesn&rsquo;t have to mean compromise.</p>
        </div>

        <div className="why-grid">
          {REASONS.map((r) => (
            <div className="why-card" key={r.n}>
              <span className="why-num">{r.n}</span>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-copy">{r.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
