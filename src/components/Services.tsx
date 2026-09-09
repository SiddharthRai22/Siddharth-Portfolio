'use client';

import React from 'react';
import { SERVICES } from '@/lib/constants';
import { ServiceCard } from './ServiceCard';
import { ParallaxSection } from './ParallaxSection';

export const Services = () => {
  return (
    <section id="services" className="scroll-mt-20 bg-[#b45309] py-24 md:py-36">
      <ParallaxSection className="section-shell">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="system-label system-label--on-orange mb-5 !text-[#faf4ee] [&::before]:!bg-[#faf4ee] [&::before]:!shadow-[0_0_0.7rem_rgba(250,244,238,0.6)]">Capabilities</p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.02em] text-[#faf4ee]">Practice, refined.</h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-[#faf4ee]/80 lg:justify-self-end md:text-lg">Focused engineering engagements for products that need to perform, scale, and feel unmistakably considered.</p>
        </div>

        <div className="rounded-[24px] border border-[#faf4ee]/20 bg-[#faf4ee]/5 p-6 md:p-8 lg:p-10">
          <div className="divide-y divide-[#faf4ee]/15">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};
