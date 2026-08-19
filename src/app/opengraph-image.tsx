/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = `${DATA.name} — Fullstack Developer portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function getAssets() {
  const publicDirectory = path.join(process.cwd(), "public");
  const [body, display, avatar] = await Promise.all([
    readFile(path.join(publicDirectory, "fonts", "CabinetGrotesk-Medium.ttf")),
    readFile(path.join(publicDirectory, "fonts", "ClashDisplay-Semibold.ttf")),
    readFile(path.join(publicDirectory, "vladyslav-kruhlov.jpg")),
  ]);
  const toArrayBuffer = (buffer: Buffer): ArrayBuffer =>
    buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    ) as ArrayBuffer;

  return {
    body: toArrayBuffer(body),
    display: toArrayBuffer(display),
    avatar: toArrayBuffer(avatar),
  };
}

export default async function Image() {
  const assets = await getAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          padding: "72px 78px",
          color: "#fafafa",
          background:
            "radial-gradient(circle at 82% 20%, #283858 0%, #111827 30%, #09090b 68%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            display: "flex",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 28,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 720,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#93c5fd",
              fontFamily: "Cabinet Grotesk",
              fontSize: 24,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Fullstack Developer
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Clash Display",
              fontSize: 70,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              marginBottom: 26,
            }}
          >
            {DATA.name}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Cabinet Grotesk",
              fontSize: 26,
              lineHeight: 1.35,
              color: "#cbd5e1",
              marginBottom: 34,
            }}
          >
            Building responsive, real-time, and multi-tenant web applications.
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["React", "Next.js", "TypeScript"].map((skill) => (
              <div
                key={skill}
                style={{
                  display: "flex",
                  padding: "10px 17px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  color: "#e2e8f0",
                  background: "rgba(255,255,255,0.06)",
                  fontFamily: "Cabinet Grotesk",
                  fontSize: 19,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 260,
            height: 330,
            padding: 10,
            borderRadius: 36,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        >
          <img
            src={assets?.avatar as unknown as string}
            alt={DATA.name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 27,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: assets
        ? [
            { name: "Cabinet Grotesk", data: assets.body, weight: 400 },
            { name: "Clash Display", data: assets.display, weight: 600 },
          ]
        : undefined,
    }
  );
}
