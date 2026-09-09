'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from './ServiceCard';
import { ParallaxSection } from './ParallaxSection';
import { useSectionTheme, SectionTheme } from './SectionContext';
import { cn } from '@/lib/utils';

export const Services = ({ theme: explicitTheme }: { theme?: SectionTheme } = {}) => {
  const theme = useSectionTheme(explicitTheme);
  const isOrange = theme === 'orange';

  return (
    <section
      id="services"
      className={cn(
        'scroll-mt-20 py-24 md:py-36 transition-colors duration-500',
        isOrange ? 'bg-[#b45309] text-[#faf4ee]' : 'bg-[#f7ede0] text-[#3e1a0a]',
      )}
    >
      <ParallaxSection className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p
              className={cn(
                'system-label mb-5',
                isOrange
                  ? 'system-label--on-orange !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]'
                  : '!text-[#8d6b4f] [&::before]:!bg-[#b45309] [&::before]:!shadow-[0_0_0.7rem_rgba(180,83,9,0.38)]',
              )}
            >
              Capabilities
            </p>
            <h2
              className={cn(
                'text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em]',
                isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
              )}
            >
              Practice, refined.
            </h2>
          </div>
          <p
            className={cn(
              'max-w-lg text-base leading-relaxed lg:justify-self-end md:text-lg',
              isOrange ? 'text-[#faf4ee]/80' : 'text-[#6d4a32]',
            )}
          >
            Focused engineering engagements for products that need to perform, scale, and feel unmistakably considered.
          </p>
        </div>

        <div
          className={cn(
            'rounded-[24px] border p-6 md:p-8 lg:p-10',
            isOrange
              ? 'border-[#faf4ee]/20 bg-[#faf4ee]/5'
              : 'border-[rgba(62,26,10,0.1)] bg-[#faf4ee] shadow-[0_16px_48px_rgba(62,26,10,0.06)]',
          )}
        >
          <div
            className={cn(
              'divide-y',
              isOrange ? 'divide-[#faf4ee]/15' : 'divide-[rgba(62,26,10,0.08)]',
            )}
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} isOrange={isOrange} />
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

