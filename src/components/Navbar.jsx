import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionLink from './SectionLink.jsx';
import './Navbar.css';

const LINKS = [
  { label: 'Event', id: 'event' },
  { label: 'Route', id: 'route' },
  { label: 'Experience', id: 'experience' },
  { label: 'Organisers', id: 'organisers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            ONE<span>10K</span>
            <small>Bengaluru</small>
          </Link>

          <div className="nav-links">
            {LINKS.map((link) => (
              <SectionLink key={link.label} id={link.id}>
                {link.label}
              </SectionLink>
            ))}
            <Link to="/sponsors" className={location.pathname === '/sponsors' ? 'active' : ''}>
              Sponsors
            </Link>
          </div>

          <div className="nav-actions">
            <SectionLink id="updates" className="btn btn-primary nav-cta">
              Get Updates
            </SectionLink>
            <button
              className={`nav-burger ${open ? 'open' : ''}`}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {LINKS.map((link) => (
          <SectionLink key={link.label} id={link.id} onClick={() => setOpen(false)}>
            {link.label}
          </SectionLink>
        ))}
        <Link to="/sponsors" onClick={() => setOpen(false)}>
          Sponsors
        </Link>
        <SectionLink id="updates" className="btn btn-primary" onClick={() => setOpen(false)}>
          Get Updates
        </SectionLink>
      </div>
    </>
  );
}
