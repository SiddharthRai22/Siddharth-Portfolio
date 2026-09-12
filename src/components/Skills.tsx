'use client';

import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import vines from '@/assets/images/vines.jpeg';
import vinesMobile from '@/assets/images/vines_mobile.jpeg';
import { SKILLS } from '@/lib/constants';
import { ParallaxSection } from './ParallaxSection';
import { useSectionTheme, SectionTheme } from './SectionContext';
import { cn } from '@/lib/utils';

const VINES_POS: Array<{ name: string; x: number; y: number }> = [
  { name: 'Python', x: 38, y: 20 },
  { name: 'JavaScript', x: 28, y: 34 },
  { name: 'Java', x: 14, y: 28 },
  { name: 'MERN Stack', x: 76, y: 14 },
  { name: 'React', x: 44, y: 52 },
  { name: 'Node.js', x: 60, y: 42 },
  { name: 'Tailwind CSS', x: 78, y: 38 },
  { name: 'LangChain', x: 72, y: 90 },
  { name: 'LangGraph', x: 20, y: 74 },
  { name: 'AI Agents', x: 62, y: 18 },
  { name: 'LLMs', x: 70, y: 28 },
  { name: 'RAG', x: 32, y: 66 },
  { name: 'Vector DB', x: 86, y: 48 },
  { name: 'MCP', x: 68, y: 60 },
  { name: 'REST APIs', x: 86, y: 30 },
  { name: 'SQL', x: 10, y: 46 },
  { name: 'DSA', x: 42, y: 76 },
  { name: 'Git & GitHub', x: 62, y: 84 },
];

const VINES_POS_MOBILE: Array<{ name: string; x: number; y: number }> = [
  { name: 'Python', x: 56, y: 15 },
  { name: 'JavaScript', x: 38, y: 24 },
  { name: 'Java', x: 36, y: 12 },
  { name: 'MERN Stack', x: 68, y: 22 },
  { name: 'React', x: 42, y: 30 },
  { name: 'Node.js', x: 58, y: 52 },
  { name: 'Tailwind CSS', x: 78, y: 42 },
  { name: 'LangChain', x: 36, y: 87 },
  { name: 'LangGraph', x: 74, y: 33 },
  { name: 'AI Agents', x: 30, y: 38 },
  { name: 'LLMs', x: 70, y: 58 },
  { name: 'RAG', x: 30, y: 48 },
  { name: 'Vector DB', x: 32, y: 72 },
  { name: 'MCP', x: 58, y: 92 },
  { name: 'REST APIs', x: 78, y: 68 },
  { name: 'SQL', x: 28, y: 62 },
  { name: 'DSA', x: 48, y: 78 },
  { name: 'Git & GitHub', x: 72, y: 84 },
];

const VINES_SKILLS = SKILLS.map((s, i) => ({
  ...s,
  ...(VINES_POS[i] ?? { x: 50, y: 50 }),
  name: s.name,
}));

const VINES_SKILLS_MOBILE = SKILLS.map((s, i) => ({
  ...s,
  ...(VINES_POS_MOBILE[i] ?? { x: 50, y: 50 }),
  name: s.name,
}));

export const Skills = ({ theme: explicitTheme }: { theme?: SectionTheme } = {}) => {
  const theme = useSectionTheme(explicitTheme);
  const isOrange = theme === 'orange';

  return (
    <section
      id="skills"
      className={cn(
        'scroll-mt-20 overflow-hidden py-24 md:py-36 transition-colors duration-500',
        isOrange ? 'bg-[#b45309] text-[#faf4ee]' : 'bg-[#f7ede0] text-[#3e1a0a]',
      )}
    >
      <ParallaxSection className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <h2
              className={cn(
                'text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em]',
                isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
              )}
            >
              My Tech Stack
            </h2>
          </div>
          <p
            className={cn(
              'max-w-lg text-base font-normal leading-relaxed lg:justify-self-end md:text-lg',
              isOrange ? 'text-[#faf4ee]' : 'text-[#441a08]',
            )}
          >
            Tools and Technologies I use for full-stack development and AI application development.
          </p>
        </div>

        {/* Desktop vines infinity - full bleed, no crop */}
        <div
          className={cn(
            'relative hidden w-full overflow-hidden rounded-[32px] border p-2 lg:block',
            isOrange
              ? 'border-[#faf4ee]/20 bg-[#faf4ee]'
              : 'border-[rgba(62,26,10,0.12)] bg-[#faf4ee] shadow-[0_16px_48px_rgba(62,26,10,0.06)]',
          )}
        >
          <div className="relative aspect-[1408/768] w-full overflow-hidden rounded-[24px]">
            <Image src={vines} alt="" fill priority sizes="100vw" className="object-contain object-center" />
            {VINES_SKILLS.slice(0, SKILLS.length).map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -4, zIndex: 20, transition: { type: 'spring', stiffness: 400, damping: 12 } }}
                whileTap={{ scale: 0.96 }}
              >
              <span className="cursor-pointer whitespace-nowrap rounded-full border-2 border-[#7a4a2b]/45 bg-[#faf4ee] px-5 py-2.5 font-serif text-sm font-bold tracking-[0.02em] text-[#3e1a0a] shadow-[0_4px_14px_rgba(62,26,10,0.18)] transition-colors hover:border-[#b45309] hover:text-[#b45309] md:text-[1.05rem]">
                {skill.name}
              </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile + Tablet portrait vines — hand-tuned < lg */}
        <div
          className={cn(
            'relative w-full overflow-hidden rounded-[32px] border p-2 lg:hidden',
            isOrange
              ? 'border-[#faf4ee]/20 bg-[#faf4ee]'
              : 'border-[rgba(62,26,10,0.12)] bg-[#faf4ee] shadow-[0_16px_48px_rgba(62,26,10,0.06)]',
          )}
        >
          <div className="relative aspect-[768/1376] w-full overflow-hidden rounded-[24px]">
            <Image src={vinesMobile} alt="" fill priority={false} sizes="100vw" className="object-contain object-center" />
            {VINES_SKILLS_MOBILE.slice(0, SKILLS.length).map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ delay: i * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -4, zIndex: 20, transition: { type: 'spring', stiffness: 400, damping: 12 } }}
                whileTap={{ scale: 0.96 }}
              >
              <span className="cursor-pointer whitespace-nowrap rounded-full border-2 border-[#7a4a2b]/45 bg-[#faf4ee] px-3 py-1.5 font-serif text-xs font-bold tracking-[0.02em] text-[#3e1a0a] shadow-[0_4px_14px_rgba(62,26,10,0.18)] transition-colors hover:border-[#b45309] hover:text-[#b45309] sm:px-4 sm:py-2 sm:text-sm">
                {skill.name}
              </span>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

