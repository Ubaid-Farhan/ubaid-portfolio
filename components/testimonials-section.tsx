"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    headline: "His ability to simplify complex things is truly unmatched.",
    quote: "Before Ubaid's classes, my academic and professional work felt like a burden. After learning AI techniques, prompt engineering, and NotebookLM from him, my entire way of working changed. The n8n session alone was a game changer.",
    name: "Ajmal Khan",
    role: "Student · Level Up Institute",
    initials: "AK",
  },
  {
    headline: "Every class brought something new.",
    quote: "Before joining, I had limited knowledge of this field. The teaching method was clear and supportive, which made the learning experience genuinely enjoyable — even when I couldn't attend regularly.",
    name: "Safi",
    role: "Student · Level Up Institute",
    initials: "SF",
  },
  {
    headline: "I now feel confident building real websites.",
    quote: "Before the course, I only had basic coding knowledge. After classes and practice, my skills improved significantly. Sir taught us to build portfolio websites using AI tools and prompts, use AI productivity tools, and present professionally.",
    name: "Ayesha Shakoor",
    role: "Student · Level Up Institute",
    initials: "AS",
  },
];

function ShimmerCard() {
  return (
    <div className="relative rounded-2xl border border-white/8 bg-[#1a0a1a] p-7 overflow-hidden">
      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand/8 to-transparent" />

      {/* Quote icon placeholder */}
      <div className="w-7 h-7 rounded-lg bg-brand/15 mb-5 animate-pulse" />

      <div className="space-y-3 mb-6">
        <div className="h-2.5 bg-white/8 rounded-full w-full animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-11/12 animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-4/5 animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-full animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-2/3 animate-pulse" />
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand/15 animate-pulse shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-2.5 bg-white/8 rounded-full w-28 animate-pulse" />
          <div className="h-2 bg-white/5 rounded-full w-36 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const isPlaceholder = false; // flip to false when real testimonials ready

  return (
    <section className="pt-12 pb-12 md:pt-14 md:pb-14 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(90% 70% at 50% 50%, #150515 0%, #000000 65%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand uppercase tracking-[0.25em] text-sm font-black block mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
              What People <span className="text-brand">Say.</span>
            </h2>
          </div>
          {isPlaceholder && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 self-start md:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-brand text-xs uppercase tracking-widest font-black">
                Real reviews coming soon
              </span>
            </div>
          )}
        </div>

        {/* Cards */}
        {isPlaceholder ? (
          <div className="grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => <ShimmerCard key={i} />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(({ headline, quote, name, role, initials }, i) => (
              <div
                key={i}
                className="group relative pl-7 pr-7 pt-7 pb-6 rounded-2xl border border-white/8 bg-[#130813] hover:border-brand/30 hover:bg-[#1a0a1a] transition-all duration-400 overflow-hidden flex flex-col gap-4"
              >
                {/* Left border accent */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-brand via-violet-500 to-brand/30" />

                {/* Hover glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/0 group-hover:bg-brand/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                {/* Quote icon */}
                <Quote className="w-6 h-6 text-brand/50 shrink-0" />

                {/* Headline */}
                <h3 className="text-white text-xl font-black leading-snug tracking-tight">
                  &ldquo;{headline}&rdquo;
                </h3>

                {/* Full quote */}
                <p className="text-white/45 text-sm leading-relaxed flex-1">
                  {quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #8b5cf6)" }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
