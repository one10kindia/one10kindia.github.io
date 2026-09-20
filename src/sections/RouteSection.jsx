import logoIdea from '../assets/images/logo-idea.jpg';
import './RouteSection.css';

const FEATURES = [
  {
    title: 'One straight line',
    copy: 'No turns, no doubling back. A single, honest line from start to finish.',
  },
  {
    title: 'One direction',
    copy: 'No looking back, no congestion at U-turns. Keep moving, keep momentum.',
  },
  {
    title: 'Built for your PB',
    copy: 'A flat, uninterrupted course designed for even splits and personal bests.',
  },
  {
    title: 'Point-to-point',
    copy: 'Start at one end of NICE Road, finish at the other — convenient, linear, memorable.',
  },
];

export default function RouteSection() {
  return (
    <section className="route" id="route">
      <div className="container">
        <div className="route-head">
          <p className="eyebrow">The Course</p>
          <h2 className="route-title">
            A straight shot at your <span className="gradient-text">personal best</span>
          </h2>
          <p className="route-sub">
            ONE10K runs end-to-end on NICE Road, Nayandahalli — a single
            point-to-point course with no turns and no repeated stretches.
            Convenient for runners, and about as honest a 10K as you&rsquo;ll find
            in Bengaluru.
          </p>
        </div>

        <div className="route-map" aria-hidden="true">
          <div className="route-line">
            <span className="route-marker start">
              <span className="route-marker-dot" />
              <span className="route-marker-text">START</span>
            </span>
            <span className="route-progress" />
            <span className="route-marker finish">
              <span className="route-marker-dot" />
              <span className="route-marker-text">FINISH</span>
            </span>
          </div>
          <div className="route-map-labels">
            <span>NICE Road, Nayandahalli</span>
            <span>10.0 KM · Point to Point</span>
          </div>
        </div>

        <div className="route-body">
          <div className="route-features">
            {FEATURES.map((f) => (
              <div className="route-feature" key={f.title}>
                <span className="route-feature-mark" />
                <div>
                  <h3 className="route-feature-title">{f.title}</h3>
                  <p className="route-feature-copy">{f.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="route-idea-card">
            <img src={logoIdea} alt="The idea behind ONE10K — straight, runner, speed, one distance, one direction" />
          </div>
        </div>
      </div>
    </section>
  );
}
