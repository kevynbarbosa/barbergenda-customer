"use client";

import { BrandMark } from "@/components/BrandMark";
import { ScheduleDrawer, type DayOption } from "@/components/ScheduleDrawer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

const days: DayOption[] = [
  {
    label: "Today",
    date: "Apr 14",
    times: ["10h", "11h", "12h", "21h"],
  },
  {
    label: "Tuesday",
    date: "Apr 15",
    times: ["10h", "11h", "12h", "21h"],
  },
  {
    label: "Wednesday",
    date: "Apr 16",
    times: ["10h", "11h", "12h", "21h"],
  },
  {
    label: "Friday",
    date: "Apr 18",
    times: ["10h", "11h", "12h", "21h"],
  },
];

const gallery = [
  { id: "barba-1", src: "/servicos/barba.png", alt: "Barba" },
  { id: "platinado-1", src: "/servicos/platinado.png", alt: "Platinado" },
  { id: "kids-1", src: "/servicos/kids.png", alt: "Corte infantil" },
  {
    id: "detalhe-1",
    src: "/professionals/male_professional_2.png",
    alt: "Detalhe",
  },
  { id: "barba-2", src: "/servicos/barba.png", alt: "Barba em close" },
  {
    id: "platinado-2",
    src: "/servicos/platinado.png",
    alt: "Platinado finalizado",
  },
  { id: "kids-2", src: "/servicos/kids.png", alt: "Corte infantil fresh" },
  {
    id: "detalhe-2",
    src: "/professionals/male_professional_2.png",
    alt: "Detalhe da lâmina",
  },
  { id: "barba-3", src: "/servicos/barba.png", alt: "Barba alinhada" },
];

const professional = {
  name: "Nate Black",
  img: "/professionals/male_professional_1.png",
  rating: "4.9 · 320 avaliações",
  specialty: "Fade, barba de precisão e finalização clássica",
};

export default function AgendamentoPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(
    null
  );
  const [selectedDay, setSelectedDay] = useState<DayOption>(days[2]);
  const [selectedTime, setSelectedTime] = useState(days[2].times[0]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const selectionText = useMemo(
    () => `${selectedDay.label}, ${selectedDay.date} · ${selectedTime}`,
    [selectedDay, selectedTime]
  );

  const activeImage =
    activeImageIndex === null ? null : gallery[activeImageIndex];

  const handlePrevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + gallery.length) % gallery.length
    );
  };

  const handleNextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % gallery.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
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

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-orange-50 via-white to-rose-50 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-rose-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-4 pb-28 pt-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/profissionais"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
              aria-label="Voltar para profissionais"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </Link>
            <BrandMark size={44} tone="light" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Barbergenda
              </p>
              <h1 className="text-lg font-semibold tracking-tight">
                Detalhes do profissional
              </h1>
            </div>
          </div>
        </header>

        <main className="mt-6 space-y-6">
          <section className="space-y-4">
            <div className="relative -mx-4 overflow-hidden rounded-[28px] border border-orange-100 bg-white/90 shadow-sm shadow-orange-100/40">
              <div className="aspect-[4/3] w-full bg-neutral-200">
                <img
                  src={professional.img}
                  alt={professional.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-neutral-900">
                {professional.name}
              </h2>
              <p className="text-sm text-neutral-600">
                {professional.specialty}
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Galeria
                </p>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Trabalhos recentes
                </h3>
              </div>
            </div>
            <div className="-mx-4 grid grid-cols-3 gap-2 px-4">
              {gallery.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="group aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </section>
        </main>

        {activeImage ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada"
            onClick={() => setActiveImageIndex(null)}
          >
            <div
              className="relative w-full max-w-md"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
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
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        ) : null}

        <ScheduleDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          days={days}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          onSelectDay={setSelectedDay}
          onSelectTime={setSelectedTime}
          selectionText={selectionText}
        />
      </div>
    </div>
  );
}
