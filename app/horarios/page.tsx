"use client";

import { BrandMark } from "@/components/BrandMark";
import { ScheduleDrawer, type DayOption } from "@/components/ScheduleDrawer";
import { ArrowLeft, MapPin, Star } from "lucide-react";
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

const gallery = [
  { src: "/servicos/barba.png", alt: "Barba" },
  { src: "/servicos/platinado.png", alt: "Platinado" },
  { src: "/servicos/kids.png", alt: "Corte infantil" },
  { src: "/professionals/male_professional_2.png", alt: "Detalhe" },
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
          <section className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-white/90 p-4 shadow-sm shadow-orange-100/40">
            <div className="h-14 w-14 overflow-hidden rounded-2xl bg-neutral-200">
              <img
                src={professional.img}
                alt={professional.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <h2 className="text-base font-semibold text-neutral-900">
                {professional.name}
              </h2>
              <p className="text-sm text-neutral-600">
                {professional.specialty}
              </p>
              <p className="flex items-center gap-1 text-xs font-semibold text-neutral-500">
                <Star className="h-4 w-4 text-orange-500" aria-hidden />
                {professional.rating}
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
            <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
              {gallery.map((item) => (
                <div
                  key={item.alt}
                  className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3 rounded-2xl border border-orange-100 bg-white/90 p-4 shadow-sm shadow-orange-100/40">
            <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
              <MapPin className="h-4 w-4 text-orange-500" aria-hidden />
              Unidade Jardim Europa
            </div>
            <div className="h-28 w-full overflow-hidden rounded-xl border border-neutral-100 bg-neutral-100" />
            <p className="text-sm text-neutral-600">
              Atendimento de segunda a sábado, 9h às 22h. Av. Principal, 123 -
              Sala 04.
            </p>
            <button className="flex w-fit items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white shadow transition hover:-translate-y-0.5">
              Ver no mapa
            </button>
          </section>

          <section className="space-y-3 rounded-2xl border border-orange-100 bg-white/90 p-4 shadow-sm shadow-orange-100/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Horários
                </p>
                <h3 className="text-lg font-semibold text-neutral-900">
                  Escolha data e hora
                </h3>
                <p className="text-sm text-neutral-600">
                  Selecione o melhor horário para você.
                </p>
              </div>
              <button
                onClick={() => setDrawerOpen(true)}
                className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition hover:-translate-y-0.5"
              >
                Abrir agenda
              </button>
            </div>
            <div className="rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
              {selectionText}
            </div>
          </section>
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
