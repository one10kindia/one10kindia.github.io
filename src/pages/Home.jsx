import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../sections/Hero.jsx';
import EventOverview from '../sections/EventOverview.jsx';
import WhyOneCategory from '../sections/WhyOneCategory.jsx';
import RouteSection from '../sections/RouteSection.jsx';
import Experience from '../sections/Experience.jsx';
import Journey from '../sections/Journey.jsx';
import Organisers from '../sections/Organisers.jsx';
import UpdatesCTA from '../sections/UpdatesCTA.jsx';
import { scrollToId } from '../components/SectionLink.jsx';

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // When arriving here from another route via a section link (e.g. the
  // Sponsors page footer), scroll to the requested section once mounted.
  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)));
    navigate(location.pathname, { replace: true, state: {} });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Hero />
      <EventOverview />
      <WhyOneCategory />
      <RouteSection />
      <Experience />
      <Journey />
      <Organisers />
      <UpdatesCTA />
    </main>
  );
}
