import { useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown.jsx';
import './UpdatesCTA.css';

export default function UpdatesCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your registration / mailing-list provider
    // (Google Forms, Mailchimp, etc.) before going live.
    setSubmitted(true);
  };

  return (
    <section className="updates" id="updates">
      <div className="container updates-inner">
        <div className="updates-main">
          <p className="eyebrow">Registrations Opening Soon</p>
          <h2 className="updates-title">
            Be first to know when <span className="gradient-text">ONE10K</span> opens
          </h2>
          <p className="updates-sub">
            Leave your email and we&rsquo;ll send you registration dates, route
            reveals and training drops before anyone else.
          </p>

          {submitted ? (
            <p className="updates-success">
              You&rsquo;re on the list. See you on NICE Road, 7 March 2027.
            </p>
          ) : (
            <form className="updates-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary">
                Notify Me
              </button>
            </form>
          )}

          <div className="updates-sponsor-link">
            Bringing a brand? <Link to="/sponsors">Explore sponsorship →</Link>
          </div>
        </div>

        <div className="updates-countdown-card">
          <span className="updates-countdown-label">Race day is in</span>
          <Countdown />
          <div className="updates-details">
            <span>7 March 2027</span>
            <span>NICE Road, Nayandahalli, Bengaluru</span>
          </div>
        </div>
      </div>
    </section>
  );
}
