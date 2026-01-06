"use client";

import Link from "next/link";
import { useState } from "react";

type Pro = {
  id: string;
  name: string;
  role: string;
  rating: string;
  tags: string[];
};

const pros: Pro[] = [
  {
    id: "nate",
    name: "Nate Black",
    role: "Fade · Barba premium",
    rating: "4.8 · 320 avaliações",
    tags: ["Fade baixo", "Navalha quente"],
  },
  {
    id: "bella",
    name: "Bella Costa",
    role: "Color + Styling",
    rating: "4.9 · 280 avaliações",
    tags: ["Colorista", "Finalização"],
  },
  {
    id: "sara",
    name: "Sara Martins",
    role: "Clássico · Taper",
    rating: "4.7 · 190 avaliações",
    tags: ["Tesoura", "Texturização"],
  },
  {
    id: "any",
    name: "Any Souza",
    role: "Design de barba",
    rating: "4.8 · 210 avaliações",
    tags: ["Modelagem", "Aromaterapia"],
  },
];

export default function ProfissionaisPage() {
  const [selected, setSelected] = useState<string>("nate");

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-rose-50 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-20 h-52 w-52 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-10 top-10 h-48 w-48 rounded-full bg-rose-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-4 pb-24 pt-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/servicos"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
              aria-label="Voltar para serviços"
            >
              <span className="text-lg">←</span>
            </Link>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/5">
              <span className="text-base font-semibold tracking-tight">BB</span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Barbergenda
              </p>
              <h1 className="text-lg font-semibold tracking-tight">
                Escolha o profissional
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
                Profissionais
              </p>
              <h2 className="text-lg font-semibold text-neutral-900">
                Quem vai te atender?
              </h2>
            </div>

            <div className="space-y-4">
              {pros.map((pro) => {
                const isSelected = pro.id === selected;
                return (
                  <button
                    key={pro.id}
                    onClick={() => setSelected(pro.id)}
                    className={`group block w-full rounded-2xl border px-4 py-4 text-left transition ${
                      isSelected
                        ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-100"
                        : "border-neutral-200 bg-white/95 hover:border-neutral-400 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-200" />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            <h3 className="text-base font-semibold text-neutral-900">
                              {pro.name}
                            </h3>
                            <p className="text-sm text-neutral-600">
                              {pro.role}
                            </p>
                          </div>
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
                        <p className="text-xs font-semibold text-neutral-500">
                          {pro.rating}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500">
                          {pro.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-neutral-100 px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md px-4 pb-6">
          <div className="mb-3 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-neutral-800 shadow ring-1 ring-black/5">
            <span>Profissional selecionado</span>
            <span className="text-orange-600">
              {pros.find((p) => p.id === selected)?.name ?? "Escolha um"}
            </span>
          </div>
          <Link
            href="/horarios"
            className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:translate-y-0.5"
          >
            Continuar para horários
          </Link>
        </div>
      </div>
    </div>
  );
}
