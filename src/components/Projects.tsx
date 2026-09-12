'use client';

import { startTransition, useEffect, useRef, useState } from 'react';
import { Image } from '@/components/Image';
import { AnimatePresence, motion } from 'motion/react';
import { PROJECTS } from '@/lib/constants';
import { ProjectCategory } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';
import { ParallaxSection } from './ParallaxSection';
import { useSectionTheme, SectionTheme } from './SectionContext';

const FILTERS: Array<'All' | ProjectCategory> = ['All', 'Web', 'AI'];

export const Projects = ({ theme: explicitTheme }: { theme?: SectionTheme } = {}) => {
  const theme = useSectionTheme(explicitTheme);
  const isOrange = theme === 'orange';

  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => Array.isArray(project.category)
      ? project.category.includes(filter)
      : project.category === filter);
  const activeProject = filtered[Math.min(activeIndex, filtered.length - 1)];

  useEffect(() => {
    // Preload project preview images for instantaneous response
    PROJECTS.forEach((project) => {
      if (project.images?.[0]) {
        const src = typeof project.images[0] === 'string' ? project.images[0] : (project.images[0] as { src: string })?.src;
        if (src) {
          const img = new window.Image();
          img.src = src;
        }
      }
    });
  }, []);

  useEffect(() => {
    const updateActiveIndex = () => {
      const cards = listRef.current?.querySelectorAll<HTMLElement>('[data-project-index]');
      if (!cards || cards.length === 0) return;

      // Eye focus line: ~42% from top of viewport
      const targetY = window.innerHeight * 0.42;

      let bestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // If targetY is inside the card's bounds, this card is directly in focus
        if (rect.top <= targetY && rect.bottom >= targetY) {
          bestIndex = Number(card.dataset.projectIndex);
          minDistance = -1;
          return;
        }

        if (minDistance !== -1) {
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - targetY);
          if (distance < minDistance) {
            minDistance = distance;
            bestIndex = Number(card.dataset.projectIndex);
          }
        }
      });

      setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
    };

    updateActiveIndex();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [filter, filtered.length]);

  const selectFilter = (nextFilter: 'All' | ProjectCategory) => {
    startTransition(() => {
      setFilter(nextFilter);
      setActiveIndex(0);
    });
  };

  return (
    <section
      id="projects"
      className={cn(
        'relative scroll-mt-20 transition-colors duration-500',
        isOrange
          ? 'border-t border-[#faf4ee]/20 bg-[#b45309] text-[#faf4ee]'
          : 'border-t border-[rgba(62,26,10,0.08)] bg-[#f7ede0] text-[#3e1a0a]',
      )}
    >
      <span id="work" className="sr-only pointer-events-none" />
      <ParallaxSection className="section-shell py-20 md:py-28">
        <div
          className={cn(
            'grid gap-8 border-b pb-10 lg:grid-cols-[1fr_auto] lg:items-end',
            isOrange ? 'border-[#faf4ee]/20' : 'border-[rgba(62,26,10,0.1)]',
          )}
        >
          <div>
            <h2
              className={cn(
                'text-balance text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em]',
                isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
              )}
            >
              My Projects
            </h2>
          </div>
          <fieldset className="flex flex-wrap gap-2">
            <legend className="sr-only">Filter projects</legend>
            {FILTERS.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => selectFilter(category)}
                aria-pressed={filter === category}
                className={cn(
                  'min-h-10 rounded-full border px-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors',
                  isOrange
                    ? filter === category
                      ? 'border-[#faf4ee] bg-[#faf4ee] text-[#b45309]'
                      : 'border-[#faf4ee]/40 text-[#faf4ee] hover:border-[#faf4ee] hover:bg-[#faf4ee]/15'
                    : filter === category
                      ? 'border-[#b45309] bg-[#b45309] text-[#faf4ee]'
                      : 'border-[rgba(62,26,10,0.25)] text-[#502e1a] font-medium hover:border-[#b45309] hover:text-[#b45309]',
                )}
              >
                {category}
              </button>
            ))}
          </fieldset>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:gap-20">
          <div className="sticky top-28 hidden h-[calc(100vh-9rem)] items-center lg:flex">
            <div
              className={cn(
                'group relative w-full max-h-full overflow-hidden rounded-[24px] border',
                isOrange
                  ? 'border-[#faf4ee]/20 bg-[#faf4ee]/10'
                  : 'border-[rgba(62,26,10,0.08)] bg-[#faf4ee] shadow-[0_16px_48px_rgba(62,26,10,0.08)]',
              )}
              style={{ aspectRatio: '16 / 9' }}
            >
              <AnimatePresence>
                {activeProject?.images?.[0] ? (
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProject.images[0]}
                      alt={`${activeProject.title} interface`}
                      fill
                      sizes="55vw"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                      priority={true}
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>

          <div ref={listRef}>
            {filtered.map((project, index) => (
              <div
                key={project.id}
                data-project-index={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  'border-b last:border-b-0',
                  isOrange ? 'border-[#faf4ee]/15' : 'border-[rgba(62,26,10,0.08)]',
                )}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  active={index === activeIndex}
                  variant={isOrange ? 'orange' : 'default'}
                />
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

