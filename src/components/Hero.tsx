import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/Image';
import leftBranch from '@/assets/images/left_branch.png';
import rightBranch from '@/assets/images/right_branch.png';

export const Hero = ({ isReady = true }: { isReady?: boolean } = {}) => {
  const { pathname } = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <section id="hero" className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f7ede0] py-28 md:py-36">
      {/* left branch */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: isReady ? 1 : 0, x: isReady ? 0 : -24 }}
        transition={{ duration: 1.15, ease: [0.25, 1, 0.5, 1], delay: isReady ? 1.0 : 0 }}
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[640px] w-[420px] -translate-y-1/2 lg:block xl:h-[740px] xl:w-[500px]"
        style={{ left: -28 }}
      >
        <Image src={leftBranch} alt="" fill className="object-contain object-left" sizes="500px" priority />
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: isReady ? 1 : 0, x: isReady ? 0 : 24 }}
        transition={{ duration: 1.15, ease: [0.25, 1, 0.5, 1], delay: isReady ? 1.15 : 0 }}
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[640px] w-[420px] -translate-y-1/2 lg:block xl:h-[740px] xl:w-[500px]"
        style={{ right: -28 }}
      >
        <Image src={rightBranch} alt="" fill className="object-contain object-right" sizes="500px" priority />
      </motion.div>

      {/* mobile subtle branches */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:hidden">
        <div className="absolute left-0 top-[14%] w-[180px] opacity-[0.28] sm:w-[220px] md:w-[260px]">
          <Image src={leftBranch} alt="" width={399} height={600} className="h-auto w-full object-contain" />
        </div>
        <div className="absolute right-0 top-[38%] w-[180px] opacity-[0.28] sm:w-[220px] md:w-[260px]">
          <Image src={rightBranch} alt="" width={399} height={600} className="h-auto w-full object-contain" />
        </div>
      </div>

      <div className="section-shell relative z-10 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 12 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: isReady ? 0.22 : 0 }}
          className="system-label mb-6"
        >
          Full Stack Developer · AI Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 24 }}
          transition={{ delay: isReady ? 0.42 : 0, duration: 0.95, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-balance text-[clamp(3.5rem,9.5vw,9.5rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-[#3e1a0a]">
            Engineering Intelligent Systems.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-[#6d4a32] md:text-xl">
            Hi, I’m <span className="font-semibold text-[#3e1a0a]">Siddharth Kumar Rai</span>. I build scalable web applications with the <span className="font-medium text-[#b45309]">MERN Stack</span> and engineer intelligent, real-time architectures using <span className="font-medium text-[#b45309]">LLMs &amp; AI Agents</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: isReady ? 1 : 0, y: isReady ? 0 : 16 }}
          transition={{ delay: isReady ? 0.72 : 0, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/#work"
            onClick={(e) => handleLinkClick(e as any, '/#work')}
            className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#b45309] px-6 text-sm font-semibold text-[#faf4ee] transition-colors hover:bg-[#3e1a0a]"
          >
            Enter selected work
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
          <a
            href="https://drive.google.com/file/d/1RQhAn6YS4SE7cLMfY3zjGpbz84Uv1hls/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-[rgba(62,26,10,0.18)] bg-[#faf4ee] px-6 text-sm font-semibold text-[#3e1a0a] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
          >
            View Resume
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 1 : 0 }}
          transition={{ delay: isReady ? 1.1 : 0, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="mt-16 grid w-full grid-cols-2 gap-4 border-t border-[rgba(62,26,10,0.08)] pt-5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-[#8d6b4f] md:grid-cols-4 md:gap-4 md:text-xs"
        >
          <span className="whitespace-nowrap text-center">Portfolio / 2026</span>
          <span className="whitespace-nowrap text-center">MERN · AI Systems</span>
          <span className="whitespace-nowrap text-center">Scroll to navigate</span>
          <span className="whitespace-nowrap text-center text-[#b45309]">Available for hire</span>
        </motion.div>
      </div>
    </section>
  );
};
