"use client";

import ErpDiagram from "@/components/erp-diagram";

export interface ErpView {
  id: string;
  label: string;
  /** Screenshot path. Views without one show the animated architecture diagram. */
  image?: string;
  alt?: string;
}

interface ErpShowcaseProps {
  views: ErpView[];
  index: number;
  onSelect: (i: number) => void;
}

/** Architecture diagram plus dashboard screenshots, switchable from a small pill row. */
export default function ErpShowcase({ views, index, onSelect }: ErpShowcaseProps) {
  const current = views[index];

  return (
    <div className="absolute inset-0 bg-[#f4f6f4]">
      {/* Diagram is always mounted underneath; screenshots fade in above it */}
      <ErpDiagram />
      {views.map((v, i) =>
        v.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={v.id}
            src={v.image}
            alt={v.alt ?? v.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ) : null,
      )}

      <div
        role="group"
        aria-label="ERP views"
        className="absolute bottom-2 left-2 right-2 z-10 flex justify-start sm:justify-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {views.map((v, i) => (
          <button
            key={v.id}
            type="button"
            aria-pressed={v.id === current.id}
            onClick={() => onSelect(i)}
            className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold backdrop-blur-md border transition-colors ${
              v.id === current.id
                ? "bg-white text-gray-900 border-white"
                : "bg-black/55 text-white/80 border-white/15 hover:bg-black/70"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
