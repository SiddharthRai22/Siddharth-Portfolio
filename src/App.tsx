import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import CaseStudyPage from '@/pages/CaseStudyPage';
import { JsonLd } from '@/components/JsonLd';

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element =
          document.getElementById(id) ||
          (id === 'projects' ? document.getElementById('work') : id === 'work' ? document.getElementById('projects') : null);

        if (element) {
          if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const nav = document.querySelector('header');
            const navHeight = nav ? nav.offsetHeight : 70;
            const targetPosition = Math.max(
              0,
              element.getBoundingClientRect().top + window.scrollY - navHeight + 2
            );
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth',
            });
          }
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <JsonLd />
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:id" element={<CaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
