"use client";

import { BrandMark } from "@/components/BrandMark";
import { ScheduleDrawer, type DayOption } from "@/components/ScheduleDrawer";
import { WorkGallery, type WorkGalleryItem } from "@/components/WorkGallery";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

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

const gallery: WorkGalleryItem[] = [
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
  const [selectedDay, setSelectedDay] = useState<DayOption>(days[2]);
  const [selectedTime, setSelectedTime] = useState(days[2].times[0]);

  const selectionText = useMemo(
    () => `${selectedDay.label}, ${selectedDay.date} · ${selectedTime}`,
    [selectedDay, selectedTime]
  );

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

          <WorkGallery items={gallery} />
        </main>

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
