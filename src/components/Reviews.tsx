'use client';

import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { ParallaxSection } from './ParallaxSection';

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

export const Reviews = () => {
  return (
    <section id="education" className="scroll-mt-20 border-y border-[rgba(62,26,10,0.08)] bg-[#f7ede0] py-24 md:py-36">
      <ParallaxSection className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label mb-5 !text-[#8d6b4f] [&::before]:!bg-[#b45309] [&::before]:!shadow-[0_0_0.7rem_rgba(180,83,9,0.38)]">Academic Journey</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-[#3e1a0a]">Education &amp; Background.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#6d4a32] lg:justify-self-end md:text-lg">
            Engineering foundation grounded in core computer science, modern web architectures, and advanced AI methodologies.
          </p>
        </div>

        <div className="rounded-[24px] border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] p-6 md:p-8 lg:p-10">
          {EDUCATION_DATA.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid gap-6 border-b border-[rgba(62,26,10,0.08)] py-10 last:border-b-0 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-12"
            >
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[#b45309]">
                  <GraduationCap className="h-4 w-4" />
                  <span>Phase / 0{i + 1}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 font-mono text-xs text-[#8d6b4f]">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.period}</span>
                </div>
                <span className="mt-3 inline-flex w-fit items-center rounded-full border border-[rgba(62,26,10,0.12)] bg-[#f7ede0] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#6d4a32]">
                  {item.status}
                </span>
              </div>

              <div>
                <h3 className="text-balance text-2xl font-semibold leading-snug text-[#3e1a0a] md:text-3xl">
                  {item.degree}
                </h3>
                <p className="mt-2 font-serif text-lg font-medium italic text-[#b45309]">
                  {item.institution}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#6d4a32] md:text-lg">
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
