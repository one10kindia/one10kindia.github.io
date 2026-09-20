import { useLocation, useNavigate } from 'react-router-dom';

// A same-page "scroll to section" link that also works from other routes
// (e.g. the Sponsors page). Plain <a href="#id"> hrefs can't be used here
// because HashRouter owns the URL hash for routing, so a raw hash change
// would be misread as a route change instead of an in-page scroll.
export const NAV_OFFSET = 90;

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function SectionLink({ id, children, className, onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    onClick?.();
    if (location.pathname === '/') {
      scrollToId(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <a href={`#${id}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
