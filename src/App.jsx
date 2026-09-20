import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Sponsors from './pages/Sponsors.jsx';

function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    // Home.jsx handles scrolling itself when arriving with a pending
    // scrollTo target, so don't fight it by jumping to the top first.
    if (state?.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
      <Footer />
    </>
  );
}
