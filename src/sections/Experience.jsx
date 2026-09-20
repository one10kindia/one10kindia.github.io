import medal from '../assets/images/medal.jpg';
import tshirtFront from '../assets/images/tshirt-front.jpg';
import tshirtBack from '../assets/images/tshirt-back.jpg';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-head">
          <p className="eyebrow">The Finish Line</p>
          <h2 className="experience-title">
            Earn a medal that <span className="gradient-text">means something</span>
          </h2>
          <p className="experience-sub">
            Every finisher walks away with race kit built around the same idea
            as the run itself — one distance, one direction, one run.
          </p>
        </div>

        <div className="experience-grid">
          <figure className="experience-card wide">
            <img src={medal} alt="ONE10K Bengaluru finisher medal" />
            <figcaption>Finisher Medal</figcaption>
          </figure>
          <figure className="experience-card">
            <img src={tshirtFront} alt="ONE10K Bengaluru race t-shirt, front" />
            <figcaption>Race Tee — Front</figcaption>
          </figure>
          <figure className="experience-card">
            <img src={tshirtBack} alt="ONE10K Bengaluru race t-shirt, back" />
            <figcaption>Race Tee — Back</figcaption>
          </figure>
        </div>

        <div className="experience-notes">
          <div className="experience-note">
            <span className="experience-note-tag">Timed Run</span>
            <p>Chip-timed 10K with official finish-line results.</p>
          </div>
          <div className="experience-note">
            <span className="experience-note-tag">Distance</span>
            <p>Exactly 10 kilometres, measured end to end.</p>
          </div>
          <div className="experience-note">
            <span className="experience-note-tag">Format</span>
            <p>One straight course, one direction, no repeat sections.</p>
          </div>
          <div className="experience-note">
            <span className="experience-note-tag">Location</span>
            <p>NICE Road, Nayandahalli, Bengaluru.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
