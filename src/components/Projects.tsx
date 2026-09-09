'use client';

import { startTransition, useEffect, useRef, useState } from 'react';
import { Image } from '@/components/Image';
import { AnimatePresence, motion } from 'motion/react';
import { PROJECTS } from '@/lib/constants';
import { ProjectCategory } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ProjectCard } from './ProjectCard';
import { ParallaxSection } from './ParallaxSection';

const FILTERS: Array<'All' | ProjectCategory> = ['All', 'Web', 'Mobile', 'AI'];

export const Projects = () => {
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
    const entries = listRef.current?.querySelectorAll<HTMLElement>('[data-project-index]');
    if (!entries?.length) return;
    const observer = new IntersectionObserver(
      (observed) => {
        const closest = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (closest) setActiveIndex(Number((closest.target as HTMLElement).dataset.projectIndex));
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: [0.05, 0.35, 0.7] },
    );
    entries.forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, [filter]);

  const selectFilter = (nextFilter: 'All' | ProjectCategory) => {
    startTransition(() => {
      setFilter(nextFilter);
      setActiveIndex(0);
    });
  };

  return (
    <section id="work" className="relative scroll-mt-20 border-t border-[#faf4ee]/20 bg-[#b45309]">
      <ParallaxSection className="section-shell py-20 md:py-28">
        <div className="grid gap-8 border-b border-[#faf4ee]/20 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="system-label system-label--on-orange mb-5 !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]">Selected Works</p>
            <h2 className="text-balance text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-[#faf4ee]">Work in motion.</h2>
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
                  filter === category
                    ? 'border-[#faf4ee] bg-[#faf4ee] text-[#b45309]'
                    : 'border-[#faf4ee]/30 text-[#faf4ee]/85 hover:border-[#faf4ee] hover:text-[#faf4ee]',
                )}
              >
                {category}
              </button>
            ))}
          </fieldset>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:gap-20">
          <div className="sticky top-28 hidden h-[calc(100vh-9rem)] items-center lg:flex">
            <div className="group relative w-full max-h-full overflow-hidden rounded-[24px] border border-[#faf4ee]/20 bg-[#faf4ee]/10" style={{ aspectRatio: '16 / 9' }}>
              <AnimatePresence mode="wait">
                {activeProject?.images?.[0] ? (
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image src={activeProject.images[0]} alt={`${activeProject.title} interface`} fill sizes="55vw" className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.045]" priority={activeIndex === 0} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3e1a0a]/18 via-transparent to-transparent" />
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-5 font-mono text-[0.6rem] uppercase tracking-[0.12em]">
                <span className="text-[#faf4ee]">Collection / {String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-[#faf4ee]/80">Archive</span>
              </div>
            </div>
          </div>

          <div ref={listRef}>
            {filtered.map((project, index) => (
              <div key={project.id} data-project-index={index} className="border-b border-[#faf4ee]/15 last:border-b-0">
                <ProjectCard project={project} index={index} active={index === activeIndex} variant="orange" />
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};
