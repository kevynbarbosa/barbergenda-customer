"use client";

export type Service = {
  id: string;
  name: string;
  desc: string;
  duration: string;
  price: string;
  badge?: string;
};

type ServiceCardProps = {
  service: Service;
  selected: boolean;
  onToggle: (id: string) => void;
};

export function ServiceCard({ service, selected, onToggle }: ServiceCardProps) {
  return (
    <button
      onClick={() => onToggle(service.id)}
      aria-pressed={selected}
      className={`group block w-full rounded-2xl border px-4 py-4 text-left transition ${
        selected
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
            selected
              ? "border-orange-500 bg-orange-500 text-white"
              : "border-neutral-300 text-transparent"
          }`}
        >
          ✓
        </span>
      </div>
    </button>
  );
}
