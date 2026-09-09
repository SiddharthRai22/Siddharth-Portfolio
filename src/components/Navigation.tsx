import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = ['About', 'Projects', 'Education', 'Skills', 'Contact'];

export const Navigation = ({ isReady = true }: { isReady?: boolean } = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;
    const sections = ['hero', ...NAV_ITEMS.map((item) => item.toLowerCase())]
      .map((id) => document.getElementById(id) || (id === 'projects' ? document.getElementById('work') : null))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const sectionId = visible.target.id === 'work' ? 'projects' : visible.target.id;
          setActiveSection(sectionId);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id) || (id === 'projects' ? document.getElementById('work') : id === 'work' ? document.getElementById('projects') : null);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isReady ? 0 : -100 }}
        transition={isReady ? { duration: 0.75, ease: [0.25, 1, 0.5, 1] } : { duration: 0 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "border-[rgba(62,26,10,0.08)] bg-[#f7ede0]/92 py-3 backdrop-blur-xl"
            : "border-transparent bg-transparent py-5"
        )}
      >
        <div className="section-shell flex items-center justify-between">
          <Link 
            to="/" 
            onClick={(e) => handleLinkClick(e as any, '/#hero')}
            className="group flex items-center gap-3 text-sm font-bold uppercase text-[#3e1a0a]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#b45309] font-mono text-[0.65rem] text-[#faf4ee] transition-colors group-hover:bg-[#3e1a0a]">SK</span>
            <span className="hidden sm:block">Siddharth Kumar Rai</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const targetId = item.toLowerCase();
              return (
                <Link 
                  key={item} 
                  to={`/#${targetId}`} 
                  onClick={(e) => handleLinkClick(e as any, `/#${targetId}`)}
                  className={cn(
                    "rounded-full border px-3 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-colors",
                    activeSection === targetId
                      ? "border-[#b45309] bg-[#b45309] text-[#faf4ee]"
                      : "border-transparent text-[#8d6b4f] hover:text-[#3e1a0a]",
                  )}
                >
                  {item}
                </Link>
              );
            })}

            <div className="mx-2 h-4 w-px bg-[rgba(62,26,10,0.2)]" aria-hidden="true" />

            <div className="flex items-center gap-1">
              <a 
                href="https://github.com/SiddharthRai22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#8d6b4f] transition-colors hover:bg-[#b45309]/10 hover:text-[#3e1a0a]"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/iam-siddharth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#8d6b4f] transition-colors hover:bg-[#b45309]/10 hover:text-[#3e1a0a]"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <button 
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#3e1a0a] lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-[#f7ede0] px-4 pb-8 pt-24 lg:hidden"
          >
            <nav className="relative flex h-full flex-col" aria-label="Mobile navigation">
              <p className="system-label mb-8">Navigation</p>
              {NAV_ITEMS.map((item, index) => {
                const targetId = item.toLowerCase();
                return (
                  <Link 
                    key={item} 
                    to={`/#${targetId}`} 
                    onClick={(e) => handleLinkClick(e as any, `/#${targetId}`)}
                    className="group flex items-center justify-between border-t border-[rgba(62,26,10,0.08)] py-4 text-[clamp(1.8rem,10vw,3.6rem)] font-semibold leading-none text-[#3e1a0a]"
                  >
                    {item}
                    <span className="font-mono text-xs font-bold text-[#8d6b4f] transition-colors group-hover:text-[#b45309]">0{index + 1}</span>
                  </Link>
                );
              })}

              <div className="mt-auto flex items-center justify-between border-t border-[rgba(62,26,10,0.08)] pt-5">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/SiddharthRai22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#3e1a0a] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
                    aria-label="GitHub profile"
                    title="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/iam-siddharth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#3e1a0a] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <a 
                  href="mailto:siddharthkumarrai23@gmail.com" 
                  className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#b45309] hover:underline"
                >
                  Contact Email &rarr;
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
