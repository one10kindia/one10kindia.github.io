import './WhySponsor.css';

const POINTS = [
  'Focused 10K-only proposition',
  'High-frequency runner touchpoints',
  'Community-led credibility',
  'Before / during / after race activation',
  'Premium, uncluttered environment',
];

export default function WhySponsor() {
  return (
    <section className="whysp">
      <div className="container whysp-inner">
        <div className="whysp-copy">
          <p className="eyebrow">Why ONE10K</p>
          <h2 className="whysp-title">
            A focused platform for brands that want attention, not clutter.
          </h2>
          <ul className="whysp-list">
            {POINTS.map((p) => (
              <li key={p}>
                <span className="whysp-check">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="whysp-quote">
          <p className="whysp-quote-line">ONE EVENT.</p>
          <p className="whysp-quote-line">ONE AUDIENCE.</p>
          <p className="whysp-quote-line accent">ONE BRAND STORY.</p>
          <p className="whysp-goal">
            The goal: make the brand part of the runner&rsquo;s story.
          </p>
        </div>
      </div>
    </section>
  );
}
