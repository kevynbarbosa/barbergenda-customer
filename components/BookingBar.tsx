"use client";

import Link from "next/link";

type BookingBarProps = {
  href?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
};

export function BookingBar({
  href = "/servicos",
  title = "Agendar horário",
  subtitle = "Reserve em minutos, sem fila.",
  badge = "BB",
}: BookingBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-neutral-950/70 shadow-[0_-18px_60px_-30px_rgba(0,0,0,0.65)]">
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-4 pt-3 sm:px-6 lg:px-8">
        <Link
          href={href}
          className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-amber-400 px-4 py-3 text-neutral-950 shadow-[0_14px_40px_-22px_rgba(251,191,36,0.7)] transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/40 bg-white/40 text-sm font-semibold">
              {badge}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-900/70">
                {title}
              </p>
              <p className="truncate text-sm font-semibold text-neutral-950">
                {subtitle}
              </p>
            </div>
          </div>
          <span className="text-base font-semibold text-neutral-900 transition group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
