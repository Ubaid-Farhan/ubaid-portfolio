
export default function About() {
  const steps = [
    {
      title: "Plan Before You Build",
      description:
        "Every system starts with architecture. I map out data flows, roles, and edge cases before writing a single line of code.",
    },
    {
      title: "Lead, Don't Just Execute",
      description:
        "I break down projects into clear tasks, delegate to team members, and own the delivery — not just my slice of it.",
    },
    {
      title: "Iterate on Real Feedback",
      description:
        "MVPs go live fast. Real users surface real problems. I use that signal to fix, improve, and scale what actually matters.",
    },
    {
      title: "Ship Products, Not Just Code",
      description:
        "The goal is a system organizations pay for and rely on — not a repo. I stay involved until it's live and working.",
    },
  ];

  return (
    <section id="about" className="py-14 md:py-16 relative overflow-hidden">
      {/* Background: purple glow from TOP spreading through section */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(90% 50% at 50% 0%, #2b092b 0%, #150515 35%, #0a030a 60%, #050205 100%)",
        }}
      />
      {/* Subtle purple ambient light top */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Purple ambient glow near bottom for cards area */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Top: Image + Intro side by side */}
        <div className="grid md:grid-cols-[minmax(0,360px)_1fr] lg:grid-cols-[minmax(0,420px)_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-white/10 group-hover:border-brand/50 transition-all duration-500 shadow-2xl shadow-brand/10">
              {/* Profile photo placeholder — replace src once photo is ready */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ubaid/About.png"
                alt="Muhammad Ubaid — Agentic Engineer+ Full-Stack Developer"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-br from-brand/0 via-brand/5 to-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            {/* Purple glow behind image */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Intro Content */}
          <div className="space-y-5">
            <span className="text-brand uppercase tracking-[0.25em] text-sm font-black block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
              Real Experience.{" "}
              <span className="text-brand">Real Products.</span>
            </h2>

            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              I&apos;m Muhammad Ubaid, a full-stack developer and tech lead based in Karachi.
              I started in January 2025 as the first employee of an early-stage software startup —
              and within months, I was leading product development, mentoring interns, and
              architecting systems that organizations actually use and pay for.
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              I don&apos;t just write code. I plan, lead, build, and deliver.
            </p>

            <div className="border-l-2 border-brand/60 pl-4 py-2 bg-brand/5 rounded-r-lg">
              <p className="text-sm text-white/60 leading-relaxed">
                Beyond development, I&apos;ve trained <span className="text-brand font-bold">2,000+ students</span> and <span className="text-brand font-bold">50+ teachers</span> in AI tools, prompt engineering, and web development — including under Sindh Government&apos;s <span className="text-white/80 font-semibold">BBSHRRDB initiative</span>.
              </p>
            </div>

            <div className="border-l-2 border-brand pl-5 py-1">
              <p className="text-sm md:text-base text-white/60 leading-relaxed italic">
                &ldquo;The best system is one that runs in production, earns revenue, and
                solves a real problem — not one that looks good in a demo.&rdquo;
              </p>
            </div>

          </div>
        </div>

        {/* Bottom: 4-Step Methodology */}
        <div className="mt-14 md:mt-16">
          <div className="text-center mb-8">
            <span className="text-brand uppercase tracking-[0.25em] text-sm font-black">
              My Process
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mt-2">
              How I Work
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative p-5 md:p-6 rounded-2xl border border-brand/20 bg-[#1a0a1a]/80 backdrop-blur-sm hover:border-brand/50 hover:bg-[#220822] transition-all duration-400 group overflow-hidden shadow-lg shadow-brand/5"
              >
                {/* Purple glow on hover inside card */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand/0 group-hover:bg-brand/20 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="text-4xl font-black text-brand/25 group-hover:text-brand/50 transition-colors duration-300 mb-3 leading-none">
                    0{index + 1}
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white mb-2 uppercase tracking-wide leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/50 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
