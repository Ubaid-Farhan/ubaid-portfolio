"use client";

import { useState, useEffect, useRef } from "react";
import {
  Server,
  Bot,
  Code2,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import About from "@/components/about";
import { ToolsSection } from "@/components/tool-section";
import ProjectsSection from "@/components/projects-section";
import TeachingSection from "@/components/teaching-section";
import TestimonialsSection from "@/components/testimonials-section";

interface AnimatedCounter {
  years: number;
  projects: number;
}

export default function Portfolio() {
  const [animatedStats, setAnimatedStats] = useState<AnimatedCounter>({
    years: 0,
    projects: 0,
  });
  const [lottieData, setLottieData] = useState<{ [key: string]: unknown }>({});
  const statsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Enterprise Web Systems",
      desc: "School management, employee, helpdesk & visitor systems — built for scale",
      icon: Server,
    },
    {
      title: "AI Agent Development",
      desc: "Multi-agent workflows, LangChain orchestration, OpenAI integration",
      icon: Bot,
    },
    {
      title: "Full-Stack Development",
      desc: "Django + Next.js + PostgreSQL — fast, scalable, production-ready",
      icon: Code2,
    },
    {
      title: "E-Commerce & Business Sites",
      desc: "Custom stores and business websites built to convert visitors into clients",
      icon: ShoppingCart,
    },
    {
      title: "Technical Training & Mentorship",
      desc: "Web development and Python training for teams, institutions, and individuals",
      icon: GraduationCap,
    },
  ];

  useEffect(() => {
    const loadLottie = async () => {
      try {
        const response = await fetch("/lottie/social-icons-marketing.json");
        const data = await response.json();
        setLottieData(data);
      } catch (error) {
        console.log("[v0] Lottie loading error:", error);
      }
    };
    loadLottie();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let yearsCount = 0;
        let projectsCount = 0;
        const interval = setInterval(() => {
          if (yearsCount < 3) yearsCount++;
          if (projectsCount < 60) projectsCount += 3;
          setAnimatedStats({ years: yearsCount, projects: projectsCount });
        }, 30);
        setTimeout(() => clearInterval(interval), 1000);
      }
    });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="">
      <HeroSection />
      <ToolsSection />

      {/* About Section */}
      <About />

      {/* Projects */}
      <ProjectsSection />

      {/* Services */}
      <section id="services" className="py-12 md:py-14 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(70% 50% at 50% 100%, #1a0a1a 0%, #0a030a 40%, #000000 80%)",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8">
            <span className="text-brand uppercase tracking-[0.25em] text-xs sm:text-sm font-black block mb-3 sm:mb-4">
              What I Build For You
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
              Your Vision,{" "}
              <span className="text-brand">My Code.</span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
              Every service is engineered to deliver real systems — not demos. Production-ready, scalable, and built to last.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-5 rounded-2xl border border-brand/15 bg-[#1a0a1a]/70 hover:border-brand/50 hover:bg-[#220822] transition-all duration-400 overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-brand/0 group-hover:bg-brand/20 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex gap-4 sm:gap-5 items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-brand/20 group-hover:bg-brand flex items-center justify-center transition-all duration-400 shadow-lg shadow-brand/10 group-hover:shadow-brand/30">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand group-hover:text-white transition-colors duration-400" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide mb-1.5 sm:mb-2 group-hover:text-brand transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/50 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Teaching */}
      <TeachingSection />

      {/* Testimonials */}
      <TestimonialsSection />

    </div>
  );
}
