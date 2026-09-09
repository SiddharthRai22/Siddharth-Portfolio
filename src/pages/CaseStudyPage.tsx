import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Contact } from '@/components/Contact';
import { ProjectGallery } from '@/components/ProjectGallery';
import { PROJECTS } from '@/lib/constants';
import { Image } from '@/components/Image';

export const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
  const chapters = [
    { number: '01', label: 'Challenge', title: 'The constraint', content: project.challenge },
    { number: '02', label: 'System', title: 'The response', content: project.solution },
    { number: '03', label: 'Outcome', title: 'The result', content: project.outcome },
  ];

  return (
    <div className="min-h-screen bg-[#f7ede0] text-[#3e1a0a]">
      <Navigation />

      <main>
        <section className="relative min-h-[86svh] overflow-hidden border-b border-[rgba(62,26,10,0.08)]">
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

          <div className="section-shell relative z-10 flex min-h-[86svh] flex-col justify-between pb-6 pt-24 md:pb-8 md:pt-28">
            <Link
              to="/#work"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(62,26,10,0.12)] bg-[#faf4ee] px-5 py-2.5 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-[#6d4a32] transition-colors hover:border-[#b45309] hover:text-[#b45309]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to works
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
                    View source <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-[rgba(62,26,10,0.08)] pt-5 font-mono text-[0.70rem] uppercase tracking-[0.12em] text-[#8d6b4f] md:grid-cols-4 md:gap-4">
              <span className="whitespace-nowrap text-center">Collection</span>
              <span className="whitespace-nowrap text-center">{categories.join(' / ')}</span>
              <span className="whitespace-nowrap text-center">Status / Deployed</span>
              <span className="whitespace-nowrap text-center text-[#b45309]">Case live</span>
            </div>
          </div>
        </section>

        <section className="border-b border-[rgba(62,26,10,0.08)] bg-[#faf4ee] py-14 md:py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="system-label !text-[#8d6b4f] [&::before]:!bg-[#b45309] [&::before]:!shadow-[0_0_0.7rem_rgba(180,83,9,0.38)]">
                Project detail
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[20px] border border-[rgba(62,26,10,0.08)] bg-[#f7ede0] p-6">
                <p className="font-mono text-[0.70rem] uppercase tracking-[0.12em] text-[#8d6b4f]">Outcome</p>
                <p className="mt-5 text-[1.7rem] leading-snug text-[#b45309]">{project.metrics}</p>
              </div>
              <div className="rounded-[20px] border border-[rgba(62,26,10,0.08)] bg-[#f7ede0] p-6">
                <p className="font-mono text-[0.70rem] uppercase tracking-[0.12em] text-[#8d6b4f]">Technology</p>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-[#6d4a32]">{project.tech.join(' / ')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7ede0] py-16 md:py-24">
          <div className="section-shell">
            {chapters.map((chapter) => (
              <article
                key={chapter.number}
                className="grid gap-6 border-t border-[rgba(62,26,10,0.08)] py-8 lg:grid-cols-[0.45fr_0.75fr_1.3fr] lg:gap-12 lg:py-14"
              >
                <span className="font-mono text-sm text-[#b45309]">{chapter.number}</span>
                <div>
                  <p className="font-mono text-[0.70rem] uppercase tracking-[0.14em] text-[#8d6b4f]">{chapter.label}</p>
                  <h2 className="mt-4 text-[2.1rem] font-semibold text-[#3e1a0a]">{chapter.title}</h2>
                </div>
                <p className="text-[1.15rem] leading-relaxed text-[#6d4a32] md:text-[1.35rem]">{chapter.content}</p>
              </article>
            ))}
          </div>
        </section>

        {project.images && project.images.length > 1 ? (
          <section className="border-y border-[rgba(62,26,10,0.08)] bg-[#faf4ee] py-16 md:py-20">
            <div className="section-shell">
              <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="system-label mb-5 !text-[#8d6b4f] [&::before]:!bg-[#b45309] [&::before]:!shadow-[0_0_0.7rem_rgba(180,83,9,0.38)]">
                    Interface collection
                  </p>
                  <h2 className="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-[#3e1a0a]">
                    System views.
                  </h2>
                </div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#8d6b4f]">Select to inspect</p>
              </div>
              <ProjectGallery images={project.images.slice(1)} title={project.title} />
            </div>
          </section>
        ) : null}

        <section className="bg-[#f7ede0] py-16 md:py-20">
          <div className="section-shell flex flex-col items-start justify-between gap-10 rounded-[24px] border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] px-6 py-8 md:flex-row md:items-center md:px-10">
            <div>
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-[#b45309]">End of case study</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#3e1a0a] md:text-5xl">Explore the next work.</h2>
            </div>
            <Link
              to="/#work"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#b45309] px-6 text-sm font-semibold text-[#faf4ee] transition-colors hover:bg-[#3e1a0a]"
            >
              Return to work{' '}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default CaseStudyPage;
