import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = ['About', 'Projects', 'Skills', 'Contact'];

export const Navigation = ({ isReady = true }: { isReady?: boolean } = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { pathname } = useLocation();
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  // Robust, smooth ScrollSpy for active section detection
  useEffect(() => {
    if (pathname !== '/') return;

    let ticking = false;

    const checkActiveSection = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      // Don't override while a link click scroll is in flight
      if (isClickScrollingRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Bottom of page -> Always activate Contact
      if (scrollY + windowHeight >= documentHeight - 90) {
        setActiveSection('contact');
        return;
      }

      // 2. Near top -> Hero (no nav items active)
      if (scrollY < 180) {
        setActiveSection('hero');
        return;
      }

      // 3. Scan sections in descending order with an optical focal line (140px below top)
      const focalPoint = scrollY + 140;
      const sectionIds = ['contact', 'skills', 'projects', 'about'];

      for (const id of sectionIds) {
        const el =
          document.getElementById(id) ||
          (id === 'projects' ? document.getElementById('work') : null);
        if (el) {
          const top = el.offsetTop;
          if (focalPoint >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      setActiveSection('hero');
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check after paint
    const timer = setTimeout(checkActiveSection, 150);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(timer);
    };
  }, [pathname, isReady]);

  // Lock body scroll when mobile menu is open
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
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';

    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');

      // Set lock so scroll spy doesn't flicker while animating
      isClickScrollingRef.current = true;
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = setTimeout(() => {
        isClickScrollingRef.current = false;
      }, 900);

      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('hero');
        window.history.pushState(null, '', '/');
        return;
      }

      const targetElement =
        document.getElementById(id) ||
        (id === 'projects' ? document.getElementById('work') : id === 'work' ? document.getElementById('projects') : null);

      if (targetElement) {
        const nav = document.querySelector('header');
        const navHeight = nav ? nav.offsetHeight : 70;
        const targetPosition = Math.max(
          0,
          targetElement.getBoundingClientRect().top + window.scrollY - navHeight + 2
        );

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        setActiveSection(id);
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isReady ? 0 : -100 }}
        transition={isReady ? { duration: 0.6, ease: [0.25, 1, 0.5, 1] } : { duration: 0 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "border-b border-[rgba(62,26,10,0.08)] bg-[#f7ede0]/92 py-3 shadow-[0_4px_20px_-4px_rgba(62,26,10,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="section-shell flex items-center justify-between">
          <Link 
            to="/" 
            onClick={(e) => handleLinkClick(e as any, '/#hero')}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-[#3e1a0a] cursor-pointer"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#b45309] font-mono text-[0.65rem] text-[#faf4ee] transition-colors group-hover:bg-[#3e1a0a]">SK</span>
            <span className="hidden sm:block">Siddharth Kumar Rai</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => {
              const targetId = item.toLowerCase();
              const isActive = activeSection === targetId;
              return (
                <Link 
                  key={item} 
                  to={`/#${targetId}`} 
                  onClick={(e) => handleLinkClick(e as any, `/#${targetId}`)}
                  className={cn(
                    "relative rounded-full border px-3.5 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer",
                    isActive
                      ? "border-[#b45309] bg-[#b45309] text-[#faf4ee] shadow-sm"
                      : "border-transparent text-[#8d6b4f] hover:text-[#3e1a0a] hover:bg-[#3e1a0a]/5",
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
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#8d6b4f] transition-colors hover:bg-[#b45309]/10 hover:text-[#3e1a0a] cursor-pointer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/iam-siddharth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#8d6b4f] transition-colors hover:bg-[#b45309]/10 hover:text-[#3e1a0a] cursor-pointer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <button 
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#3e1a0a] transition-colors hover:border-[#b45309] hover:text-[#b45309] active:scale-95 lg:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="fixed inset-0 z-40 overflow-y-auto bg-[#f7ede0] px-4 pb-8 pt-24 lg:hidden"
          >
            <nav className="relative flex min-h-[calc(100vh-6rem)] flex-col" aria-label="Mobile navigation">
              <p className="system-label mb-6">Navigation</p>
              {NAV_ITEMS.map((item, index) => {
                const targetId = item.toLowerCase();
                const isActive = activeSection === targetId;
                return (
                  <Link 
                    key={item} 
                    to={`/#${targetId}`} 
                    onClick={(e) => handleLinkClick(e as any, `/#${targetId}`)}
                    className={cn(
                      "group flex items-center justify-between border-t border-[rgba(62,26,10,0.08)] py-4 text-[clamp(1.8rem,9vw,3.2rem)] font-semibold leading-none transition-colors cursor-pointer",
                      isActive ? "text-[#b45309]" : "text-[#3e1a0a] hover:text-[#b45309]"
                    )}
                  >
                    <span>{item}</span>
                    <span className={cn(
                      "font-mono text-xs font-bold transition-colors",
                      isActive ? "text-[#b45309]" : "text-[#8d6b4f] group-hover:text-[#b45309]"
                    )}>
                      0{index + 1}
                    </span>
                  </Link>
                );
              })}

              <div className="mt-auto flex items-center justify-between border-t border-[rgba(62,26,10,0.08)] pt-6">
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
