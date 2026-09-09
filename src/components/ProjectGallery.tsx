'use client';

import { useEffect, useRef, useState } from 'react';
import { Image, StaticImageData } from '@/components/Image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

type GalleryImage = string | StaticImageData;

export const ProjectGallery = ({ images, title }: { images: GalleryImage[]; title: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? null : (index + 1) % images.length);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={typeof image === 'string' ? image : image.src}
            type="button"
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
            className="group relative aspect-[16/9] overflow-hidden rounded-[20px] border border-[rgba(62,26,10,0.08)] bg-[#faf4ee] text-left"
            aria-label={`Expand ${title} interface view ${index + 1}`}
          >
            <Image src={image} alt={`${title} interface view ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#3e1a0a]/85 text-[#faf4ee] backdrop-blur-md transition-colors group-hover:bg-[#b45309]">
              <Expand className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`${title} image viewer`}
        onClose={() => {
          setActiveIndex(null);
          triggerRef.current?.focus();
        }}
        onCancel={() => setActiveIndex(null)}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null);
        }}
        className="fixed inset-0 m-0 hidden h-full max-h-none w-full max-w-none items-center justify-center bg-[#1a0e06]/95 p-4 backdrop:bg-[#1a0e06]/95 open:flex md:p-10"
      >
        {activeIndex !== null ? (
          <>
            <div className="relative h-[min(82vh,56rem)] w-full max-w-7xl">
              <Image src={images[activeIndex]} alt={`${title} expanded interface view ${activeIndex + 1}`} fill sizes="95vw" className="object-contain" priority />
            </div>

            <button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-[#faf4ee]/20 bg-black/50 text-[#faf4ee] hover:bg-[#faf4ee] hover:text-black md:right-8 md:top-8" aria-label="Close image viewer">
              <X className="h-5 w-5" />
            </button>

            {images.length > 1 ? (
              <>
                <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)} className="absolute bottom-5 left-4 flex h-11 w-11 items-center justify-center border border-[#faf4ee]/20 bg-black/50 text-[#faf4ee] hover:bg-[#faf4ee] hover:text-black md:bottom-auto md:left-8 md:top-1/2 md:-translate-y-1/2" aria-label="Previous image">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % images.length)} className="absolute bottom-5 right-4 flex h-11 w-11 items-center justify-center border border-[#faf4ee]/20 bg-black/50 text-[#faf4ee] hover:bg-[#faf4ee] hover:text-black md:bottom-auto md:right-8 md:top-1/2 md:-translate-y-1/2" aria-label="Next image">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}

            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#faf4ee]/60">
              {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </p>
          </>
        ) : null}
      </dialog>
    </>
  );
};