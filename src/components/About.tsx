'use client';

import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import siddharthPortrait from '@/assets/images/siddharth_portrait.jpg';
import leftBranch from '@/assets/images/left_branch.png';
import { ParallaxSection } from './ParallaxSection';

export const About = () => {
  const stats = [
    { label: 'Specialization', value: 'MERN & AI' },
    { label: 'Key Projects Built', value: '5+' },
    { label: 'Academic Qualification', value: 'B.Tech CSE' },
    { label: 'Working Mode', value: 'Open for Roles' },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 border-y border-[rgba(62,26,10,0.08)] bg-[#f7ede0] py-24 md:py-36">
      <ParallaxSection className="section-shell">
        <div className="mx-auto grid max-w-[68rem] gap-14 lg:max-w-[60rem] lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12 xl:max-w-[64rem] xl:gap-14 2xl:max-w-[68rem] 2xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[480px] lg:mx-0"
          >
            <p className="system-label mb-5">About</p>
            <div className="absolute -left-6 -top-6 hidden h-[120px] w-[120px] opacity-[0.14] lg:block" aria-hidden="true">
              <Image src={leftBranch} alt="" fill sizes="120px" className="object-contain object-left-top" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-[#b45309]/12 bg-[#faf4ee] shadow-[0_16px_48px_rgba(62,26,10,0.09)]">
              <Image src={siddharthPortrait} alt="Siddharth Kumar Rai portrait" fill sizes="(max-width: 768px) 85vw, 480px" className="object-cover object-top" priority />
            </div>
            <p className="mt-4 font-serif text-sm italic leading-relaxed text-[#8d6b4f]">Siddharth Kumar Rai — Full Stack Developer &amp; AI Engineer.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="w-full lg:pt-[28px]"
          >
            <h2 className="w-full text-balance text-[clamp(2.4rem,5vw,5.2rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-[#3e1a0a]">
              Engineering with precision. <span className="font-light italic text-[#b45309]">Intelligence in every layer.</span>
            </h2>
            <div className="mt-10 grid w-full gap-6 text-balance text-base leading-[1.7] text-[#6d4a32] md:text-lg">
              <p className="max-w-[46ch]">I am a Computer Science Engineer and Full Stack Developer specializing in the MERN stack and AI-powered applications. I build responsive, scalable web applications and explore how AI can elevate user experiences.</p>
              <p className="max-w-[46ch]">I have worked on multiple projects involving modern technologies like React, Node.js, and LLM-based frameworks including LangChain and LangGraph to create intelligent, real-time systems.</p>
            </div>
            <div className="mt-8 border-l-2 border-[#b45309]/20 pl-6">
              <p className="font-serif text-base italic leading-relaxed text-[#8d6b4f]">
                &ldquo;I believe that AI is not just a tool, but a partner in creating scalable, efficient, and intelligent systems that can truly make a difference in how we interact with technology.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-20 grid max-w-[68rem] grid-cols-2 gap-4 lg:max-w-[60rem] lg:grid-cols-4 xl:max-w-[64rem] 2xl:max-w-[68rem]">
          {stats.map((stat, i) => {
            const isLong = stat.value.length > 10;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex min-h-36 flex-col rounded-[24px] border border-[rgba(62,26,10,0.06)] bg-[#faf4ee] p-6 md:min-h-44 md:p-7"
              >
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#8d6b4f]">— 0{i + 1}</div>
                <div className="mt-6 flex min-h-[2.2rem] items-center md:mt-8 md:min-h-[2.5rem]">
                  <div className={`font-serif font-semibold leading-none tracking-tight text-[#b45309] ${isLong ? 'whitespace-nowrap text-[1.15rem] sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.25rem]' : 'text-3xl md:text-[2rem]'}`}>{stat.value}</div>
                </div>
                <div className="mt-2 text-xs leading-relaxed text-[#8d6b4f]">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </ParallaxSection>
    </section>
  );
};
