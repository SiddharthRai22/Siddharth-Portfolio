'use client';

import React from 'react';
import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import siddharthPortrait from '@/assets/images/siddharth_portrait.jpg';
import leftBranch from '@/assets/images/left_branch.png';
import { ParallaxSection } from './ParallaxSection';
import { useSectionTheme, SectionTheme } from './SectionContext';
import { cn } from '@/lib/utils';

export const About = ({ theme: explicitTheme }: { theme?: SectionTheme } = {}) => {
  const theme = useSectionTheme(explicitTheme);
  const isOrange = theme === 'orange';

  return (
    <section
      id="about"
      className={cn(
        'relative scroll-mt-20 py-24 md:py-36 transition-colors duration-500',
        isOrange
          ? 'bg-[#b45309] border-t border-[#faf4ee]/20 text-[#faf4ee]'
          : 'bg-[#f7ede0] border-y border-[rgba(62,26,10,0.08)] text-[#3e1a0a]',
      )}
    >
      <ParallaxSection className="section-shell">
        <div className="mx-auto grid max-w-[68rem] gap-14 lg:max-w-[60rem] lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12 xl:max-w-[64rem] xl:gap-14 2xl:max-w-[68rem] 2xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[480px] lg:mx-0"
          >
            <p
              className={cn(
                'system-label mb-5',
                isOrange &&
                  'system-label--on-orange !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]',
              )}
            >
              About
            </p>
            <div className="absolute -left-6 -top-6 hidden h-[120px] w-[120px] opacity-[0.14] lg:block" aria-hidden="true">
              <Image src={leftBranch} alt="" fill sizes="120px" className="object-contain object-left-top" />
            </div>
            <div
              className={cn(
                'relative aspect-[4/5] overflow-hidden rounded-[40px] border shadow-[0_16px_48px_rgba(62,26,10,0.09)]',
                isOrange
                  ? 'border-[#faf4ee]/20 bg-[#faf4ee]/10 shadow-[0_16px_48px_rgba(0,0,0,0.2)]'
                  : 'border-[#b45309]/12 bg-[#faf4ee]',
              )}
            >
              <Image src={siddharthPortrait} alt="Siddharth Kumar Rai portrait" fill sizes="(max-width: 768px) 85vw, 480px" className="object-cover object-top" priority />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="w-full lg:pt-[28px]"
          >
            <h2
              className={cn(
                'w-full text-balance text-[clamp(2.4rem,5vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.02em]',
                isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
              )}
            >
              Engineering with precision.{' '}
              <span
                className={cn(
                  'font-light italic',
                  isOrange ? 'text-[#faf4ee]/90 underline decoration-[#faf4ee]/30 decoration-wavy' : 'text-[#b45309]',
                )}
              >
                Intelligence in every layer.
              </span>
            </h2>
            <div
              className={cn(
                'mt-10 grid w-full gap-6 text-balance text-base leading-[1.7] md:text-lg',
                isOrange ? 'text-[#faf4ee]/85' : 'text-[#6d4a32]',
              )}
            >
              <p className="max-w-[46ch]">
                I am a Computer Science Engineer and Full Stack Developer specializing in the MERN stack and AI-powered applications. I build responsive, scalable web applications and explore how AI can elevate user experiences.
              </p>
              <p className="max-w-[46ch]">
                I have worked on multiple projects involving modern technologies like React, Node.js, and LLM-based frameworks including LangChain and LangGraph to create intelligent, real-time systems.
              </p>
            </div>
            <div
              className={cn(
                'mt-8 border-l-2 pl-6',
                isOrange ? 'border-[#faf4ee]/30' : 'border-[#b45309]/20',
              )}
            >
              <p
                className={cn(
                  'font-serif text-base italic leading-relaxed',
                  isOrange ? 'text-[#faf4ee]/90' : 'text-[#8d6b4f]',
                )}
              >
                &ldquo;I believe that AI is not just a tool, but a partner in creating scalable, efficient, and intelligent systems that can truly make a difference in how we interact with technology.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
};


