"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Service = {
  id: string;
  name: string;
  desc: string;
  duration: string;
  price: string;
  badge?: string;
};

const services: Service[] = [
  {
    id: "corte-classico",
    name: "Corte clássico + finalização",
    desc: "Consultoria rápida, tesoura/máquina e modelagem com produto premium.",
    duration: "45 min",
    price: "R$ 90",
    badge: "Mais escolhido",
  },
  {
    id: "fade",
    name: "Fade / Taper + Styling",
    desc: "Laterais na zero ou baixo, degradê suave e acabamento detalhado.",
    duration: "50 min",
    price: "R$ 100",
  },
  {
    id: "barba",
    name: "Barba alinhada",
    desc: "Navalha quente, toalha aromática e modelagem conforme seu rosto.",
    duration: "35 min",
    price: "R$ 75",
  },
  {
    id: "combo",
    name: "Combo Corte + Barba",
    desc: "Experiência completa com bebida cortesia e registro das preferências.",
    duration: "75 min",
    price: "R$ 150",
    badge: "Combo",
  },
  {
    id: "kids",
    name: "Corte Kids",
    desc: "Ritmo leve, atenção extra e finalização com zero pressa.",
    duration: "40 min",
    price: "R$ 80",
  },
];

export default function ServicosPage() {
  const [selected, setSelected] = useState<string[]>(["corte-classico"]);

  const total = useMemo(() => {
    return services
      .filter((s) => selected.includes(s.id))
      .reduce((sum, item) => {
        const numeric = Number(item.price.replace(/[^\d]/g, ""));
        return sum + (Number.isNaN(numeric) ? 0 : numeric);
      }, 0);
  }, [selected]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-rose-50 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-rose-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-4 pb-28 pt-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/5">
              <span className="text-base font-semibold tracking-tight">BB</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Barbergenda
              </p>
              <h1 className="text-lg font-semibold tracking-tight">
                Escolha o serviço
              </h1>
            </div>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <span className="text-lg">⌕</span>
          </button>
        </header>

        <main className="mt-6 space-y-6">
          <section className="space-y-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Serviços
              </p>
              <h2 className="text-lg font-semibold text-neutral-900">
                Escolha o que vai fazer hoje
              </h2>
            </div>

            <div className="space-y-4">
              {services.map((service) => {
                const isSelected = selected.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelected((prev) =>
                        prev.includes(service.id)
                          ? prev.filter((id) => id !== service.id)
                          : [...prev, service.id]
                      );
                    }}
                    className={`group block w-full rounded-2xl border px-4 py-4 text-left transition ${
                      isSelected
                        ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-100"
                        : "border-neutral-200 bg-white/95 hover:border-neutral-400 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-200" />
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-neutral-900">
                            {service.name}
                          </h3>
                          {service.badge ? (
                            <span className="rounded-full bg-neutral-900 px-2 py-1 text-[11px] font-semibold text-white">
                              {service.badge}
                            </span>
                          ) : null}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500">
                          <span className="rounded-full bg-neutral-100 px-2 py-1">
                            {service.duration}
                          </span>
                          <span className="rounded-full bg-neutral-100 px-2 py-1">
                            Shampoo &amp; finalização inclusos
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 rounded-xl bg-white/70 px-3 py-2 text-sm text-neutral-600">
                      {service.desc}
                    </div>
                    <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-base font-semibold text-neutral-900">
                        {service.price}
                      </span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border text-sm transition ${
                          isSelected
                            ? "border-orange-500 bg-orange-500 text-white"
                            : "border-neutral-300 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-6">
          <div className="mb-3 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-neutral-800 shadow ring-1 ring-black/5">
            <span>{selected.length} serviço(s) selecionado(s)</span>
            <span className="text-orange-600">Total estimado: R$ {total}</span>
          </div>
          <Link
            href="/agendamentos"
            className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:translate-y-0.5"
          >
            Continuar para horários
          </Link>
        </div>
      </div>
    </div>
  );
}
