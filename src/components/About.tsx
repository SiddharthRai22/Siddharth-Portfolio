'use client';

import React from 'react';
import { motion } from 'motion/react';
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
        <div className="mx-auto max-w-[78rem]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
            {/* Left Column: About Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center lg:pr-6 xl:pr-10"
            >
              {/* Eyebrow: • ABOUT */}
              <div
                className={cn(
                  'flex items-center gap-2 font-mono text-[0.7rem] sm:text-[0.75rem] uppercase tracking-[0.2em]',
                  isOrange ? 'text-[#faf4ee]/80' : 'text-[#8d6b4f]',
                )}
              >
                <span
                  className={cn(
                    'inline-block h-1.5 w-1.5 rounded-full',
                    isOrange ? 'bg-[#faf4ee]' : 'bg-[#b45309]',
                  )}
                  aria-hidden="true"
                />
                <span>ABOUT</span>
              </div>

              {/* Headline: Engineering with purpose. */}
              <h2
                className={cn(
                  'mt-4 font-serif text-[clamp(2.75rem,5.5vw,5.25rem)] font-normal leading-[1.02] tracking-[-0.01em]',
                  isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
                )}
              >
                Engineering
                <br />
                with purpose.
              </h2>

              {/* Body Paragraphs */}
              <div
                className={cn(
                  'mt-8 sm:mt-10 space-y-5 text-sm sm:text-base md:text-[1.05rem] leading-[1.75]',
                  isOrange ? 'text-[#faf4ee]/85' : 'text-[#6d4a32]',
                )}
              >
                <p>
                  I&apos;m a Computer Science Engineer and Full Stack Developer specializing in the MERN stack and AI-powered applications. I enjoy building responsive, scalable web applications and exploring how AI can enhance real-world user experiences.
                </p>
                <p>
                  I have worked on multiple projects involving modern technologies like{' '}
                  <strong className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]')}>
                    React
                  </strong>
                  ,{' '}
                  <strong className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]')}>
                    Node.js
                  </strong>
                  , and LLM-based tools such as{' '}
                  <strong className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]')}>
                    LangChain
                  </strong>
                  . I am passionate about learning, problem-solving, and continuously improving my skills to build efficient and impactful solutions.
                </p>
              </div>
            </motion.div>

            {/* Right Column: AI Quote & Author Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <div
                className={cn(
                  'relative rounded-[28px] sm:rounded-[32px] border p-8 sm:p-10 md:p-12 lg:p-12 xl:p-14 transition-all',
                  isOrange
                    ? 'border-[#faf4ee]/20 bg-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.12)]'
                    : 'border-[rgba(62,26,10,0.12)] bg-[#faf4ee] shadow-sm',
                )}
              >
                <blockquote
                  className={cn(
                    'font-serif text-[clamp(1.5rem,2.4vw,2.2rem)] font-normal italic leading-[1.36] tracking-[-0.01em]',
                    isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
                  )}
                >
                  &ldquo;I believe that AI is not just a tool, but a partner in creating scalable, efficient, and intelligent systems that can truly make a difference in how we interact with technology.&rdquo;
                </blockquote>

                <div className="mt-8 sm:mt-10 flex items-center gap-4">
                  <div
                    className={cn(
                      'flex h-12 w-12 sm:h-13 sm:w-13 shrink-0 items-center justify-center rounded-full border font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors',
                      isOrange
                        ? 'border-[#faf4ee]/40 text-[#faf4ee]'
                        : 'border-[#3e1a0a]/30 text-[#3e1a0a]',
                    )}
                    aria-hidden="true"
                  >
                    SK
                  </div>
                  <div>
                    <h3
                      className={cn(
                        'text-base sm:text-lg font-semibold tracking-tight',
                        isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
                      )}
                    >
                      Siddharth Kumar Rai
                    </h3>
                    <p
                      className={cn(
                        'font-mono text-[0.7rem] sm:text-[0.75rem] uppercase tracking-[0.1em]',
                        isOrange ? 'text-[#faf4ee]/70' : 'text-[#8d6b4f]',
                      )}
                    >
                      Full Stack &amp; AI Engineer
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};



