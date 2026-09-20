import './Tiers.css';

const TIERS = [
  {
    name: 'Title Partner',
    highlight: true,
    copy: 'Naming integration, master brand presence, event dominance.',
  },
  {
    name: 'Powered By',
    copy: 'Start / finish visibility, digital presence, high-frequency race-day exposure.',
  },
  {
    name: 'Official Partner',
    copy: 'Category ownership with dedicated course and participant touchpoints.',
  },
  {
    name: 'Experience Partner',
    copy: 'Hydration, nutrition, recovery, mobility or technology activation.',
  },
  {
    name: 'Community Partner',
    copy: 'Training content, runner engagement and social activation.',
  },
  {
    name: 'Finisher Partner',
    copy: 'Medal, bib, certificate and finish-line experience.',
  },
];

const ASSETS = [
  'Event identity', 'Bib', 'T-shirt', 'Medal', 'Start / finish', 'Course',
  'Digital', 'Content', 'Activation', 'Sampling',
];

export default function Tiers() {
  return (
    <section className="tiers" id="tiers">
      <div className="container">
        <div className="tiers-head">
          <p className="eyebrow">Partnership Tiers</p>
          <h2 className="tiers-title">Ways to partner</h2>
        </div>

        <div className="tiers-grid">
          {TIERS.map((t) => (
            <div className={`tier-card ${t.highlight ? 'highlight' : ''}`} key={t.name}>
              <h3>{t.name}</h3>
              <p>{t.copy}</p>
            </div>
          ))}
        </div>

        <div className="tiers-assets">
          <span className="tiers-assets-label">Potential assets</span>
          <div className="tiers-assets-tags">
            {ASSETS.map((a) => (
              <span className="tag" key={a}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
