export function Header() {
  return (
    <header className="sticky top-0 w-full z-50 border-b border-white/10 bg-[#A300D9]/40 backdrop-blur-md">
      <div className="max-w-[1290px] mx-auto px-4 sm:px-6 py-1.5 sm:py-2">
        <nav className="flex items-center justify-between gap-3">
          <div className="flex items-center shrink-0" style={{ background: "transparent" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ubaid/LOGO.png"
              alt="Muhammad Ubaid"
              style={{ background: "transparent", mixBlendMode: "screen", width: "150px", height: "auto", filter: "drop-shadow(0.3px 0 0 white) drop-shadow(-0.3px 0 0 white)" }}
            />
          </div>
          <button className="flex items-center font-bold text-[11px] sm:text-xs gap-1.5 sm:gap-2 bg-[#A300D9]/40 border border-[#A300D9] text-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap uppercase tracking-wider">
            HIRE ME
            <svg width="14" height="14" viewBox="0 0 480 480" className="fill-current transform hover:translate-x-1.5 hover:translate-y-1 transition-all duration-300 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
