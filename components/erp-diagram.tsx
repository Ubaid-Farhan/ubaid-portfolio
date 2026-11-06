"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  School,
  BookOpen,
  Users,
  DoorOpen,
  LifeBuoy,
} from "lucide-react";

// Coordinates are in a 160 x 90 box (16:9) so lines, packets and nodes share one grid.
const CENTER = { x: 80, y: 45 };

const nodes = [
  { label: "Help Desk", icon: LifeBuoy, x: 80, y: 13 },
  { label: "School Mgmt", icon: School, x: 24, y: 30 },
  { label: "Visitor Mgmt", icon: DoorOpen, x: 136, y: 30 },
  { label: "Learning", icon: BookOpen, x: 36, y: 64 },
  { label: "HRMS", icon: Users, x: 124, y: 64 },
];

const css = `
@media (prefers-reduced-motion: no-preference) {
  @keyframes erp-in { from { opacity: 0; transform: translate(-50%, -30%); } to { opacity: 1; transform: translate(-50%, -50%); } }
  @keyframes erp-float { 0%, 100% { margin-top: 0; } 50% { margin-top: -3px; } }
  @keyframes erp-ring { 0% { transform: translate(-50%, -50%) scale(1); opacity: .55; } 100% { transform: translate(-50%, -50%) scale(2.1); opacity: 0; } }
  @keyframes erp-flow { to { stroke-dashoffset: -4.8; } }
  .erp-node { animation: erp-in .6s ease-out both, erp-float 4s ease-in-out infinite; }
  .erp-ring { animation: erp-ring 2.6s ease-out infinite; }
  .erp-line { animation: erp-flow 1.6s linear infinite; }
}
`;

export default function ErpDiagram() {
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: "radial-gradient(90% 90% at 50% 50%, #261244 0%, #130a22 60%, #0c0716 100%)" }}
      role="img"
      aria-label="ERP 2.0 architecture: Help Desk, School Mgmt, Visitor Mgmt, Learning and HRMS all connect to one shared Auth Service"
    >
      <style>{css}</style>

      <svg viewBox="0 0 160 90" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {nodes.map((n) => (
          <line
            key={n.label}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            stroke="rgba(196,181,253,0.4)"
            strokeWidth="0.35"
            strokeDasharray="1.6 1.6"
            className="erp-line"
          />
        ))}
        {motion &&
          nodes.map((n, i) => (
            <circle key={n.label} r="1" fill="#e9d5ff">
              <animateMotion
                dur="2.6s"
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
                path={`M${CENTER.x},${CENTER.y} L${n.x},${n.y}`}
              />
            </circle>
          ))}
      </svg>

      {/* Center: shared Auth Service */}
      <div
        className="absolute"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <span className="erp-ring absolute left-1/2 top-1/2 w-20 h-20 rounded-full border border-violet-300/50" />
        <span
          className="erp-ring absolute left-1/2 top-1/2 w-20 h-20 rounded-full border border-violet-300/40"
          style={{ animationDelay: "1.3s" }}
        />
        <div className="relative flex flex-col items-center gap-1 rounded-2xl bg-white px-3 py-2 sm:px-4 sm:py-2.5 shadow-[0_0_30px_rgba(167,139,250,0.45)]">
          <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-violet-700" />
          <span className="text-[10px] sm:text-xs font-semibold text-gray-900 whitespace-nowrap">
            Auth Service
          </span>
        </div>
      </div>

      {/* Systems */}
      {nodes.map(({ label, icon: Icon, x, y }, i) => (
        <div
          key={label}
          className="erp-node absolute flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-2 py-1.5 sm:px-2.5 text-white whitespace-nowrap"
          style={{
            left: `${(x / 160) * 100}%`,
            top: `${(y / 90) * 100}%`,
            transform: "translate(-50%, -50%)",
            animationDelay: `${i * 0.12}s, ${i * 0.5}s`,
          }}
        >
          <Icon className="w-3.5 h-3.5 text-violet-300 shrink-0" />
          <span className="text-[10px] sm:text-xs font-medium">{label}</span>
        </div>
      ))}

      <span className="hidden sm:block absolute bottom-10 left-0 right-0 text-center text-[9px] sm:text-[10px] tracking-wide text-white/45">
        Central authentication across all systems
      </span>
    </div>
  );
}
