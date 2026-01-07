"use client";

import { BrandMark } from "@/components/BrandMark";
import { ServiceCard, type Service } from "@/components/ServiceCard";
import Link from "next/link";
import { useMemo, useState } from "react";

const services: Service[] = [
  {
    id: "corte-classico",
    name: "Corte clássico + finalização",
    desc: "Consultoria rápida, tesoura/máquina e modelagem com produto premium.",
    duration: "45 min",
    price: "R$ 90",
    badge: "Mais escolhido",
    img: "/servicos/corte.png",
  },
  {
    id: "fade",
    name: "Fade / Taper + Styling",
    desc: "Laterais na zero ou baixo, degradê suave e acabamento detalhado.",
    duration: "50 min",
    price: "R$ 100",
    img: "/servicos/platinado.png",
  },
  {
    id: "barba",
    name: "Barba alinhada",
    desc: "Navalha quente, toalha aromática e modelagem conforme seu rosto.",
    duration: "35 min",
    price: "R$ 75",
    img: "/servicos/barba.png",
  },
  {
    id: "combo",
    name: "Combo Corte + Barba",
    desc: "Experiência completa com bebida cortesia e registro das preferências.",
    duration: "75 min",
    price: "R$ 150",
    badge: "Combo",
    img: "/servicos/combo.png",
  },
  {
    id: "kids",
    name: "Corte Kids",
    desc: "Ritmo leve, atenção extra e finalização com zero pressa.",
    duration: "40 min",
    price: "R$ 80",
    img: "/servicos/kids.png",
  },
];

export default function ServicosPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const total = useMemo(() => {
    return services
      .filter((s) => selected.includes(s.id))
      .reduce((sum, item) => {
        const numeric = Number(item.price.replace(/[^\d]/g, ""));
        return sum + (Number.isNaN(numeric) ? 0 : numeric);
      }, 0);
  }, [selected]);

  return (
    <div className="relative min-h-screen bg-linear-to-b from-orange-50 via-white to-rose-50 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-rose-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-4 pb-28 pt-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
              aria-label="Voltar para início"
            >
              <span className="text-lg">←</span>
            </Link>
            <BrandMark size={44} tone="light" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Barbergenda
              </p>
              <h1 className="text-lg font-semibold tracking-tight">
                Escolha o serviço
              </h1>
            </div>
          </div>
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
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  selected={selected.includes(service.id)}
                  onToggle={(id) =>
                    setSelected((prev) =>
                      prev.includes(id)
                        ? prev.filter((itemId) => itemId !== id)
                        : [...prev, id]
                    )
                  }
                />
              ))}
            </div>
          </section>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-6">
          <div className="mb-3 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-neutral-800 shadow ring-1 ring-black/5">
            <span>{selected.length} serviço(s) selecionado(s)</span>
            <span className="text-orange-600">Total estimado: R$ {total}</span>
          </div>
          <Link
            href="/profissionais"
            className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:translate-y-0.5"
          >
            Escolher profissional
          </Link>
        </div>
      </div>
    </div>
  );
}
