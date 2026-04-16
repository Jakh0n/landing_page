import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";
import { SEO_DEFAULT_TITLE } from "@/lib/seo";

export const runtime = "edge";

export const alt = SEO_DEFAULT_TITLE;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "72px 80px",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #4c1d95 100%)",
      }}
    >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#5B50F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            E
          </div>
        <span
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_NAME}
        </span>
      </div>
      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.15,
          maxWidth: 900,
          letterSpacing: "-0.03em",
        }}
      >
        IELTS va ingliz tili markazi
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 26,
          color: "rgba(255,255,255,0.82)",
          maxWidth: 820,
          lineHeight: 1.4,
        }}
      >
        Mock testlar, mentor feedback, Toshkent va onlayn
      </div>
    </div>,
    {
      ...size,
    },
  );
}
