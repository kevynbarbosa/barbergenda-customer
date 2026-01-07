"use client";

import { useEffect, useRef, useState } from "react";
import type { TouchEvent } from "react";

export type WorkGalleryItem = {
  id: string;
  src: string;
  alt: string;
};

type WorkGalleryProps = {
  items: WorkGalleryItem[];
  title?: string;
  eyebrow?: string;
};

export function WorkGallery({
  items,
  title = "Trabalhos recentes",
  eyebrow = "Galeria",
}: WorkGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const activeImage = activeIndex === null ? null : items[activeIndex];

  const handlePrevImage = () => {
    if (activeIndex === null || items.length === 0) return;
    setDirection("prev");
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNextImage = () => {
    if (activeIndex === null || items.length === 0) return;
    setDirection("next");
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (deltaX > threshold) {
      handleNextImage();
    } else if (deltaX < -threshold) {
      handlePrevImage();
    }
  };

  if (items.length === 0) {
    return null;
  }

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }
      if (event.key === "ArrowRight") {
        handleNextImage();
      }
      if (event.key === "ArrowLeft") {
        handlePrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length]);

  return (
    <section className="space-y-3" aria-label="Galeria de trabalhos">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            {eyebrow}
          </p>
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        </div>
      </div>

      <div className="-mx-4 grid grid-cols-3 gap-2 px-4">
        {items.map((item, index) => (
          <figure key={item.id} className="m-0">
            <button
              type="button"
              onClick={() => {
                if (activeIndex !== null) {
                  setDirection(index > activeIndex ? "next" : "prev");
                } else {
                  setDirection("next");
                }
                setActiveIndex(index);
              }}
              className="group aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              aria-label={`Ver imagem: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          </figure>
        ))}
      </div>

        {activeImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
            role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          onClick={() => setActiveIndex(null)}
        >
            <div
              className="relative w-full max-w-md touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={(event) => event.stopPropagation()}
            >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-neutral-700 shadow"
              aria-label="Fechar imagem ampliada"
            >
              ×
            </button>
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-neutral-700 shadow md:flex"
              aria-label="Imagem anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg font-semibold text-neutral-700 shadow md:flex"
              aria-label="Próxima imagem"
            >
              ›
            </button>
              <img
                key={activeImage.id}
                src={activeImage.src}
                alt={activeImage.alt}
                className={`max-h-[80vh] w-full rounded-3xl object-cover shadow-2xl animate-in fade-in-0 duration-200 ${
                  direction === "next"
                    ? "slide-in-from-right-6"
                    : "slide-in-from-left-6"
                }`}
              />
              <p className="mt-3 text-center text-xs text-white/80">
                {activeImage.alt}
              </p>
            </div>
          </div>
        ) : null}
    </section>
  );
}
