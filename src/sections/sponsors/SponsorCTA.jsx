import './SponsorCTA.css';

export default function SponsorCTA() {
  return (
    <section className="spcta">
      <div className="container spcta-inner">
        <p className="eyebrow">One Way Forward</p>
        <h2 className="spcta-title">
          Let&rsquo;s build the 10K <span className="gradient-text">Bengaluru will talk about.</span>
        </h2>
        <p className="spcta-sub">
          Seeking strategic brand partners for the 2027 edition of ONE10K
          Bengaluru. Reach out and let&rsquo;s talk about the right fit for your
          brand.
        </p>
        <div className="spcta-actions">
          <a href="mailto:one10kindia@gmail.com" className="btn btn-primary">
            one10kindia@gmail.com
          </a>
          <a
            href={`${import.meta.env.BASE_URL}assets/ONE10K_Bengaluru_Sponsor_Deck.pptx`}
            className="btn btn-outline"
          >
            Download Full Deck
          </a>
        </div>
      </div>
    </section>
  );
}
