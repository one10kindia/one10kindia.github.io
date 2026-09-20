import { Link } from 'react-router-dom';
import SectionLink from './SectionLink.jsx';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              ONE<span>10K</span> BENGALURU
            </div>
            <p className="footer-tagline">One Distance. One Direction. One Run.</p>
            <p className="footer-desc">
              A single-category, point-to-point 10K built by runners, for runners. One
              straight course on NICE Road, Nayandahalli — designed to help you find
              your personal best.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><SectionLink id="event">The Event</SectionLink></li>
                <li><SectionLink id="route">The Route</SectionLink></li>
                <li><SectionLink id="experience">Experience</SectionLink></li>
                <li><SectionLink id="organisers">Organisers</SectionLink></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Race Info</h4>
              <ul>
                <li><p>7 March 2027</p></li>
                <li><p>NICE Road, Nayandahalli</p></li>
                <li><p>Bengaluru, India</p></li>
                <li><p>10,000 Runners · 10K Only</p></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:one10kindia@gmail.com">one10kindia@gmail.com</a></li>
                <li><p>Instagram — coming soon</p></li>
                <li><p>Strava Club — coming soon</p></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} ONE10K Bengaluru. Built by runners, for runners.</span>
          <span>One Straight Line. Finite Distance. Infinite You.</span>
        </div>
      </div>
    </footer>
  );
}
