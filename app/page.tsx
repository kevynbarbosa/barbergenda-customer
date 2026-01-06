import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,#a855f7_0%,transparent_55%)] blur-3xl" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,#22d3ee_0%,transparent_50%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff0d,transparent_45%),linear-gradient(120deg,#ffffff07,transparent_60%)]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pb-6 pt-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
            <span className="text-lg font-semibold tracking-tight">BB</span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Barbergenda
            </p>
            <p className="text-lg font-semibold">Barbearia & Estilo</p>
          </div>
        </div>
        <Link
          href="/agendamento"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:border-white/40 hover:bg-white/20"
        >
          Agendar agora
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <section className="grid items-center gap-12 pb-16 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-white/70 ring-1 ring-white/15">
              Premium · Atenciosa · Autêntica
            </p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Seu corte, barba e cuidado em um ritual feito sob medida.
              </h1>
              <p className="max-w-2xl text-lg text-white/70">
                Horário pontual, atendimento refinado e profissionais que
                entendem o estilo masculino. Reserve em poucos cliques e viva a
                experiência Barbergenda.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/agendamento"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(255,255,255,0.7)]"
              >
                Fazer agendamento
              </Link>
              <a
                href="tel:+55999999999"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Falar com um barbeiro
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {[
                { label: "Clientes fiéis", value: "1200+" },
                { label: "Avaliação média", value: "4.9/5" },
                { label: "Tempo médio", value: "45 min" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-sm text-white/60">{item.label}</p>
                  <p className="text-xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">Agenda da semana</p>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  Vagas abertas
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  {
                    day: "Quarta",
                    slot: "14:00 · Corte clássico + Barba",
                    barber: "Henrique",
                  },
                  {
                    day: "Sexta",
                    slot: "18:30 · Navalhado + Acabamento",
                    barber: "Lucas",
                  },
                  {
                    day: "Sábado",
                    slot: "10:00 · Corte + Finalização",
                    barber: "Felipe",
                  },
                ].map((item) => (
                  <div
                    key={item.slot}
                    className="flex items-start justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm uppercase tracking-[0.16em] text-white/50">
                        {item.day}
                      </p>
                      <p className="text-sm font-semibold">{item.slot}</p>
                      <p className="text-xs text-white/60">
                        Barbeiro: {item.barber}
                      </p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 px-4 py-5">
                <p className="text-sm font-semibold">
                  Preferências registradas
                </p>
                <p className="text-sm text-white/60">
                  Linha marcada, perfume amadeirado e bebida gelada aguardando
                  por você.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8 pb-16">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Especialidades
            </p>
            <h2 className="text-2xl font-semibold">
              Técnicas modernas com a essência da barbearia clássica.
            </h2>
            <p className="max-w-3xl text-white/60">
              Detalhe, precisão e cuidado em cada passo. Escolha seu estilo e
              deixe o restante com nossa equipe.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cortes de assinatura",
                desc: "Fade, taper, tesoura ou máquina. Consultoria rápida para ajustar ao seu formato de rosto.",
              },
              {
                title: "Barba alinhada",
                desc: "Navalha quente, toalha aromática e modelagem que realça os traços.",
              },
              {
                title: "Finalização completa",
                desc: "Hidratação, modelador premium e acabamento que dura o dia todo.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 transition duration-200 group-hover:from-white/40 group-hover:to-white/10" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-white/60">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Ritual Barbergenda
            </p>
            <h3 className="text-2xl font-semibold">
              Um ambiente que une conforto, música e conversa boa.
            </h3>
            <p className="text-white/60">
              Chegue e escolha sua trilha sonora, deguste um café ou drink e
              acompanhe cada detalhe do corte em monitores dedicados. Saia de
              lá com o visual certo e a confiança no lugar.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Wi‑Fi e estações individuais",
                "Produtos premium e hipoalergênicos",
                "Higienização constante do espaço",
                "Bebidas e snacks cortesia",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-200">
                    ✓
                  </span>
                  <p className="text-sm text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
            <h4 className="text-lg font-semibold">Depoimentos</h4>
            <div className="space-y-4">
              {[
                {
                  name: "Rafael Costa",
                  text: "Pontuais, cuidadosos e sempre lembram minhas preferências. A toalha quente na barba é surreal.",
                },
                {
                  name: "Diego Martins",
                  text: "Já testei várias barbearias, mas só aqui a experiência é completa: bebida, papo e corte preciso.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm text-white/70">{review.text}</p>
                  <p className="mt-3 text-sm font-semibold">{review.name}</p>
                </div>
              ))}
            </div>
            <Link
              href="/agendamento"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
            >
              Agende sua próxima visita
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
