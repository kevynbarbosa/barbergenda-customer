"use client";

import { BrandMark } from "@/components/BrandMark";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const booking = {
  id: "AGD-2049",
  customer: "Rafael Costa",
  service: "Corte + Barba Premium",
  professional: "Nate Black",
  date: "Quarta, 16 Abril",
  time: "12h",
  duration: "60 min",
  price: "R$ 120",
  location: "Rua Bela Vista, 182 · Centro",
  payment: "Cartão na unidade",
};

const ratingCopy = [
  "Muito difícil",
  "Difícil",
  "Ok",
  "Fácil",
  "Muito fácil",
];

export default function ConfirmacaoAgendamentoPage() {
  const [rating, setRating] = useState(0);

  const ratingLabel = useMemo(() => {
    if (rating === 0) {
      return "Sem estrelas";
    }
    return `${rating} estrela${rating > 1 ? "s" : ""} · ${ratingCopy[rating - 1]}`;
  }, [rating]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-orange-50 via-white to-amber-50 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-52 w-52 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-10 top-6 h-48 w-48 rounded-full bg-amber-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-4 pb-20 pt-8">
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
                Agendamento confirmado
              </h1>
            </div>
          </div>
        </header>

        <main className="mt-6 space-y-6">
          <section className="space-y-3 rounded-3xl border border-orange-100 bg-white/90 p-5 shadow-sm shadow-orange-100/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Reserva
                </p>
                <p className="text-lg font-semibold text-neutral-900">
                  {booking.service}
                </p>
              </div>
              <div className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                {booking.id}
              </div>
            </div>
            <div className="grid gap-3 rounded-2xl border border-neutral-100 bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Profissional</span>
                <span className="font-semibold text-neutral-900">
                  {booking.professional}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Cliente</span>
                <span className="font-semibold text-neutral-900">
                  {booking.customer}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Data</span>
                <span className="font-semibold text-neutral-900">
                  {booking.date}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Horário</span>
                <span className="font-semibold text-neutral-900">
                  {booking.time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Duração</span>
                <span className="font-semibold text-neutral-900">
                  {booking.duration}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Valor</span>
                <span className="font-semibold text-neutral-900">
                  {booking.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Pagamento</span>
                <span className="font-semibold text-neutral-900">
                  {booking.payment}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-neutral-500">Local</span>
                <span className="text-right font-semibold text-neutral-900">
                  {booking.location}
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-3xl border border-neutral-100 bg-white/95 p-5 shadow-sm shadow-orange-100/40">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Experiência
              </p>
              <h2 className="text-lg font-semibold text-neutral-900">
                Quão fácil foi realizar este agendamento?
              </h2>
              <p className="text-sm text-neutral-600">{ratingLabel}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setRating(0)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  rating === 0
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                }`}
                aria-pressed={rating === 0}
              >
                0
              </button>
              {Array.from({ length: 5 }, (_, index) => {
                const value = index + 1;
                const active = value <= rating;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    className="flex items-center justify-center rounded-full border border-transparent bg-neutral-900/5 px-3 py-2 transition hover:bg-neutral-900/10"
                    aria-label={`${value} estrela${value > 1 ? "s" : ""}`}
                    aria-pressed={value === rating}
                  >
                    <Star
                      className={`h-6 w-6 ${
                        active ? "text-orange-500" : "text-neutral-300"
                      }`}
                      fill={active ? "currentColor" : "none"}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>0 estrelas</span>
              <span>5 estrelas</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
