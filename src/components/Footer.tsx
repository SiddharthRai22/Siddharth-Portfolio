'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '@/lib/projects';

export const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', hash);
      }
    }
  };

  return (
    <footer
      className="relative overflow-hidden text-[#ffffff] pt-14 pb-10"
      style={{
        background:
          'radial-gradient(120% 95% at 50% 105%, #2a3826 0%, #151e13 32%, #080c07 65%, #040603 100%)',
      }}
    >
      {/* Organic scattered starlight/dust speckles positioned across the dark canopy */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft atmospheric ambient glow rising from bottom center */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1100px] h-[380px] bg-[#394d33]/25 blur-[120px] rounded-full pointer-events-none" />

        {/* Scattered individual stars/dust with varied opacity and positions matching the screenshot */}
        <span className="absolute top-[8%] left-[6%] h-[2.5px] w-[2.5px] rounded-full bg-white/70 shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
        <span className="absolute top-[14%] left-[12%] h-[1.5px] w-[1.5px] rounded-full bg-white/40" />
        <span className="absolute top-[18%] left-[26%] h-[2px] w-[2px] rounded-full bg-white/35" />
        <span className="absolute top-[26%] left-[19%] h-[1.5px] w-[1.5px] rounded-full bg-white/50" />
        <span className="absolute top-[11%] left-[34%] h-[2px] w-[2px] rounded-full bg-white/60 shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
        <span className="absolute top-[29%] left-[32%] h-[1.5px] w-[1.5px] rounded-full bg-white/30" />
        <span className="absolute top-[6%] left-[48%] h-[2px] w-[2px] rounded-full bg-white/50" />
        <span className="absolute top-[28%] left-[50%] h-[2.5px] w-[2.5px] rounded-full bg-white/40" />
        <span className="absolute top-[15%] left-[56%] h-[2px] w-[2px] rounded-full bg-white/65 shadow-[0_0_5px_rgba(255,255,255,0.7)]" />
        <span className="absolute top-[37%] left-[53%] h-[1.5px] w-[1.5px] rounded-full bg-white/35" />
        <span className="absolute top-[9%] left-[68%] h-[2px] w-[2px] rounded-full bg-white/50" />
        <span className="absolute top-[21%] left-[83%] h-[2.5px] w-[2.5px] rounded-full bg-white/55" />
        <span className="absolute top-[12%] left-[87%] h-[1.5px] w-[1.5px] rounded-full bg-white/35" />
        <span className="absolute top-[30%] left-[77%] h-[2px] w-[2px] rounded-full bg-white/45" />
        <span className="absolute top-[42%] left-[89%] h-[1.5px] w-[1.5px] rounded-full bg-white/30" />
        <span className="absolute top-[52%] left-[14%] h-[1.5px] w-[1.5px] rounded-full bg-white/25" />
        <span className="absolute top-[75%] left-[51%] h-[2px] w-[2px] rounded-full bg-white/35" />
        <span className="absolute top-[68%] left-[38%] h-[1.5px] w-[1.5px] rounded-full bg-white/30" />
        <span className="absolute top-[60%] left-[72%] h-[1.5px] w-[1.5px] rounded-full bg-white/25" />
      </div>

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-[76rem]">
          {/* 3 Columns matching the user request */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-14">
            {/* Column 1: Navigation */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl leading-none select-none" role="img" aria-label="sparkles">✨</span>
                <h3 className="font-sans font-normal lowercase tracking-wide text-2xl sm:text-[1.85rem] text-[#faedd0]">
                  navigation
                </h3>
              </div>

              <ul className="mt-8 space-y-4 text-[1.02rem] font-normal text-[#ffffff]">
                <li>
                  <Link
                    to="/#projects"
                    onClick={(e) => handleSmoothScroll(e, '#projects')}
                    className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#about"
                    onClick={(e) => handleSmoothScroll(e, '#about')}
                    className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#skills"
                    onClick={(e) => handleSmoothScroll(e, '#skills')}
                    className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Contact */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl leading-none select-none" role="img" aria-label="moon">🌙</span>
                <h3 className="font-sans font-normal lowercase tracking-wide text-2xl sm:text-[1.85rem] text-[#faedd0]">
                  contact
                </h3>
              </div>

              <ul className="mt-8 space-y-4 text-[1.02rem] font-normal text-[#ffffff]">
                <li>
                  <a
                    href="https://www.linkedin.com/in/iam-siddharth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1RQhAn6YS4SE7cLMfY3zjGpbz84Uv1hls/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:siddharthkumarrai23@gmail.com"
                    className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SiddharthRai22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Case Studies */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="text-2xl leading-none select-none" role="img" aria-label="shooting star">💫</span>
                <h3 className="font-sans font-normal lowercase tracking-wide text-2xl sm:text-[1.85rem] text-[#faedd0]">
                  case studies
                </h3>
              </div>

              <ul className="mt-8 space-y-4 text-[1.02rem] font-normal text-[#ffffff]">
                {PROJECTS.map((project) => (
                  <li key={project.id}>
                    <Link
                      to={`/work/${project.id}`}
                      className="inline-block transition-colors duration-200 hover:text-[#f5a76c]"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-center pt-6 text-[0.92rem] text-[#ffffff] font-['Inter',system-ui,-apple-system,sans-serif]">
            <p className="tracking-normal font-normal text-center">
              © 2026 Siddharth Kumar Rai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
