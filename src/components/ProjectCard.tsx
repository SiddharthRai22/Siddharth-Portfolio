'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/Image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/lib/types';

export const ProjectCard = ({ project, index, active = false, variant = 'default' }: { project: Project; index: number; active?: boolean; variant?: 'default' | 'orange' }) => {
  const isOrange = variant === 'orange';
  return (
    <Link to={`/work/${project.id}`} className="group block py-14 md:py-24">
      <article className="transition-opacity duration-300">
        {project.images?.[0] ? (
          <div className={`relative mb-8 aspect-[16/9] overflow-hidden rounded-[20px] border lg:hidden ${isOrange ? 'border-[#faf4ee]/20 bg-[#faf4ee]/10' : 'border-[rgba(62,26,10,0.08)] bg-[#faf4ee]'}`}>
            <Image src={project.images[0]} alt={`${project.title} interface`} fill sizes="100vw" className="h-full w-full object-cover object-top" priority={index === 0} />
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
          <span className={`group/btn inline-flex items-center gap-2 rounded-full py-1.5 pl-2 pr-4.5 text-sm font-medium shadow-sm transition-all duration-300 ${
            isOrange
              ? 'bg-[#faf4ee] text-[#b45309] hover:bg-[#3e1a0a] hover:text-[#faf4ee]'
              : 'bg-[#b45309] text-[#faf4ee] hover:bg-[#3e1a0a]'
          }`}>
            <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
              <span className={`h-2 w-2 rounded-full translate-x-0.5 transition-all duration-300 group-hover/btn:scale-0 group-hover/btn:opacity-0 ${
                isOrange ? 'bg-[#b45309]' : 'bg-[#faf4ee]'
              }`} />
              <span className={`absolute inset-0 flex items-center justify-center rounded-full opacity-0 scale-50 transition-all duration-300 group-hover/btn:scale-100 group-hover/btn:opacity-100 shadow-sm ${
                isOrange ? 'bg-[#faf4ee] text-[#3e1a0a]' : 'bg-[#faf4ee] text-[#b45309]'
              }`}>
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </span>
            </span>
            <span className="tracking-tight whitespace-nowrap text-[0.9rem]">view case study</span>
          </span>
        </div>
      </article>
    </Link>
  );
};
