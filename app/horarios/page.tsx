"use client";

import { BrandMark } from "@/components/BrandMark";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowLeft, MapPin, Star, Watch } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type Day = {
  label: string;
  date: string;
  times: string[];
};

const days: Day[] = [
  {
    label: "Today",
    date: "Apr 14",
    times: [
      "9-10",
      "10-11",
      "11-12",
      "12-13",
      "13-14",
      "14-15",
      "15-16",
      "16-17",
      "17-18",
      "18-19",
      "19-20",
      "20-21",
    ],
  },
  {
    label: "Tuesday",
    date: "Apr 15",
    times: ["9-10", "11-12", "12-13", "14-15", "15-16", "17-18", "18-19"],
  },
  {
    label: "Wednesday",
    date: "Apr 16",
    times: [
      "11-12",
      "12-13",
      "13-14",
      "15-16",
      "16-17",
      "18-19",
      "19-20",
      "20-21",
    ],
  },
  {
    label: "Friday",
    date: "Apr 18",
    times: ["9-10", "11-12", "12-13", "13-14", "14-15", "18-19", "19-20"],
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
  const [selectedDay, setSelectedDay] = useState<Day>(days[2]);
  const [selectedTime, setSelectedTime] = useState("11-12");

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

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-6">
            <DrawerTrigger asChild>
              <button className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:translate-y-0.5">
                Escolher horário
              </button>
            </DrawerTrigger>
          </div>

          <DrawerContent className="border-none bg-white pb-5 pt-4 shadow-2xl ring-1 ring-black/10 data-[vaul-drawer-direction=bottom]:mx-auto data-[vaul-drawer-direction=bottom]:max-w-md data-[vaul-drawer-direction=bottom]:rounded-t-3xl">
            <DrawerHeader className="px-5 pb-3 pt-0">
              <div className="flex items-center justify-between">
                <DrawerTitle className="text-base font-semibold text-neutral-900">
                  Selecionar horário
                </DrawerTitle>
                <DrawerClose
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-lg font-semibold text-neutral-600"
                  aria-label="Fechar agenda"
                >
                  ×
                </DrawerClose>
              </div>
            </DrawerHeader>

            <div className="space-y-4 border-t border-neutral-100 px-5 pb-3 pt-4">
              <div className="flex gap-3 overflow-x-auto pb-1">
                {days.map((day) => {
                  const isActive = day.label === selectedDay.label;
                  return (
                    <button
                      key={day.label}
                      onClick={() => {
                        setSelectedDay(day);
                        setSelectedTime(day.times[0]);
                      }}
                      className={`flex min-w-24 flex-col items-center rounded-2xl border px-3 py-2 text-xs font-semibold transition ${
                        isActive
                          ? "border-orange-500 bg-orange-50 text-orange-900 shadow shadow-orange-100"
                          : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
                      }`}
                    >
                      <span>{day.label}</span>
                      <span
                        className={
                          isActive ? "text-orange-700" : "text-neutral-500"
                        }
                      >
                        {day.date}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {selectedDay.times.map((time) => {
                  const active = time === selectedTime;
                  return (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                        active
                          ? "border-orange-500 bg-orange-50 text-orange-900 shadow-sm shadow-orange-100"
                          : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
                      }`}
                    >
                      <Watch className="h-4 w-4 text-orange-500" aria-hidden />
                      {time}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                {selectionText}
              </div>
            </div>

            <DrawerFooter className="px-5 pt-0">
              <button className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:translate-y-0.5">
                Confirmar agendamento
              </button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
