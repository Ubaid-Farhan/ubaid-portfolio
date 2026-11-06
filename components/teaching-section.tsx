const stats = [
  { value: "2,000+", label: "Students trained" },
  { value: "50+", label: "Educators upskilled" },
  { value: "5th of 61", label: "GIAIC faculty selection" },
];

interface Row {
  org: string;
  role: string;
  metric: string;
  note?: string;
  badge?: string;
  logo: string;
  logoAlt: string;
}

const rows: Row[] = [
  {
    org: "GIAIC Governor House",
    role: "Summer camp faculty",
    metric: "~1,000 students",
    note: "Selected 5th of 61 candidates",
    logo: "/logos/giaic.png",
    logoAlt: "GIAIC",
  },
  {
    org: "GIAIC Governor House",
    role: "Main faculty batch",
    metric: "~1,000 students",
    note: "Teaching the batch I was selected from",
    logo: "/logos/giaic.png",
    logoAlt: "GIAIC",
  },
  {
    org: "AIT",
    role: "Founding instructor · AI batch instructor (current)",
    metric: "200+ students · 6 batches",
    note: "Current AI batches: 2 batches, 60 students",
    logo: "/logos/ait.png",
    logoAlt: "AIT",
  },
  {
    org: "Al-Khair Schooling System",
    role: "Teacher trainer · Digital Literacy Program",
    metric: "50+ educators",
    logo: "/logos/al-khair.png",
    logoAlt: "Idara Al-Khair",
  },
  {
    org: "Level Up Institute · BBSHRRDB",
    role: "Python & web dev",
    metric: "~25 students · 6 months",
    note: "Completed",
    badge: "Sindh Govt.",
    logo: "/logos/bbshrrdb.png",
    logoAlt: "BBSHRRDB",
  },
];

const glass =
  "bg-white/55 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgba(91,33,182,0.08)]";

export default function TeachingSection() {
  return (
    <section
      id="teaching"
      className="py-10 md:py-12 relative overflow-hidden"
      style={{
        background: "#F4F0FD",
        borderTop: "1px solid #d8b4fe",
        borderBottom: "1px solid #d8b4fe",
      }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-8">
          <span
            className="text-sm font-black uppercase tracking-[0.25em] block mb-3"
            style={{ color: "#9333ea" }}
          >
            Teaching &amp; Mentorship
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-gray-900">
            Shaping the Next Generation of{" "}
            <span style={{ color: "#9333ea" }}>Developers.</span>
          </h2>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className={`rounded-2xl px-5 py-4 text-center ${glass}`}
            >
              <div
                className="text-3xl font-bold tracking-tight leading-none"
                style={{ color: "#3b0764" }}
              >
                {value}
              </div>
              <div className="text-sm text-gray-500 mt-1.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Credential rows */}
        <div className={`rounded-2xl overflow-hidden ${glass}`}>
          {rows.map(({ org, role, metric, note, badge, logo, logoAlt }, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-5 py-3"
              style={i > 0 ? { borderTop: "1px solid rgba(124,58,237,0.1)" } : undefined}
            >
              <div className="flex items-center gap-4 sm:w-1/2">
                <div className="w-20 sm:w-28 h-11 shrink-0 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo}
                    alt={logoAlt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3
                    className="font-semibold text-[15px] leading-snug flex flex-wrap items-center gap-2"
                    style={{ color: "#1f1b2e" }}
                  >
                    {org}
                    {badge && (
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                        style={{ color: "#6d28d9", background: "#ede9fe" }}
                      >
                        {badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug">{role}</p>
                </div>
              </div>

              <div className="sm:flex-1 sm:text-right pl-[96px] sm:pl-0">
                <p className="text-sm font-semibold" style={{ color: "#581c87" }}>
                  {metric}
                </p>
                {note && <p className="text-xs text-gray-400">{note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
