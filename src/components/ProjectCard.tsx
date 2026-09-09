'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/types';

export const ProjectCard = ({ project, index, active = false, variant = 'default' }: { project: Project; index: number; active?: boolean; variant?: 'default' | 'orange' }) => {
  const isOrange = variant === 'orange';
  return (
    <Link to={`/work/${project.id}`} className="group block py-14 md:py-24">
      <article className="transition-opacity duration-300">
        {project.images?.[0] ? (
          <div className={`relative mb-8 aspect-[16/9] overflow-hidden rounded-[20px] border lg:hidden ${isOrange ? 'border-[#faf4ee]/20 bg-[#faf4ee]/10' : 'border-[rgba(62,26,10,0.08)] bg-[#faf4ee]'}`}>
            <Image src={project.images[0]} alt={`${project.title} interface`} fill sizes="100vw" className="object-contain" priority={index === 0} />
          </div>
        ) : null}

        <div className={`flex items-center justify-between border-t pt-4 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-colors duration-300 ${isOrange ? (active ? 'border-[#faf4ee]' : 'border-[#faf4ee]/20') : (active ? 'border-[#b45309]' : 'border-[rgba(62,26,10,0.12)]')}`}>
          <span className={isOrange ? 'text-[#faf4ee]' : (active ? 'text-[#b45309] font-bold' : 'text-[#b45309]')}>No. {String(index + 1).padStart(2, '0')}</span>
          <span className={isOrange ? 'text-[#faf4ee]/80' : 'text-[#8d6b4f]'}>{Array.isArray(project.category) ? project.category.join(' + ') : project.category}</span>
        </div>

        <h3 className={`mt-7 text-balance text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[1.05] tracking-[-0.01em] md:leading-[0.98] transition-colors ${isOrange ? 'text-[#faf4ee] group-hover:text-[#faf4ee]' : 'text-[#3e1a0a] group-hover:text-[#b45309]'}`}>
          {project.title}
        </h3>
        <p className={`mt-6 max-w-xl text-base leading-relaxed md:text-lg font-normal ${isOrange ? 'text-[#faf4ee]/90' : 'text-[#5a3822]'}`}>{project.description}</p>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className={`mb-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] ${isOrange ? 'text-[#faf4ee]/70' : 'text-[#8d6b4f]'}`}>Outcome</p>
            <p className={`max-w-md font-mono text-xs leading-relaxed ${isOrange ? 'text-[#faf4ee]' : 'text-[#3e1a0a]'}`}>{project.metrics}</p>
          </div>
          <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isOrange ? 'bg-[#faf4ee] text-[#b45309] group-hover:bg-[#3e1a0a] group-hover:text-[#faf4ee]' : 'bg-[#b45309] text-[#faf4ee] group-hover:bg-[#3e1a0a]'}`}>
            Open case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
};
