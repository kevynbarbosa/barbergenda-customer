"use client";

import { BrandMark } from "@/components/BrandMark";
import { ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CadastroAgendamentoPage() {
  const [phone, setPhone] = useState("");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-orange-50 via-white to-amber-50 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-4 top-24 h-48 w-48 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-10 top-10 h-44 w-44 rounded-full bg-amber-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-4 pb-16 pt-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/agendar"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5"
              aria-label="Voltar para agendar"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden />
            </Link>
            <BrandMark size={44} tone="light" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                Barbergenda
              </p>
              <h1 className="text-lg font-semibold tracking-tight">
                Identificação rápida
              </h1>
            </div>
          </div>
        </header>

        <main className="mt-6 space-y-6">
          <section className="space-y-4 rounded-3xl border border-orange-100 bg-white/90 p-5 shadow-sm shadow-orange-100/50">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Cadastro
                </p>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Informe seu celular
                </h2>
                <p className="text-sm text-neutral-600">
                  Usaremos o número como sua chave primária.
                </p>
              </div>
              <div className="rounded-2xl bg-orange-50 p-3 text-orange-700">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
            </div>

            <label className="space-y-2 text-sm font-semibold text-neutral-700">
              Celular
              <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 shadow-sm focus-within:border-neutral-900">
                <span className="text-xs font-semibold text-neutral-400">
                  +55
                </span>
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-neutral-900 outline-none placeholder:text-neutral-400"
                  aria-label="Celular"
                />
              </div>
            </label>

            <p className="text-xs text-neutral-500">
              Enviaremos a confirmação do agendamento para este número.
            </p>
          </section>

          <Link
            href="/agendamento/confirmacao"
            className="flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-black/15 transition hover:translate-y-0.5"
          >
            Continuar
          </Link>
        </main>
      </div>
    </div>
  );
}
