import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const EMAIL = 'ubaid.quadgentics@gmail.com';
const PHONE_DISPLAY = '+92 312 2134810';
const WHATSAPP = 'https://wa.me/923122134810';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top Purple Bar */}
      <div className="w-full bg-[#4c2576] border-y border-white/10 py-3 text-center px-4">
        <h2 className="text-[#d8b4ff]/80 font-semibold tracking-[0.2em] text-[11px] md:text-xs uppercase">
          Muhammad Ubaid — Agentic Engineer+ Full-Stack Developer
        </h2>
      </div>

      <div className="container mx-auto px-6 py-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 mb-4">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ubaid/LOGO.png" alt="Muhammad Ubaid" className="w-36 md:w-48 h-auto object-contain" style={{ background: "transparent", mixBlendMode: "screen", filter: "drop-shadow(0.3px 0 0 white) drop-shadow(-0.3px 0 0 white)" }} />
            </div>

            <div className="space-y-4 mb-7">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[1.15] tracking-tight text-white">
                Have a project <br />
                in mind? <br />
                <span className="text-white/55">Let&apos;s build it together.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 bg-[#A300D9] hover:bg-[#b61ae6] text-white px-6 py-3 rounded-full font-bold transition-colors uppercase text-xs tracking-widest"
              >
                <Mail className="w-4 h-4" />
                Email me
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white/85 hover:border-[#25D366] hover:text-white px-6 py-3 rounded-full font-bold transition-colors uppercase text-xs tracking-widest"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Section */}
          <div className="lg:col-span-4 flex flex-col md:flex-row gap-10 lg:gap-8 justify-between lg:justify-end pt-4">

            {/* Quick Links */}
            <div className="min-w-[100px]">
              <h4 className="font-bold text-sm uppercase mb-5 tracking-widest text-white">Navigate</h4>
              <ul className="space-y-3">
                {['About', 'Projects', 'Services', 'Teaching', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-base font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex-1 lg:max-w-[300px]">
              <h4 className="font-bold text-sm uppercase mb-5 tracking-widest text-white">Contact</h4>

              <div className="space-y-3 mb-7">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition group">
                  <Mail className="w-5 h-5 text-white/45 shrink-0" />
                  <span className="text-base font-medium break-all">{EMAIL}</span>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition group">
                  <FaWhatsapp className="w-5 h-5 text-[#25D366]/80 shrink-0" />
                  <span className="text-base font-medium">{PHONE_DISPLAY}</span>
                </a>
                <a href="tel:+923122134810" className="flex items-center gap-3 text-gray-400 hover:text-white transition group">
                  <Phone className="w-5 h-5 text-white/45 shrink-0" />
                  <span className="text-base font-medium">Call</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Github, href: "https://github.com/Ubaid-Farhan", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/ubaid-farhan/", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center hover:bg-[#A300D9] hover:border-[#A300D9] transition-all duration-300 text-white/80 hover:text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center bg-[#0a0a0a]">
        <p className="text-xs md:text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} – Muhammad Ubaid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
