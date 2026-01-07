import { BookingBar } from "@/components/BookingBar";
import Link from "next/link";

const stats = [
  { label: "Clientes fiéis", value: "1200+" },
  { label: "Avaliação média", value: "4.9/5" },
  { label: "Tempo médio", value: "45 min" },
];

const highlights = [
  {
    title: "Equipe autoral",
    desc: "Barbeiros que dominam o clássico e entregam um toque atual em cada corte.",
  },
  {
    title: "Ritual completo",
    desc: "Toalha quente, aromaterapia, finalização premium e registro das suas preferências.",
  },
  {
    title: "Ambiente reservado",
    desc: "Iluminação baixa, áudio seletivo e bancadas individuais para você relaxar.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-200/15 via-amber-500/5 to-transparent blur-3xl" />
        <div className="absolute left-0 top-20 h-72 w-72 -translate-x-1/3 rounded-full bg-amber-600/10 blur-[120px]" />
        <div className="absolute right-0 top-10 h-64 w-64 translate-x-1/3 rounded-full bg-neutral-700/30 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <span className="text-lg font-semibold tracking-tight">BB</span>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber-100/80">
                Barbergenda
              </p>
              <p className="text-lg font-semibold text-white">
                Barbearia &amp; Estilo
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-sm font-semibold text-white/70 md:flex">
            <Link href="/servicos" className="transition hover:text-white">
              Serviços
            </Link>
            <Link href="/profissionais" className="transition hover:text-white">
              Profissionais
            </Link>
            <Link href="/horarios" className="transition hover:text-white">
              Horários
            </Link>
            <Link
              href="/horarios"
              className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-neutral-950 shadow-[0_10px_40px_-20px_rgba(251,191,36,0.6)] transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Agendar agora
            </Link>
          </div>
        </header>

        <main className="space-y-16">
          <section className="grid items-center gap-10 pt-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.25em] text-amber-100/80">
                Clássico · Preciso · Autêntico
              </p>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  O encontro entre a barbearia tradicional e o design
                  contemporâneo.
                </h1>
                <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                  Atendimento pontual, conversa boa e um ritual pensado para
                  quem valoriza cada detalhe. Do corte à barba, cuidamos da sua
                  assinatura visual.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/horarios"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-[0_16px_50px_-24px_rgba(251,191,36,0.7)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Reservar horário
                </Link>
                <Link
                  href="/servicos"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-200/60 hover:text-amber-100"
                >
                  Ver serviços
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-white/60">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_30%)]" />
              <div className="relative space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-950">
                  <div className="flex h-full items-center justify-center">
                    <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      Espaço para foto do salão
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-amber-100/80">
                      Ritual Barbergenda
                    </p>
                    <p className="text-white">
                      Chegue, relaxe, escolha sua trilha sonora.
                    </p>
                  </div>
                  <Link
                    href="/profissionais"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-amber-200/60 hover:text-amber-100"
                  >
                    Conhecer equipe →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-100/80">
                Sobre o espaço
              </p>
              <h2 className="font-serif text-3xl font-semibold text-white">
                “Criamos um refúgio para quem gosta de cuidar da aparência sem
                pressa.”
              </h2>
              <p className="text-sm text-white/70 sm:text-base">
                A iluminação baixa, o cheiro da toalha quente e os produtos que
                respeitam a pele definem nossa experiência. Da recepção ao
                acabamento, cada detalhe foi pensado para que você saia
                renovado.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-100 transition hover:text-amber-200"
              >
                Saber mais sobre o menu →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-4">
                <div className="aspect-[16/10] rounded-xl border border-dashed border-white/20 bg-neutral-900/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl border border-white/20 bg-neutral-900/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                    Foto ampla do salão
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-3">
                  <div className="aspect-[4/5] rounded-xl border border-dashed border-white/25 bg-neutral-900/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-md bg-neutral-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Detalhe 01
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 p-3">
                  <div className="aspect-[4/5] rounded-xl border border-dashed border-white/25 bg-neutral-900/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-md bg-neutral-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Detalhe 02
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Serviços",
                desc: "Cortes, barbas e finalização assinados pela equipe Barbergenda.",
                cta: "Escolher serviço",
                href: "/servicos",
              },
              {
                title: "Profissionais",
                desc: "Conheça quem vai te atender e escolha seu barbeiro de confiança.",
                cta: "Ver equipe",
                href: "/profissionais",
              },
              {
                title: "Horários",
                desc: "Agende de onde estiver com confirmações rápidas e sem filas.",
                cta: "Reservar agora",
                href: "/horarios",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-5 transition duration-150 hover:-translate-y-1 hover:border-amber-200/50"
              >
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.18em] text-amber-100/80">
                    {card.title}
                  </p>
                  <p className="text-sm text-white/70">{card.desc}</p>
                </div>
                <Link
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-100 transition group-hover:text-amber-200"
                >
                  {card.cta} →
                </Link>
              </div>
            ))}
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-900 to-neutral-800 px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-amber-100/80">
                  Pronto para o próximo corte?
                </p>
                <p className="font-serif text-3xl font-semibold text-white">
                  Deixe o horário reservado e só apareça para relaxar.
                </p>
                <p className="text-sm text-white/70">
                  Agendamento rápido, confirmação em minutos e sua cadeira
                  esperando por você.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/horarios"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-[0_16px_50px_-24px_rgba(251,191,36,0.7)] transition hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Garantir horário
                </Link>
                <a
                  href="tel:+55999999999"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-amber-200/60 hover:text-amber-100"
                >
                  Falar com a recepção
                </a>
              </div>
            </div>
          </section>
        </main>

        <BookingBar />
      </div>
    </div>
  );
}
