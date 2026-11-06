"use client";

import { FiArrowRight } from "react-icons/fi";

const stats = [
  { value: "5+", label: "Systems unified into 1 ERP" },
  { value: "Runner-Up", label: "GDG x IBA Datathon 2026" },
  { value: "1", label: "AI MVP launched" },
  { value: "2,000+", label: "Students trained" },
  { value: "50+", label: "Educators upskilled" },
];

export default function HeroSection() {
  const glowStyle = `
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(163,0,217,0.5), 0 0 12px rgba(163,0,217,0.3); }
      50% { box-shadow: 0 0 0 14px rgba(163,0,217,0), 0 0 32px rgba(163,0,217,0.2); }
    }
  `;

  return (
    <>
    <style>{glowStyle}</style>
    <section
      className="flex flex-col relative group overflow-hidden"
      style={{
        // Fill the first screen (minus navbar and logo strip), capped so it never feels huge.
        minHeight: "min(calc(100svh - 140px), 640px)",
        background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 90%, #3d0a3d 100%)"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-4 md:space-y-5">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-brand/40 bg-brand/10 backdrop-blur-sm max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-white/70 text-[9px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] font-bold whitespace-nowrap">
              Django · Next.js · LangChain · AI Agents
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2rem] sm:text-5xl lg:text-6xl font-black uppercase tracking-tight sm:tracking-tighter leading-[1.1] sm:leading-[0.95] mx-auto">
            <span className="text-white">
              <span className="block sm:inline">WEB SYSTEMS.</span>{" "}
              <span className="block sm:inline">AI PRODUCTS.</span>
            </span>
            <br className="hidden sm:block" />
            <i className="block sm:inline"><span className="text-[#A300D9]/80 mx-auto">BUILT TO SHIP.</span></i>
          </h1>

          {/* Subtitle */}
          <p className="text-white/50 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            I build enterprise web systems and AI products for startups and organizations — from planning to production.
          </p>

          {/* CTA */}
          <div className="flex justify-center items-center pt-1">
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm uppercase tracking-widest"
              style={{
                background: "linear-gradient(to right, #A300D9 50%, rgba(255,255,255,0.95) 50%)",
                backgroundSize: "200% 100%",
                backgroundPosition: "right center",
                color: "#A300D9",
                animation: "pulse-glow 2s ease-in-out infinite",
                transition: "background-position 0.4s ease, color 0.4s ease, transform 0.3s ease",
              }}
              onMouseEnter={e => {
                const btn = e.currentTarget as HTMLAnchorElement;
                btn.style.backgroundPosition = "left center";
                btn.style.color = "#ffffff";
                btn.style.transform = "scale(1.05)";
                btn.style.animation = "none";
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget as HTMLAnchorElement;
                btn.style.backgroundPosition = "right center";
                btn.style.color = "#A300D9";
                btn.style.transform = "scale(1)";
                btn.style.animation = "pulse-glow 2s ease-in-out infinite";
              }}
            >
              Hire Me
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Stats — one slim row */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.35)" }}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center gap-y-4 py-4 md:flex-nowrap md:divide-x md:divide-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="basis-1/3 md:basis-0 md:flex-1 px-2 text-center">
                <div className="text-lg md:text-2xl font-bold text-white leading-none tracking-tight">{value}</div>
                <div className="text-[11px] md:text-[13px] text-white/65 leading-snug mt-1.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
