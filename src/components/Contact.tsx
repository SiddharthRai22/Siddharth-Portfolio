'use client';

import React, { useState } from 'react';
import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, Phone } from 'lucide-react';
import { ParallaxSection } from './ParallaxSection';
import rightBranch from '@/assets/images/right_branch.png';
import { useSectionTheme, SectionTheme } from './SectionContext';
import { cn } from '@/lib/utils';

export const Contact = ({ theme: explicitTheme }: { theme?: SectionTheme } = {}) => {
  const [copied, setCopied] = useState(false);
  const email = "siddharthkumarrai23@gmail.com";
  const phone = "+91 7319792636";

  const theme = useSectionTheme(explicitTheme);
  const isOrange = theme === 'orange';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className={cn(
        'relative scroll-mt-20 overflow-hidden pt-24 md:pt-36 transition-colors duration-500',
        isOrange
          ? 'border-t border-[#faf4ee]/20 bg-[#b45309] text-[#faf4ee]'
          : 'border-t border-[rgba(62,26,10,0.08)] bg-[#f7ede0] text-[#3e1a0a]',
      )}
    >
      {/* right_branch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[520px] w-[360px] -translate-y-1/2 lg:block xl:h-[600px] xl:w-[420px]"
        style={{ right: -12 }}
      >
        <Image
          src={rightBranch}
          alt=""
          fill
          className={cn(
            'object-contain object-right',
            isOrange && 'opacity-60',
          )}
          sizes="420px"
        />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:hidden">
        <div className="absolute right-0 top-[8%] w-[180px] opacity-[0.24] sm:w-[220px] md:w-[260px]">
          <Image src={rightBranch} alt="" width={399} height={600} className="h-auto w-full object-contain object-right" />
        </div>
      </div>
      <ParallaxSection className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-24 md:pb-36"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p
              className={cn(
                'system-label',
                isOrange &&
                  'system-label--on-orange !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]',
              )}
            >
              Let’s begin
            </p>
            <div
              className={cn(
                'flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em]',
                isOrange ? 'text-[#faf4ee]/80' : 'text-[#8d6b4f]',
              )}
            >
              <span
                className={cn(
                  'h-2 w-2 rounded-full',
                  isOrange ? 'bg-[#faf4ee] shadow-[0_0_12px_rgba(250,244,238,0.8)]' : 'bg-[#b45309] shadow-[0_0_12px_rgba(180,83,9,0.45)]',
                )}
                aria-hidden="true"
              />
              <span>Available for new opportunities</span>
            </div>
          </div>

          <h2
            className={cn(
              'mt-16 max-w-5xl text-balance text-[clamp(3.2rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.02em]',
              isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
            )}
          >
            Let&apos;s build what comes next.
          </h2>

          <p
            className={cn(
              'mt-10 max-w-xl text-base leading-relaxed md:text-xl',
              isOrange ? 'text-[#faf4ee]/85' : 'text-[#6d4a32]',
            )}
          >
            I’m currently open to new opportunities. If you’d like to discuss a role, collaboration, or explore how we can work together, feel free to get in touch.
          </p>

          <div
            className={cn(
              'mt-14 rounded-[24px] border px-6 py-6 md:flex md:items-center md:justify-between md:gap-8',
              isOrange
                ? 'border-[#faf4ee]/20 bg-[#faf4ee]/10'
                : 'border-[rgba(62,26,10,0.08)] bg-[#faf4ee]',
            )}
          >
            <a 
              href={`mailto:${email}?subject=Project Inquiry`}
              className={cn(
                'group flex min-w-0 items-center gap-3 text-[clamp(1.2rem,3.4vw,3.2rem)] font-semibold transition-colors',
                isOrange ? 'text-[#faf4ee] hover:text-[#faf4ee]/80' : 'text-[#3e1a0a] hover:text-[#b45309]',
              )}
            >
              <span className="min-w-0 break-all">{email}</span>
              <ArrowUpRight className="h-[0.8em] w-[0.8em] shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <div className="mt-5 flex items-center gap-3 md:mt-0">
              <button
                type="button"
                onClick={copyEmail}
                className={cn(
                  'inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] transition-colors',
                  isOrange
                    ? 'border-[#faf4ee]/30 bg-[#faf4ee]/15 text-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
                    : 'border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#8d6b4f] hover:border-[#b45309] hover:text-[#b45309]',
                )}
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
              <a
                href={`tel:${phone}`}
                className={cn(
                  'inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] transition-colors',
                  isOrange
                    ? 'border-[#faf4ee]/30 bg-[#faf4ee]/15 text-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
                    : 'border-[rgba(62,26,10,0.15)] bg-[#faf4ee] text-[#8d6b4f] hover:border-[#b45309] hover:text-[#b45309]',
                )}
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{phone}</span>
              </a>
            </div>
            <span className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
          </div>
        </motion.div>

        <footer
          className={cn(
            'flex flex-col gap-5 border-t py-7 font-mono text-[0.65rem] uppercase tracking-[0.1em] md:flex-row md:items-center md:justify-between',
            isOrange
              ? 'border-[#faf4ee]/20 text-[#faf4ee]/75'
              : 'border-[rgba(62,26,10,0.08)] text-[#8d6b4f]',
          )}
        >
          <p>© 2026 Siddharth Kumar Rai. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/SiddharthRai22"
              target="_blank"
              rel="noreferrer"
              className={cn(
                'transition-colors',
                isOrange ? 'hover:text-[#faf4ee]' : 'hover:text-[#b45309]',
              )}
            >
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/iam-siddharth"
              target="_blank"
              rel="noreferrer"
              className={cn(
                'transition-colors',
                isOrange ? 'hover:text-[#faf4ee]' : 'hover:text-[#b45309]',
              )}
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1RQhAn6YS4SE7cLMfY3zjGpbz84Uv1hls/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className={cn(
                'transition-colors',
                isOrange ? 'hover:text-[#faf4ee]' : 'hover:text-[#b45309]',
              )}
            >
              Resume
            </a>
          </div>
        </footer>
      </ParallaxSection>
    </section>
  );
};

