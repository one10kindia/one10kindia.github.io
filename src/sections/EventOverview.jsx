import './EventOverview.css';

const STATS = [
  { value: '10,000', label: 'Expected Runners' },
  { value: '10 KM', label: 'Only Race Category' },
  { value: '07 MAR', label: '2027 · Race Day' },
  { value: 'End → End', label: 'NICE Road Course' },
];

const NOT_ON_OFFER = ['No 5K', 'No 3K', 'No Fun Run'];

export default function EventOverview() {
  return (
    <section className="event" id="event">
      <div className="container">
        <div className="event-head">
          <p className="eyebrow">The Big Idea</p>
          <h2 className="event-title">
            A pure <span className="gradient-text">10K</span> experience
          </h2>
          <p className="event-sub">
            No parallel 5K or 3K races splitting the field, no fun-run crowd to
            weave through. Just one distance, one direction, one focused
            runner journey from gun to medal.
          </p>
        </div>

        <div className="event-stats">
          {STATS.map((s) => (
            <div className="event-stat" key={s.label}>
              <span className="event-stat-value">{s.value}</span>
              <span className="event-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="event-split">
          <div className="event-not">
            <span className="event-not-label">Deliberately, none of this</span>
            <div className="event-not-tags">
              {NOT_ON_OFFER.map((t) => (
                <span className="tag-strike" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p className="event-not-copy">
              One event. One proposition. A cleaner field, a calmer start line,
              and a more premium race-day experience — built entirely around
              the 10K runner.
            </p>
          </div>

          <div className="event-theme">
            <p className="event-theme-line">ONE STRAIGHT LINE.</p>
            <p className="event-theme-line accent">FINITE DISTANCE. INFINITE YOU.</p>
            <p className="event-theme-copy">
              10 kilometres of one straight course that tests your mind, body
              and spirit. No turns. No distractions. Just you, one line, 10K.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
