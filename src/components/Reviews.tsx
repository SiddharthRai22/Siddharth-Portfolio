'use client';

import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { ParallaxSection } from './ParallaxSection';
import { useSectionTheme, SectionTheme } from './SectionContext';
import { cn } from '@/lib/utils';

const EDUCATION_DATA = [
  {
    id: '1',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Technocrats Institute of Technology, Bhopal',
    period: '2022 – 2026',
    status: 'In Progress',
    description:
      'Rigorous academic coursework focused on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Artificial Intelligence.',
  },
  {
    id: '2',
    degree: 'Senior Secondary Education — 12th (PCM), CBSE',
    institution: 'Gurukul Vidyapeeth, Hajipur',
    period: 'Completed',
    status: 'Completed',
    description:
      'Core foundation in Physics, Chemistry, and Mathematics (PCM), developing analytical thinking, mathematical problem-solving, and computational logic.',
  },
];

export const Reviews = ({ theme: explicitTheme }: { theme?: SectionTheme } = {}) => {
  const theme = useSectionTheme(explicitTheme);
  const isOrange = theme === 'orange';

  return (
    <section
      id="education"
      className={cn(
        'scroll-mt-20 py-24 md:py-36 transition-colors duration-500',
        isOrange
          ? 'bg-[#b45309] text-[#faf4ee]'
          : 'border-y border-[rgba(62,26,10,0.08)] bg-[#f7ede0] text-[#3e1a0a]',
      )}
    >
      <ParallaxSection className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p
              className={cn(
                'system-label mb-5',
                isOrange
                  ? 'system-label--on-orange !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]'
                  : '!text-[#8d6b4f] [&::before]:!bg-[#b45309] [&::before]:!shadow-[0_0_0.7rem_rgba(180,83,9,0.38)]',
              )}
            >
              Academic Journey
            </p>
            <h2
              className={cn(
                'text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em]',
                isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
              )}
            >
              Education &amp; Background.
            </h2>
          </div>
          <p
            className={cn(
              'max-w-lg text-base leading-relaxed lg:justify-self-end md:text-lg',
              isOrange ? 'text-[#faf4ee]/80' : 'text-[#6d4a32]',
            )}
          >
            Engineering foundation grounded in core computer science, modern web architectures, and advanced AI methodologies.
          </p>
        </div>

        <div
          className={cn(
            'rounded-[24px] border p-6 md:p-8 lg:p-10',
            isOrange
              ? 'border-[#faf4ee]/20 bg-[#faf4ee]/5'
              : 'border-[rgba(62,26,10,0.08)] bg-[#faf4ee]',
          )}
        >
          {EDUCATION_DATA.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn(
                'grid gap-6 border-b py-10 last:border-b-0 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-12',
                isOrange ? 'border-[#faf4ee]/15' : 'border-[rgba(62,26,10,0.08)]',
              )}
            >
              <div className="flex flex-col justify-start">
                <div
                  className={cn(
                    'flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em]',
                    isOrange ? 'text-[#faf4ee]' : 'text-[#b45309]',
                  )}
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Phase / 0{i + 1}</span>
                </div>
                <div
                  className={cn(
                    'mt-3 flex items-center gap-2 font-mono text-xs',
                    isOrange ? 'text-[#faf4ee]/70' : 'text-[#8d6b4f]',
                  )}
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.period}</span>
                </div>
                <span
                  className={cn(
                    'mt-3 inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em]',
                    isOrange
                      ? 'border-[#faf4ee]/20 bg-[#faf4ee]/10 text-[#faf4ee]'
                      : 'border-[rgba(62,26,10,0.12)] bg-[#f7ede0] text-[#6d4a32]',
                  )}
                >
                  {item.status}
                </span>
              </div>

              <div>
                <h3
                  className={cn(
                    'text-balance text-2xl font-semibold leading-snug md:text-3xl',
                    isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
                  )}
                >
                  {item.degree}
                </h3>
                <p
                  className={cn(
                    'mt-2 font-serif text-lg font-medium italic',
                    isOrange ? 'text-[#faf4ee]/90' : 'text-[#b45309]',
                  )}
                >
                  {item.institution}
                </p>
                <p
                  className={cn(
                    'mt-5 max-w-2xl text-base leading-relaxed md:text-lg',
                    isOrange ? 'text-[#faf4ee]/80' : 'text-[#6d4a32]',
                  )}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

