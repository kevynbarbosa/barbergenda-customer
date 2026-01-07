"use client";

export type Professional = {
  id: string;
  name: string;
  role: string;
  rating: string;
  tags: string[];
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
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-200" />
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-neutral-900">
                {professional.name}
              </h3>
              <p className="text-sm text-neutral-600">{professional.role}</p>
            </div>
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
          <p className="text-xs font-semibold text-neutral-500">
            {professional.rating}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-500">
            {professional.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-neutral-100 px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
