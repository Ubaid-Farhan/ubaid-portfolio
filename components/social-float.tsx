"use client";

import { useEffect, useState } from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const links = [
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/ubaid-farhan/", label: "LinkedIn", hover: "hover:text-[#0A66C2]" },
  { icon: FiGithub, href: "https://github.com/Ubaid-Farhan", label: "GitHub", hover: "hover:text-white" },
  { icon: FaWhatsapp, href: "https://wa.me/923122134810", label: "WhatsApp", hover: "hover:text-[#25D366]" },
];

export default function SocialFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
    <style>{`
      @keyframes shake-glow-seq {
        0%, 20%, 100% { transform: translateX(0) rotate(0deg); box-shadow: none; }
        3%  { transform: translateX(-7px) rotate(-5deg); box-shadow: 0 0 18px rgba(163,0,217,0.9); }
        6%  { transform: translateX(7px) rotate(5deg);  box-shadow: 0 0 22px rgba(163,0,217,1); }
        9%  { transform: translateX(-6px) rotate(-4deg); box-shadow: 0 0 16px rgba(163,0,217,0.8); }
        12% { transform: translateX(6px) rotate(4deg);  box-shadow: 0 0 12px rgba(163,0,217,0.6); }
        15% { transform: translateX(-3px) rotate(-2deg); box-shadow: 0 0 6px rgba(163,0,217,0.3); }
        18% { transform: translateX(0); box-shadow: none; }
      }
    `}</style>
    <div className="fixed bottom-8 right-5 z-50 flex flex-col gap-3">
      {links.map(({ icon: Icon, href, label, hover }, i) => (
        /* Wrapper handles entry slide-in only */
        <div
          key={label}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(60px)",
            transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.6s cubic-bezier(0.215,0.61,0.355,1) ${i * 0.15}s`,
          }}
        >
          {/* Inner link handles shake+glow animation only */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={`w-11 h-11 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 ${hover} hover:border-brand/50 transition-colors duration-300 block`}
            style={{
              animation: `shake-glow-seq 9s ease-in-out ${i * 3}s infinite`,
            }}
          >
            <Icon className="w-5 h-5" />
          </a>
        </div>
      ))}
    </div>
    </>
  );
}
