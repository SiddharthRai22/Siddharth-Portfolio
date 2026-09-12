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
          {/* Headline: About Me */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'font-serif text-[clamp(2.75rem,5.5vw,5.25rem)] font-normal leading-[1.05] tracking-[-0.01em]',
              isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
            )}
          >
            About Me
          </motion.h2>

          <div className="mt-8 sm:mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
            {/* Left Column: About Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-center lg:pr-6 xl:pr-10"
            >
              <div
                className={cn(
                  'space-y-5 text-sm sm:text-base md:text-[1.02rem] leading-[1.75] font-normal',
                  isOrange ? 'text-[#faf4ee]' : 'text-[#441a08]',
                )}
              >
                <p>
                  I’m a Computer Science Engineer and Full Stack Developer focused on building web applications with the MERN stack and AI-powered applications.
                </p>
                <p>
                  I work with technologies such as{' '}
                  <strong className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#1e0b04]')}>
                    React, Node.js, MongoDB, and Express
                  </strong>
                  , and have experience exploring{' '}
                  <strong className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#1e0b04]')}>
                    LLM-based applications using LangChain and LangGraph
                  </strong>
                  . I enjoy turning ideas into practical applications, solving problems through code, and learning new technologies to improve the way I build software.
                </p>
                <p>
                  My current focus is on combining{' '}
                  <strong className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#1e0b04]')}>
                    full-stack development with AI
                  </strong>{' '}
                  to build useful, reliable, and user-focused applications.
                </p>
              </div>
            </motion.div>

            {/* Right Column: AI Quote & Author Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:max-w-[32rem] flex justify-start lg:justify-end"
            >
              <div
                className={cn(
                  'w-full relative rounded-[22px] sm:rounded-[26px] border p-6 sm:p-7 md:p-8 lg:p-8 xl:p-9 transition-all shadow-[0_12px_32px_rgba(0,0,0,0.10)]',
                  isOrange
                    ? 'border-[#faf4ee]/20 bg-[#f7ede0] text-[#3e1a0a]'
                    : 'border-[rgba(62,26,10,0.12)] bg-[#b45309] text-[#faf4ee]',
                )}
              >
                <blockquote
                  className={cn(
                    'font-serif text-[clamp(1.2rem,1.75vw,1.6rem)] font-normal italic leading-[1.4] tracking-[-0.01em]',
                    isOrange ? 'text-[#3e1a0a]' : 'text-[#faf4ee]',
                  )}
                >
                  &ldquo;I believe that AI is not just a tool, but a partner in creating scalable, efficient, and intelligent systems that can truly make a difference in how we interact with technology.&rdquo;
                </blockquote>

                <div className="mt-6 sm:mt-7 flex items-center gap-3.5">
                  <div
                    className={cn(
                      'flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold tracking-wider transition-colors',
                      isOrange
                        ? 'border-[#3e1a0a]/30 text-[#3e1a0a]'
                        : 'border-[#faf4ee]/40 text-[#faf4ee]',
                    )}
                    aria-hidden="true"
                  >
                    SK
                  </div>
                  <div>
                    <h3
                      className={cn(
                        'text-sm sm:text-base font-semibold tracking-tight',
                        isOrange ? 'text-[#3e1a0a]' : 'text-[#faf4ee]',
                      )}
                    >
                      Siddharth Kumar Rai
                    </h3>
                    <p
                      className={cn(
                        'font-mono text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.1em]',
                        isOrange ? 'text-[#6e462d]' : 'text-[#faf4ee]',
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



