import React from 'react';
import { Mail, Phone, ArrowRight, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top Purple Bar */}
      <div className="w-full bg-[#A300D9] py-4 text-center px-4">
        <h2 className="text-white font-extrabold tracking-widest text-sm md:text-base uppercase">
          Muhammad Ubaid — Agentic Engineer+ Full-Stack Developer
        </h2>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 mb-4">

          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ubaid/LOGO.png" alt="Muhammad Ubaid" className="w-48 md:w-64 h-auto object-contain" style={{ background: "transparent", mixBlendMode: "screen", filter: "drop-shadow(0.3px 0 0 white) drop-shadow(-0.3px 0 0 white)" }} />
            </div>

            <div className="space-y-4 mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tight text-white">
                Have a project <br />
                in mind? <br />
                Let&apos;s build it together.
              </h2>
            </div>

            <div>
              <a
                href="mailto:ubaid.quadgentics@gmail.com"
                className="group inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white px-8 py-4 rounded-full font-bold transition-all uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(163,0,217,0.3)]"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Section */}
          <div className="lg:col-span-4 flex flex-col md:flex-row gap-10 lg:gap-8 justify-between lg:justify-end pt-4">

            {/* Quick Links */}
            <div className="min-w-[100px]">
              <h4 className="font-bold text-sm uppercase mb-6 tracking-widest text-white">Navigate</h4>
              <ul className="space-y-4">
                {['About', 'Projects', 'Services', 'Teaching', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-brand transition-colors text-base font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex-1 lg:max-w-[300px]">
              <h4 className="font-bold text-sm uppercase mb-6 tracking-widest text-white">Contact</h4>

              <div className="space-y-4 mb-8">
                <a href="mailto:ubaid.quadgentics@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition group">
                  <Mail className="w-5 h-5 text-brand" />
                  <span className="text-base font-medium">ubaid.quadgentics@gmail.com</span>
                </a>
                <a href="tel:+923122134810" className="flex items-center gap-3 text-gray-400 hover:text-white transition group">
                  <Phone className="w-5 h-5 text-brand" />
                  <span className="text-base font-medium">+92 312 2134810</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Github, href: "https://github.com/Ubaid-Farhan" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/ubaid-farhan/" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center hover:bg-brand transition-all duration-300 text-brand hover:text-white shadow-sm"
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
