import Countdown from '../components/Countdown.jsx';
import SectionLink from '../components/SectionLink.jsx';
import heroLockup from '../assets/images/hero-lockup.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">7 March 2027 · Bengaluru</p>
          <h1 className="hero-title">
            ONE DISTANCE.
            <br />
            ONE DIRECTION.
            <br />
            <span className="gradient-text">ONE RUN.</span>
          </h1>
          <p className="hero-sub">
            A pure 10K experience. No parallel categories, no route compromises —
            one straight, point-to-point course through Bengaluru, built for the
            10K runner chasing a personal best.
          </p>

          <div className="hero-actions">
            <SectionLink id="updates" className="btn btn-primary">
              Get Race Updates
            </SectionLink>
            <SectionLink id="route" className="btn btn-outline">
              See the Route
            </SectionLink>
          </div>

          <div className="hero-countdown">
            <span className="hero-countdown-label">Race day countdown</span>
            <Countdown />
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img src={heroLockup} alt="ONE10K Bengaluru — one distance, one direction, one run" />
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">10,000</span>
              <span className="hero-stat-label">Runners</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">10KM</span>
              <span className="hero-stat-label">Only Category</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">1</span>
              <span className="hero-stat-label">Straight Course</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="marquee-group">
                <span>ONE DISTANCE</span>
                <span className="dot">•</span>
                <span>ONE DIRECTION</span>
                <span className="dot">•</span>
                <span>ONE RUN</span>
                <span className="dot">•</span>
                <span>10,000 RUNNERS</span>
                <span className="dot">•</span>
                <span>NICE ROAD, NAYANDAHALLI</span>
                <span className="dot">•</span>
                <span>7 MARCH 2027</span>
                <span className="dot">•</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
