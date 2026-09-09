'use client';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Image } from '@/components/Image';
import leftBranch from '@/assets/images/left_branch.png';
import rightBranch from '@/assets/images/right_branch.png';
import siddharthPortrait from '@/assets/images/siddharth_portrait.jpg';
import { useSectionTheme, SectionTheme } from './SectionContext';
import { cn } from '@/lib/utils';

export const Hero = ({
  isReady = true,
  theme: explicitTheme,
}: {
  isReady?: boolean;
  theme?: SectionTheme;
} = {}) => {
  const theme = useSectionTheme(explicitTheme);
  const isOrange = theme === 'orange';
  const { pathname } = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id) || (id === 'projects' ? document.getElementById('work') : null);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <section
      id="hero"
      className={cn(
        'relative flex min-h-svh flex-col justify-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-20 lg:pb-8 transition-colors duration-500',
        isOrange ? 'bg-[#b45309] text-[#faf4ee]' : 'bg-[#f7ede0] text-[#3e1a0a]',
      )}
    >
      {/* background branches */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: isReady ? (isOrange ? 0.16 : 0.22) : 0, x: isReady ? 0 : -24 }}
        transition={{ duration: 1.15, ease: [0.25, 1, 0.5, 1], delay: isReady ? 0.9 : 0 }}
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[640px] w-[420px] -translate-y-1/2 lg:block xl:h-[740px] xl:w-[500px]"
        style={{ left: -36 }}
      >
        <Image src={leftBranch} alt="" fill className="object-contain object-left" sizes="500px" priority />
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: isReady ? (isOrange ? 0.16 : 0.22) : 0, x: isReady ? 0 : 24 }}
        transition={{ duration: 1.15, ease: [0.25, 1, 0.5, 1], delay: isReady ? 1.05 : 0 }}
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[640px] w-[420px] -translate-y-1/2 lg:block xl:h-[740px] xl:w-[500px]"
        style={{ right: -36 }}
      >
        <Image src={rightBranch} alt="" fill className="object-contain object-right" sizes="500px" priority />
      </motion.div>

      {/* mobile subtle branches */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:hidden">
        <div className="absolute left-0 top-[12%] w-[160px] opacity-[0.22] sm:w-[200px]">
          <Image src={leftBranch} alt="" width={399} height={600} className="h-auto w-full object-contain" />
        </div>
        <div className="absolute right-0 top-[40%] w-[160px] opacity-[0.22] sm:w-[200px]">
          <Image src={rightBranch} alt="" width={399} height={600} className="h-auto w-full object-contain" />
        </div>
      </div>

      <div className="section-shell relative z-10 my-auto w-full py-4 lg:py-6">
        <div className="mx-auto grid max-w-[68rem] gap-12 lg:max-w-[62rem] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 xl:max-w-[68rem] 2xl:max-w-[72rem]">
          {/* Left Column: Heading, Subtitle, Buttons, Links */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: isReady ? 1 : 0, x: isReady ? 0 : -32 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: isReady ? 0.2 : 0 }}
            className="w-full text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 10 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: isReady ? 0.25 : 0 }}
              className={cn(
                'system-label mb-5',
                isOrange &&
                  'system-label--on-orange !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]',
              )}
            >
              Full Stack Developer · AI Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 20 }}
              transition={{ delay: isReady ? 0.38 : 0, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'text-balance font-serif text-[clamp(3.4rem,7.2vw,6.4rem)] font-bold leading-[0.92] tracking-[-0.03em]',
                isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
              )}
            >
              Siddharth <br />
              <span className={isOrange ? 'text-[#faf4ee]/90 italic' : 'text-[#b45309]'}>
                Kumar Rai
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 14 }}
              transition={{ delay: isReady ? 0.52 : 0, duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
              className={cn(
                'mt-6 max-w-xl text-base leading-relaxed md:text-lg',
                isOrange ? 'text-[#faf4ee]/85' : 'text-[#6d4a32]',
              )}
            >
              Full Stack Developer | AI Engineer. Building the future with{' '}
              <strong
                className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]')}
              >
                MERN Stack
              </strong>{' '}
              and{' '}
              <strong
                className={cn('font-semibold', isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]')}
              >
                AI Intelligence
              </strong>
              .
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 14 }}
              transition={{ delay: isReady ? 0.68 : 0, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/#projects"
                onClick={(e) => handleLinkClick(e as any, '/#projects')}
                className={cn(
                  'group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300',
                  isOrange
                    ? 'border border-[#faf4ee] bg-[#faf4ee] text-[#b45309] hover:bg-[#faf4ee]/90 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]'
                    : 'border border-[#3e1a0a] bg-[#3e1a0a] text-[#faf4ee] hover:border-[#b45309] hover:bg-[#b45309] hover:shadow-[0_8px_20px_rgba(180,83,9,0.25)]',
                )}
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="https://drive.google.com/file/d/1RQhAn6YS4SE7cLMfY3zjGpbz84Uv1hls/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold shadow-sm transition-all duration-300',
                  isOrange
                    ? 'border border-[#faf4ee]/40 bg-[#faf4ee]/15 text-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
                    : 'border border-[rgba(62,26,10,0.22)] bg-[#faf4ee] text-[#3e1a0a] hover:border-[#b45309] hover:bg-[#b45309] hover:text-[#faf4ee] hover:shadow-[0_8px_20px_rgba(180,83,9,0.2)]',
                )}
              >
                <span>Resume</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Links / Logos */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 12 }}
              transition={{ delay: isReady ? 0.82 : 0, duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="mt-9 flex items-center gap-3.5"
            >
              <a
                href="https://github.com/SiddharthRai22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105',
                  isOrange
                    ? 'border-[#faf4ee]/30 bg-[#faf4ee]/15 text-[#faf4ee] hover:border-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
                    : 'border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#8d6b4f] hover:border-[#b45309] hover:bg-[#b45309]/10 hover:text-[#b45309]',
                )}
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/iam-siddharth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105',
                  isOrange
                    ? 'border-[#faf4ee]/30 bg-[#faf4ee]/15 text-[#faf4ee] hover:border-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
                    : 'border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#8d6b4f] hover:border-[#b45309] hover:bg-[#b45309]/10 hover:text-[#b45309]',
                )}
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:siddharthkumarrai23@gmail.com"
                aria-label="Send Email"
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105',
                  isOrange
                    ? 'border-[#faf4ee]/30 bg-[#faf4ee]/15 text-[#faf4ee] hover:border-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
                    : 'border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#8d6b4f] hover:border-[#b45309] hover:bg-[#b45309]/10 hover:text-[#b45309]',
                )}
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="tel:+917319792636"
                aria-label="Phone Number"
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105',
                  isOrange
                    ? 'border-[#faf4ee]/30 bg-[#faf4ee]/15 text-[#faf4ee] hover:border-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
                    : 'border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#8d6b4f] hover:border-[#b45309] hover:bg-[#b45309]/10 hover:text-[#b45309]',
                )}
                title="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait Image with shape preserved */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: isReady ? 1 : 0, x: isReady ? 0 : 32 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: isReady ? 0.3 : 0 }}
            className="relative mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-0"
          >
            <div className="absolute -right-6 -top-6 hidden h-[120px] w-[120px] opacity-[0.14] lg:block" aria-hidden="true">
              <Image src={rightBranch} alt="" fill sizes="120px" className="object-contain object-right-top" />
            </div>
            <div
              className={cn(
                'relative aspect-[4/5] overflow-hidden rounded-[40px] border shadow-[0_16px_48px_rgba(62,26,10,0.09)]',
                isOrange
                  ? 'border-[#faf4ee]/20 bg-[#faf4ee]/10 shadow-[0_16px_48px_rgba(0,0,0,0.2)]'
                  : 'border-[#b45309]/12 bg-[#faf4ee]',
              )}
            >
              <Image
                src={siddharthPortrait}
                alt="Siddharth Kumar Rai portrait"
                fill
                sizes="(max-width: 768px) 85vw, 480px"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

