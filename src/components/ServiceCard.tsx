'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '@/lib/types';
import { cn } from '@/lib/utils';

export const ServiceCard = ({
  service,
  index,
  isOrange = true,
}: {
  service: Service;
  index: number;
  isOrange?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group grid gap-8 py-8 md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-start md:py-10"
    >
      <span
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-semibold',
          isOrange
            ? 'bg-[#faf4ee] text-[#b45309]'
            : 'bg-[#b45309] text-[#faf4ee]',
        )}
      >
        {service.number}
      </span>

      <h3
        className={cn(
          'whitespace-pre-line text-2xl font-semibold leading-tight md:text-3xl',
          isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
        )}
      >
        {service.title}
      </h3>

      <ul className="grid gap-3 sm:grid-cols-2">
        {service.items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-center gap-3 text-sm font-medium',
              isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]',
            )}
          >
            <span
              className={cn(
                'h-px w-3',
                isOrange ? 'bg-[#faf4ee]/60' : 'bg-[#b45309]',
              )}
            />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={`mailto:siddharthkumarrai23@gmail.com?subject=Project Inquiry - ${service.title.replace('\n', ' ')}`}
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors',
          isOrange
            ? 'border-[#faf4ee]/25 bg-[#faf4ee]/10 text-[#faf4ee] hover:bg-[#faf4ee] hover:text-[#b45309]'
            : 'border-[rgba(62,26,10,0.2)] bg-[#faf4ee] text-[#3e1a0a] hover:border-[#b45309] hover:bg-[#b45309] hover:text-[#faf4ee]',
        )}
        aria-label={`Discuss ${service.title.replace('\n', ' ')}`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
};

