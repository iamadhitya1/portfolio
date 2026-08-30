import { ImageResponse } from "next/og";

export const alt = "M. Adhitya — AI Builder & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050510",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(0,255,255,0.12), transparent 45%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#00ffff", fontSize: 28, letterSpacing: 4, fontWeight: 700 }}>
          REWRITE LABS — PERSONAL STUDIO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 800, color: "#ffffff" }}>
            M. <span style={{ color: "#00ffff", marginLeft: 24 }}>Adhitya</span>
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#9fb3c8" }}>
            AI Builder &amp; Software Engineer
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#4a6080" }}>
          8 production AI apps · 7 open source libraries · iamadhitya.vercel.app
        </div>
      </div>
    ),
    size
  );
}
