import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Contact } from '@/components/Contact';
import { ProjectGallery } from '@/components/ProjectGallery';
import { PROJECTS } from '@/lib/constants';
import { Image } from '@/components/Image';

export const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((entry) => entry.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Siddharth Kumar Rai`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7ede0] p-6 text-center text-[#3e1a0a]">
        <h1 className="text-4xl font-semibold">Case study not found</h1>
        <p className="mt-4 text-base text-[#6d4a32]">The project you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#b45309] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#faf4ee] transition-colors hover:bg-[#3e1a0a]"
        >
          <ArrowLeft className="h-4 w-4" /> Return to home
        </Link>
      </div>
    );
  }

  const categories = Array.isArray(project.category) ? project.category : [project.category];

  return (
    <div className="min-h-screen bg-[#f7ede0] font-sans text-[#3e1a0a]">
      <Navigation />

      <main>
        <section className="relative min-h-[80svh] overflow-hidden border-b border-[rgba(62,26,10,0.08)]">
          {project.images?.[0] ? (
            <Image
              src={project.images[0]}
              alt={`${project.title} product interface`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,244,238,0.96)_0%,rgba(250,244,238,0.86)_42%,rgba(250,244,238,0.18)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7ede0] via-transparent to-[#faf4ee]/40" />

          <div className="section-shell relative z-10 flex min-h-[80svh] flex-col justify-between pb-12 pt-24 md:pb-16 md:pt-28">
            <Link
              to="/#work"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(62,26,10,0.12)] bg-[#faf4ee] px-5 py-2.5 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-[#6d4a32] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>

            <div className="max-w-5xl py-10">
              <div className="mb-7 flex flex-wrap items-center gap-3 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-[#b45309]">
                <span>Case study / {project.id.padStart(2, '0')}</span>
                <span className="text-[#8d6b4f]">•</span>
                <span>{categories.join(' + ')}</span>
              </div>
              <h1 className="text-balance text-[clamp(3.2rem,9vw,8.5rem)] font-semibold leading-[1.05] tracking-[-0.01em] md:leading-[0.98] text-[#3e1a0a]">
                {project.title}
              </h1>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-[#6d4a32] md:text-[1.35rem]">
                {project.fullDescription || project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {project.previewUrl ? (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#b45309] px-6 text-sm font-semibold text-[#faf4ee] transition-colors hover:bg-[#3e1a0a]"
                  >
                    View live <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : null}
                {project.gitUrl ? (
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-[rgba(62,26,10,0.15)] bg-[#faf4ee] px-6 text-sm font-semibold text-[#3e1a0a] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
                  >
                    GitHub <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Overview Section */}
        {project.overviewData ? (
          <section className="bg-[#f7ede0] py-12 md:py-20">
            <div className="section-shell max-w-5xl">
              <div className="rounded-[24px] border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] p-7 shadow-[0_4px_24px_-6px_rgba(62,26,10,0.04)] sm:rounded-[32px] sm:p-12 md:p-16 lg:p-20">
                <div className="mb-10 sm:mb-14">
                  <h2 className="flex items-center gap-3 font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-tight tracking-[-0.01em] text-[#3e1a0a]">
                    <svg
                      className="h-8 w-8 shrink-0 sm:h-10 sm:w-10"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2C12.5 7.5 16.5 11.5 22 12C16.5 12.5 12.5 16.5 12 22C11.5 16.5 7.5 12.5 2 12C7.5 11.5 11.5 7.5 12 2Z"
                        fill="url(#sparkle-grad-1)"
                      />
                      <path
                        d="M24 16C24.3 19.7 27 22.4 30.7 22.7C27 23 24.3 25.7 24 29.4C23.7 25.7 21 23 17.3 22.7C21 22.4 23.7 19.7 24 16Z"
                        fill="url(#sparkle-grad-1)"
                      />
                      <defs>
                        <linearGradient id="sparkle-grad-1" x1="2" y1="2" x2="30.7" y2="29.4" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#f6ad55" />
                          <stop offset="1" stopColor="#dd6b20" />
                        </linearGradient>
                      </defs>
                    </svg>
                    Overview
                  </h2>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {project.overviewData.role && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Role
                      </span>
                      <div className="text-base font-semibold text-[#3e1a0a] sm:text-lg">
                        {project.overviewData.role}
                      </div>
                    </div>
                  )}

                  {project.overviewData.platform && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Platform
                      </span>
                      <div className="text-base text-[#3e1a0a] sm:text-lg">
                        {project.overviewData.platform}
                      </div>
                    </div>
                  )}

                  {project.overviewData.timeline && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Timeline
                      </span>
                      <div className="text-base text-[#3e1a0a] sm:text-lg">
                        {project.overviewData.timeline}
                      </div>
                    </div>
                  )}

                  {project.overviewData.technology && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Technology
                      </span>
                      <div className="text-base text-[#3e1a0a] sm:text-lg">
                        {Array.isArray(project.overviewData.technology)
                          ? project.overviewData.technology.join(', ')
                          : project.overviewData.technology}
                      </div>
                    </div>
                  )}

                  {project.overviewData.status && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Status
                      </span>
                      <div className="text-base text-[#3e1a0a] sm:text-lg">
                        {project.overviewData.status}
                      </div>
                    </div>
                  )}

                  {project.overviewData.deliverables && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Deliverables
                      </span>
                      <div className="text-base leading-relaxed text-[#3e1a0a] sm:text-lg">
                        {Array.isArray(project.overviewData.deliverables)
                          ? project.overviewData.deliverables.join(', ')
                          : project.overviewData.deliverables}
                      </div>
                    </div>
                  )}

                  {project.overviewData.features && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Features
                      </span>
                      <div className="text-base leading-relaxed text-[#3e1a0a] sm:text-lg">
                        {Array.isArray(project.overviewData.features)
                          ? project.overviewData.features.join(', ')
                          : project.overviewData.features}
                      </div>
                    </div>
                  )}

                  {project.overviewData.overview && (
                    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-[160px_1fr] md:gap-8 lg:grid-cols-[190px_1fr]">
                      <span className="pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8d6b4f] sm:text-[0.75rem]">
                        Overview
                      </span>
                      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-[#5a3822] sm:text-[1.05rem]">
                        {project.overviewData.overview.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {(project.galleryImages && project.galleryImages.length > 0) || (project.images && project.images.length > 1) ? (
          <section className="border-t border-[rgba(62,26,10,0.08)] bg-[#faf4ee] py-16 md:py-20">
            <div className="section-shell">
              <div className="mb-10 sm:mb-12">
                <h2 className="font-serif text-[clamp(2.25rem,5vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.01em] text-[#3e1a0a]">
                  ✨ Highlights
                </h2>
              </div>
              <ProjectGallery
                images={project.galleryImages ?? project.images!.slice(1)}
                title={project.title}
              />
            </div>
          </section>
        ) : null}
      </main>

      <Contact />
    </div>
  );
};

export default CaseStudyPage;

