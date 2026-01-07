"use client";

import { BrandMark } from "@/components/BrandMark";
import {
  ProfessionalCard,
  type Professional,
} from "@/components/ProfessionalCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const pros: Professional[] = [
  {
    id: "nate",
    name: "Nate Black",
    img: "/professionals/male_professional_1.png",
  },
  {
    id: "bella",
    name: "Bella Costa",
    img: "/professionals/female_professional_1.png",
  },
  {
    id: "sara",
    name: "Sara Martins",
    img: "/professionals/female_professional_2.png",
  },
  {
    id: "claudio",
    name: "Claudio Souza",
    img: "/professionals/male_professional_2.png",
  },
];

export default function ProfissionaisPage() {
  const [selected, setSelected] = useState<string>("");

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
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </Link>
            <BrandMark size={44} tone="light" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Barbergenda
              </p>
              <h1 className="text-lg font-semibold tracking-tight">
                Escolha o profissional
              </h1>
            </div>
          </div>
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
              {pros.map((pro) => (
                <ProfessionalCard
                  key={pro.id}
                  professional={pro}
                  selected={pro.id === selected}
                  onSelect={setSelected}
                />
              ))}
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
            href="/agendar"
            className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:translate-y-0.5"
          >
            Continuar para horários
          </Link>
        </div>
      </div>
    </div>
  );
}
