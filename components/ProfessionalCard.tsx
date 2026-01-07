"use client";

export type Professional = {
  id: string;
  name: string;
  img?: string;
};

type ProfessionalCardProps = {
  professional: Professional;
  selected: boolean;
  onSelect: (id: string) => void;
};

export function ProfessionalCard({
  professional,
  selected,
  onSelect,
}: ProfessionalCardProps) {
  return (
    <button
      onClick={() => onSelect(professional.id)}
      aria-pressed={selected}
      className={`group block w-full rounded-2xl border px-4 py-4 text-left transition ${
        selected
          ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-100"
          : "border-neutral-200 bg-white/95 hover:border-neutral-400 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-neutral-200">
          {professional.img ? (
            <img
              src={professional.img}
              alt={professional.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : null}
        </div>
        <div className="flex flex-1 items-center justify-between">
          <h3 className="text-base font-semibold text-neutral-900">
            {professional.name}
          </h3>
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
      </div>
    </button>
  );
}
