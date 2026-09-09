'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '@/lib/types';

export const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group grid gap-8 py-8 md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-start md:py-10"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#faf4ee] font-mono text-xs font-semibold text-[#b45309]">{service.number}</span>

      <h3 className="whitespace-pre-line text-2xl font-semibold leading-tight text-[#faf4ee] md:text-3xl">
        {service.title}
      </h3>

      <ul className="grid gap-3 sm:grid-cols-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm text-[#faf4ee]/80">
            <span className="h-px w-3 bg-[#faf4ee]/40" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={`mailto:siddharthkumarrai23@gmail.com?subject=Project Inquiry - ${service.title.replace('\n', ' ')}`}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#faf4ee]/25 bg-[#faf4ee]/10 text-[#faf4ee] transition-colors hover:bg-[#faf4ee] hover:text-[#b45309]"
        aria-label={`Discuss ${service.title.replace('\n', ' ')}`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
};
