import logoGreen from '../../assets/images/logo-green.jpg';
import './SponsorHero.css';

export default function SponsorHero() {
  return (
    <section className="sp-hero">
      <div className="container sp-hero-inner">
        <div className="sp-hero-copy">
          <p className="eyebrow">Sponsor Partnerships · 2027 Edition</p>
          <h1 className="sp-hero-title">
            Own a meaningful part of the <span className="gradient-text">ONE10K</span> story
          </h1>
          <p className="sp-hero-sub">
            We prefer a small number of meaningful partnerships over a crowded
            sponsor wall. One event, one audience, one brand story — seeking
            strategic brand partners for ONE10K Bengaluru, 7 March 2027.
          </p>
          <div className="sp-hero-actions">
            <a href="mailto:one10kindia@gmail.com" className="btn btn-primary">
              Start a Conversation
            </a>
            <a
              href={`${import.meta.env.BASE_URL}assets/ONE10K_Bengaluru_Sponsor_Deck.pptx`}
              className="btn btn-outline"
            >
              Download Sponsor Deck
            </a>
          </div>
        </div>
        <div className="sp-hero-visual">
          <img src={logoGreen} alt="ONE10K Bengaluru brandmark" />
        </div>
      </div>
    </section>
  );
}
