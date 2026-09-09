'use client';

import React, { useState } from 'react';
import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check, Phone } from 'lucide-react';
import { ParallaxSection } from './ParallaxSection';
import rightBranch from '@/assets/images/right_branch.png';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "siddharthkumarrai23@gmail.com";
  const phone = "+91 7319792636";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-[rgba(62,26,10,0.08)] bg-[#f7ede0] pt-24 md:pt-36">
      {/* right_branch */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 hidden h-[520px] w-[360px] -translate-y-1/2 lg:block xl:h-[600px] xl:w-[420px]" style={{ right: -12 }}>
        <Image src={rightBranch} alt="" fill className="object-contain object-right" sizes="420px" />
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
            <p className="system-label">Let’s begin</p>
            <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#8d6b4f]">
              <span className="h-2 w-2 rounded-full bg-[#b45309] shadow-[0_0_12px_rgba(180,83,9,0.45)]" aria-hidden="true" />
              <span>Available for new opportunities</span>
            </div>
          </div>

          <h2 className="mt-16 max-w-5xl text-balance text-[clamp(3.2rem,9vw,9rem)] font-semibold leading-[0.84] tracking-[-0.02em] text-[#3e1a0a]">
            Let&apos;s build what comes next.
          </h2>

          <p className="mt-10 max-w-xl text-base leading-relaxed text-[#6d4a32] md:text-xl">
            I’m currently open to new opportunities. If you’d like to discuss a role, collaboration, or explore how we can work together, feel free to get in touch.
          </p>

          <div className="mt-14 rounded-[24px] border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] px-6 py-6 md:flex md:items-center md:justify-between md:gap-8">
            <a 
              href={`mailto:${email}?subject=Project Inquiry`}
              className="group flex min-w-0 items-center gap-3 text-[clamp(1.2rem,3.4vw,3.2rem)] font-semibold text-[#3e1a0a] transition-colors hover:text-[#b45309]"
            >
              <span className="min-w-0 break-all">{email}</span>
              <ArrowUpRight className="h-[0.8em] w-[0.8em] shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <div className="mt-5 flex items-center gap-3 md:mt-0">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[rgba(62,26,10,0.15)] bg-[#faf4ee] px-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#8d6b4f] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
              >
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
              <a
                href={`tel:${phone}`}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[rgba(62,26,10,0.15)] bg-[#faf4ee] px-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#8d6b4f] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{phone}</span>
              </a>
            </div>
            <span className="sr-only" aria-live="polite">{copied ? 'Email address copied to clipboard' : ''}</span>
          </div>
        </motion.div>

        <footer className="flex flex-col gap-5 border-t border-[rgba(62,26,10,0.08)] py-7 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#8d6b4f] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Siddharth Kumar Rai. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="https://github.com/SiddharthRai22" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#b45309]">GitHub</a>
            <a href="http://www.linkedin.com/in/iam-siddharth" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#b45309]">LinkedIn</a>
            <a href="https://drive.google.com/file/d/1RQhAn6YS4SE7cLMfY3zjGpbz84Uv1hls/view?usp=sharing" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#b45309]">Resume</a>
          </div>
        </footer>
      </ParallaxSection>
    </section>
  );
};
