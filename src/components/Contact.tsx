'use client';

import React, { useState } from 'react';
import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import { Mail, Phone, Copy, Check, Github, Linkedin } from 'lucide-react';
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
      {/* Decorative Autumn Leaves Branch on the right, matching reference image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[660px] w-[460px] -translate-y-1/2 lg:block xl:h-[760px] xl:w-[540px]"
        style={{ right: -24 }}
      >
        <Image
          src={rightBranch}
          alt=""
          fill
          className={cn(
            'object-contain object-right',
            isOrange ? 'opacity-90' : 'opacity-70',
          )}
          sizes="(min-width: 1280px) 540px, 460px"
        />
      </div>

      {/* Mobile/Tablet branch accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:hidden">
        <div className="absolute -right-8 top-12 w-[220px] opacity-[0.35] sm:w-[280px]">
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
          {/* Main Content Column */}
          <div className="mx-auto max-w-[680px]">
            {/* Header: Let's Connect */}
            <h2
              className={cn(
                'text-center font-serif text-[clamp(2.75rem,7vw,5.5rem)] font-normal leading-[1.04] tracking-[-0.01em]',
                isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
              )}
            >
              Let&apos;s Connect
            </h2>

            {/* Subtitle / Description Paragraph */}
            <p
              className={cn(
                'mx-auto mt-6 max-w-xl text-center text-base sm:text-lg leading-relaxed font-normal',
                isOrange ? 'text-[#faf4ee]/85' : 'text-[#6d4a32]',
              )}
            >
              I&apos;m currently open to new opportunities. If you&apos;d like to discuss a
              role, collaboration, or explore how we can work together, feel free
              to get in touch.
            </p>

            {/* Glassmorphic Contact Information Card */}
            <div
              className={cn(
                'mt-10 sm:mt-12 rounded-[24px] sm:rounded-[28px] border p-6 sm:p-9 md:p-10 shadow-2xl backdrop-blur-md transition-all',
                isOrange
                  ? 'border-[#faf4ee]/20 bg-[#3e1a0a]/15 text-[#faf4ee]'
                  : 'border-[rgba(62,26,10,0.12)] bg-[#faf4ee] text-[#3e1a0a]',
              )}
            >
              {/* Card Title */}
              <h3
                className={cn(
                  'font-serif text-2xl sm:text-[1.75rem] font-normal tracking-[-0.01em]',
                  isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
                )}
              >
                Contact Information
              </h3>

              {/* Card Divider */}
              <div
                className={cn(
                  'mt-5 mb-7 h-px w-full',
                  isOrange ? 'bg-[#faf4ee]/15' : 'bg-[rgba(62,26,10,0.1)]',
                )}
              />

              {/* Rows */}
              <div className="space-y-6 sm:space-y-7">
                {/* Email Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={cn(
                        'flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border transition-colors',
                        isOrange
                          ? 'border-[#faf4ee]/15 bg-[#faf4ee]/10 text-[#faf4ee]'
                          : 'border-[rgba(62,26,10,0.1)] bg-[#f7ede0] text-[#b45309]',
                      )}
                    >
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={cn(
                          'font-mono text-[0.65rem] uppercase tracking-[0.14em]',
                          isOrange ? 'text-[#faf4ee]/70' : 'text-[#8d6b4f]',
                        )}
                      >
                        EMAIL
                      </p>
                      <a
                        href={`mailto:${email}?subject=Project Inquiry`}
                        className={cn(
                          'block truncate font-lining text-sm sm:text-base md:text-lg font-medium tracking-tight transition-colors',
                          isOrange ? 'text-[#faf4ee] hover:text-[#faf4ee]/80' : 'text-[#3e1a0a] hover:text-[#b45309]',
                        )}
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      title={copied ? 'Copied to clipboard' : 'Copy email address'}
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-xl border transition-all cursor-pointer hover:scale-105 active:scale-95',
                        isOrange
                          ? 'border-[#faf4ee]/15 bg-[#faf4ee]/10 text-[#faf4ee] hover:bg-[#faf4ee]/20'
                          : 'border-[rgba(62,26,10,0.12)] bg-[#f7ede0] text-[#3e1a0a] hover:border-[#b45309] hover:text-[#b45309]',
                      )}
                    >
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                    {copied && (
                      <span className="absolute -top-7 right-0 whitespace-nowrap rounded-md bg-[#3e1a0a] px-2 py-0.5 font-mono text-[0.6rem] text-[#faf4ee] shadow-sm">
                        Copied!
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={cn(
                        'flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border transition-colors',
                        isOrange
                          ? 'border-[#faf4ee]/15 bg-[#faf4ee]/10 text-[#faf4ee]'
                          : 'border-[rgba(62,26,10,0.1)] bg-[#f7ede0] text-[#b45309]',
                      )}
                    >
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={cn(
                          'font-mono text-[0.65rem] uppercase tracking-[0.14em]',
                          isOrange ? 'text-[#faf4ee]/70' : 'text-[#8d6b4f]',
                        )}
                      >
                        PHONE
                      </p>
                      <a
                        href={`tel:${phone}`}
                        className={cn(
                          'block truncate font-lining text-sm sm:text-base md:text-lg font-medium tracking-tight transition-colors',
                          isOrange ? 'text-[#faf4ee] hover:text-[#faf4ee]/80' : 'text-[#3e1a0a] hover:text-[#b45309]',
                        )}
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://github.com/SiddharthRai22"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    title="GitHub Profile"
                    className={cn(
                      'flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border transition-all hover:scale-105 active:scale-95',
                      isOrange
                        ? 'border-[#faf4ee]/15 bg-[#faf4ee]/10 text-[#faf4ee] hover:bg-[#faf4ee]/20'
                        : 'border-[rgba(62,26,10,0.12)] bg-[#f7ede0] text-[#3e1a0a] hover:border-[#b45309] hover:text-[#b45309]',
                    )}
                  >
                    <Github className="h-5 w-5" />
                  </a>

                  <a
                    href="http://www.linkedin.com/in/iam-siddharth"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile"
                    className={cn(
                      'flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border transition-all hover:scale-105 active:scale-95',
                      isOrange
                        ? 'border-[#faf4ee]/15 bg-[#faf4ee]/10 text-[#faf4ee] hover:bg-[#faf4ee]/20'
                        : 'border-[rgba(62,26,10,0.12)] bg-[#f7ede0] text-[#3e1a0a] hover:border-[#b45309] hover:text-[#b45309]',
                    )}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer
          className={cn(
            'flex items-center justify-center border-t py-7 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-center',
            isOrange
              ? 'border-[#faf4ee]/20 text-[#faf4ee]/75'
              : 'border-[rgba(62,26,10,0.08)] text-[#8d6b4f]',
          )}
        >
          <p>© 2026 Siddharth Kumar Rai. All rights reserved.</p>
        </footer>
      </ParallaxSection>
    </section>
  );
};


