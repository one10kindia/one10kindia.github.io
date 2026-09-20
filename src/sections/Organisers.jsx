import './Organisers.css';

export default function Organisers() {
  return (
    <section className="organisers" id="organisers">
      <div className="container organisers-inner">
        <div className="organisers-copy">
          <p className="eyebrow">Built By Runners</p>
          <h2 className="organisers-title">
            Organised by people who actually run
          </h2>
          <p className="organisers-sub">
            ONE10K Bengaluru is put together by a team of experienced runners
            and race organisers — not an events company adding a race to its
            calendar. We know what runners notice, and what makes them come
            back.
          </p>
          <blockquote>
            &ldquo;We know what runners notice — and what makes them come
            back.&rdquo;
          </blockquote>
        </div>

        <div className="organisers-stats">
          <div className="organisers-stat">
            <span className="organisers-stat-value">10+</span>
            <span className="organisers-stat-label">
              Years of running experience across India
            </span>
          </div>
          <div className="organisers-stat">
            <span className="organisers-stat-value">5+</span>
            <span className="organisers-stat-label">
              Years organising &amp; executing Bengaluru Runners Jatre
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
