import './Opportunity.css';

const STATS = [
  { value: '10,000', label: 'Expected Runners' },
  { value: '10K', label: 'Single Race Identity' },
  { value: '1', label: 'Direction' },
  { value: '1', label: 'Shared Experience' },
];

const TOUCHPOINTS = [
  { n: '01', title: 'Discover', copy: 'Digital + community' },
  { n: '02', title: 'Commit', copy: 'Registration' },
  { n: '03', title: 'Prepare', copy: 'Training + content' },
  { n: '04', title: 'Run', copy: 'Course + brand touchpoints' },
  { n: '05', title: 'Celebrate', copy: 'Finish + medal' },
  { n: '06', title: 'Remember', copy: 'Social + content' },
];

export default function Opportunity() {
  return (
    <section className="opp">
      <div className="container">
        <div className="opp-head">
          <p className="eyebrow">The Opportunity</p>
          <h2 className="opp-title">
            One concentrated audience. <span className="gradient-text">Multiple touchpoints.</span>
          </h2>
          <p className="opp-sub">
            The sponsor story can begin before race day and continue through
            the finish line and post-race content — a single-category format
            gives sponsors a clearer, more consistent presence across the
            entire runner lifecycle.
          </p>
        </div>

        <div className="opp-stats">
          {STATS.map((s) => (
            <div className="opp-stat" key={s.label}>
              <span className="opp-stat-value">{s.value}</span>
              <span className="opp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="opp-funnel">
          {TOUCHPOINTS.map((t, i) => (
            <div className="opp-step" key={t.n}>
              <div className="opp-step-head">
                <span>{t.n}</span>
                {i < TOUCHPOINTS.length - 1 && <i className="opp-arrow" aria-hidden="true">&rarr;</i>}
              </div>
              <h3>{t.title}</h3>
              <p>{t.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
