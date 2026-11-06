"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ImageIcon } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import ProjectVideo from "@/components/project-video";
import ErpShowcase, { type ErpView } from "@/components/erp-showcase";

/** Slides without a video advance after this long. */
const AUTO_MS = 3000;
/** Once a visitor has clicked or swiped, slides without a video wait this long. */
const AFTER_CLICK_MS = 8000;

interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "github";
}

interface Project {
  short: string;
  title: string;
  badge: string;
  oneLiner: string;
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
  /** Screenshot path (e.g. "/projects/unscripted.png"). */
  image?: string;
  /** Demo video path. Takes priority over `image`; the slide advances when it ends. */
  video?: string;
  /** Built-in animated visual instead of a screenshot. */
  visual?: "erp";
  /** Sub-views inside the media area (first one is the visual itself). */
  views?: ErpView[];
}

const projects: Project[] = [
  {
    short: "ERP 2.0",
    title: "ERP 2.0 — 5+ Systems, One Platform",
    badge: "Private / Internal",
    oneLiner:
      "Unified School, Learning, HR, Help Desk and Visitor management systems into one ERP with a shared Auth Service.",
    bullets: [
      "Built Help Desk + HRMS, led School Mgmt + Visitor Mgmt",
      "Central authentication across all systems",
      "Microservice architecture",
    ],
    tags: ["Django", "Microservices", "PostgreSQL", "Docker", "Next.js"],
    links: [
      { label: "HRMS", href: "https://hrms.iak.ngo/login", kind: "live" },
      { label: "LMS", href: "https://lms.iak.ngo/login", kind: "live" },
      { label: "EMS", href: "https://ems.quadgentics.com/login", kind: "live" },
    ],
    visual: "erp",
    views: [
      { id: "architecture", label: "Architecture" },
      { id: "hrms", label: "HRMS", image: "/projects/erp/hrms.webp", alt: "HRMS admin dashboard" },
      { id: "lms", label: "LMS", image: "/projects/erp/lms.webp", alt: "LMS teacher dashboard" },
      { id: "ems", label: "EMS", image: "/projects/erp/ems.webp", alt: "EMS principal dashboard" },
      { id: "ems-results", label: "EMS Results", image: "/projects/erp/ems-results.webp", alt: "EMS results analytics" },
      { id: "ems-fees", label: "EMS Fees", image: "/projects/erp/ems-fees.webp", alt: "EMS fees dashboard" },
    ],
  },
  {
    short: "Unscripted",
    title: "Unscripted — Live AI Street Theatre",
    badge: "Launched MVP",
    oneLiner:
      "Give a seed like “a wedding in Lahore, four people”; AI agents create the story and characters, then autonomous characters argue, bargain and improvise live.",
    bullets: [
      "Origin: Runner-Up at Hackfest x Datathon 2026 (GDG + IBA), 84/100 from an independent judge",
      "Led product direction and orchestration (team project)",
      "Every run is a new story",
    ],
    tags: ["LangGraph", "Multi-Agent", "FastAPI", "React", "SSE"],
    links: [
      { label: "Live", href: "https://unscripted.quadgentics.com/", kind: "live" },
      {
        label: "GitHub",
        href: "https://github.com/Ubaid-Farhan/multi-agent-narrative-system",
        kind: "github",
      },
    ],
    video: "/projects/unscrippted.mp4",
  },
  {
    short: "GIANT Kuwait",
    title: "GIANT Kuwait — Bilingual E-commerce",
    badge: "Client",
    oneLiner:
      "Solo-built bilingual (EN/AR) performance-clothing store for a Kuwait client.",
    bullets: [
      "Tap + Deema payments, Meta server-side Purchase tracking",
      "Image payload cut from 16 MB to 0.2 MB",
      "Admin dashboard + live release",
    ],
    tags: ["Next.js", "Vercel", "Payments", "RTL"],
    links: [{ label: "Live", href: "https://giant-kw.com/", kind: "live" }],
    video: "/projects/Giant.mp4",
  },
  {
    short: "AI Lead-Gen",
    title: "AI Lead-Gen",
    badge: "In Progress",
    oneLiner:
      "Multi-phase AI agent system that discovers, verifies and scores companies, then writes personalized outreach.",
    bullets: [
      "Phase 1 (Discover) complete",
      "Phase 2 (Verify) in progress",
    ],
    tags: ["OpenAI Agents SDK", "Gemini", "Self-hosted search"],
    links: [],
    video: "/projects/AI-Lead-generator.mp4",
  },
];

function Media({
  project,
  onEnded,
  viewIndex,
  onSelectView,
}: {
  project: Project;
  onEnded: () => void;
  viewIndex: number;
  onSelectView: (i: number) => void;
}) {
  const { title, video, image, visual, views } = project;

  if (visual === "erp" && views) return <ErpShowcase views={views} index={viewIndex} onSelect={onSelectView} />;
  if (video) return <ProjectVideo src={video} title={title} loop={false} onEnded={onEnded} />;
  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={`${title} screenshot`}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-100 text-gray-400"
      role="img"
      aria-label={`${title} demo coming soon`}
    >
      <ImageIcon className="w-8 h-8" />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
        Demo coming soon
      </span>
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(false); // visitor changed the slide themselves
  const [inView, setInView] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [ended, setEnded] = useState(false); // current video finished
  const [viewIndex, setViewIndex] = useState(0); // sub-view inside the current slide
  const sectionRef = useRef<HTMLElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const count = projects.length;

  const next = useCallback(() => {
    setEnded(false);
    setViewIndex(0);
    setActive((i) => (i + 1) % count);
  }, [count]);

  const go = (i: number) => {
    setClicked(true);
    setEnded(false);
    setViewIndex(0);
    setActive((i + count) % count);
  };

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const canAuto = inView && !hovering && !reduced;
  const isVideo = Boolean(projects[active].video);

  // Slides without a video: step through their sub-views, then move on, on a timer.
  const viewCount = projects[active].views?.length ?? 0;
  useEffect(() => {
    if (!canAuto || isVideo) return;
    const t = setTimeout(
      () => (viewIndex < viewCount - 1 ? setViewIndex(viewIndex + 1) : next()),
      clicked ? AFTER_CLICK_MS : AUTO_MS,
    );
    return () => clearTimeout(t);
  }, [canAuto, isVideo, clicked, active, viewIndex, viewCount, next]);

  // Slides with a video: advance once it has finished.
  useEffect(() => {
    if (canAuto && isVideo && ended) next();
  }, [canAuto, isVideo, ended, next]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-8 md:py-12 relative overflow-hidden"
      style={{
        background: "#F8F8F8",
        borderTop: "1px solid #d8b4fe",
        borderBottom: "1px solid #d8b4fe",
      }}
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="mb-4 md:mb-8">
          <span
            className="text-xs md:text-sm font-black uppercase tracking-[0.25em] block mb-1.5 md:mb-2"
            style={{ color: "#9333ea" }}
          >
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-gray-900">
            Proof, Not <span style={{ color: "#9333ea" }}>Promises.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {/* Navigation: above the slide on small screens, below on large */}
          <div className="order-1 lg:order-2 mb-4 lg:mb-0 lg:mt-6 flex items-center gap-3">
            <div className="hidden sm:flex gap-2 shrink-0">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => go(active - 1)}
                className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:border-purple-500 hover:text-purple-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => go(active + 1)}
                className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:border-purple-500 hover:text-purple-700 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div
              role="tablist"
              aria-label="Projects"
              className="flex gap-2 overflow-x-auto lg:ml-auto -mx-5 px-5 sm:mx-0 sm:px-0 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") go(active + 1);
                if (e.key === "ArrowLeft") go(active - 1);
              }}
            >
              {projects.map((p, i) => (
                <button
                  key={p.short}
                  type="button"
                  role="tab"
                  id={`project-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls={`project-panel-${i}`}
                  onClick={() => go(i)}
                  className={`shrink-0 text-xs font-semibold rounded-full px-3.5 py-1.5 border transition-colors ${
                    i === active
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800"
                  }`}
                >
                  {p.short}
                </button>
              ))}
            </div>
          </div>

          {/* Slides share one grid cell, so the section keeps a steady height as they change */}
          <div
            className="order-2 lg:order-1 grid"
            onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
            onPointerLeave={() => setHovering(false)}
            onTouchStart={(e) => {
              touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }}
            onTouchEnd={(e) => {
              const s = touch.current;
              touch.current = null;
              if (!s) return;
              const dx = e.changedTouches[0].clientX - s.x;
              const dy = e.changedTouches[0].clientY - s.y;
              if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(active + (dx < 0 ? 1 : -1));
            }}
          >
            {projects.map((project, i) => {
              const isActive = i === active;
              return (
                <div
                  key={project.short}
                  id={`project-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`project-tab-${i}`}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 grid lg:grid-cols-[1.25fr_1fr] gap-4 lg:gap-10 content-start lg:content-center lg:items-center transition-all duration-300 ${
                    isActive
                      ? "opacity-100 visible translate-x-0"
                      : "opacity-0 invisible pointer-events-none translate-x-3"
                  }`}
                >
                  <div className="relative aspect-video rounded-xl lg:rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
                    {isActive && (
                      <Media
                        project={project}
                        onEnded={() => setEnded(true)}
                        viewIndex={viewIndex}
                        onSelectView={(v) => {
                          setClicked(true);
                          setViewIndex(v);
                        }}
                      />
                    )}
                    <span className="hidden sm:inline-block absolute top-3 left-3 z-10 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/95 text-purple-700 border border-purple-200 shadow-sm pointer-events-none">
                      {project.badge}
                    </span>
                  </div>

                  <div>
                    <span className="sm:hidden inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-purple-700 border border-purple-200 mb-1.5">
                      {project.badge}
                    </span>
                    <h3 className="font-black text-lg md:text-2xl leading-tight text-gray-900 mb-1.5 md:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[13px] md:text-[15px] leading-snug md:leading-relaxed text-gray-600 mb-3 md:mb-4">
                      {project.oneLiner}
                    </p>

                    <ul className="space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-[13px] md:text-sm leading-snug text-gray-700">
                          <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] md:text-[11px] font-bold uppercase tracking-wide px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 md:mt-5">
                        {project.links.map(({ label, href, kind }) => (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            tabIndex={isActive ? 0 : -1}
                            className={
                              kind === "live"
                                ? "inline-flex items-center gap-1.5 px-3.5 md:px-4 py-1.5 md:py-2 rounded-full bg-gray-900 text-white text-[11px] md:text-xs font-bold uppercase tracking-widest transition-colors hover:bg-purple-700"
                                : "inline-flex items-center gap-1.5 px-3.5 md:px-4 py-1.5 md:py-2 rounded-full border border-gray-300 text-gray-700 text-[11px] md:text-xs font-bold uppercase tracking-widest transition-colors hover:border-purple-500 hover:text-purple-700"
                            }
                          >
                            {kind === "live" ? (
                              <ExternalLink className="w-3.5 h-3.5" />
                            ) : (
                              <FiGithub className="w-3.5 h-3.5" />
                            )}
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
