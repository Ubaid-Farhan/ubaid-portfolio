import { ImageResponse } from "next/og"

export const alt = "Muhammad Ubaid — Agentic Engineer+ Full-Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          position: "relative",
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b092b 90%, #3d0a3d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "rgba(163,0,217,0.28)",
            filter: "blur(90px)",
          }}
        />

        {/* Accent rule */}
        <div
          style={{
            width: 96,
            height: 8,
            borderRadius: 4,
            background: "#A300D9",
            marginBottom: 36,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -2,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Muhammad Ubaid
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 48,
            fontWeight: 700,
            color: "#c44bf0",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Agentic Engineer+ Full-Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 4,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          LangChain · FastAPI · Next.js
        </div>
      </div>
    ),
    { ...size },
  )
}
