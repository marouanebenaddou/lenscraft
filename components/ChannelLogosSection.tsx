"use client";
import Image from "next/image";
import { Animate } from "@/components/Animate";

// 26 real channel logos from original site
const channelLogos = Array.from({ length: 26 }, (_, i) => `/images/channels/ch-${String(i + 1).padStart(2, "0")}.png`);

export default function ChannelLogosSection() {
  return (
    <section style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 800, color: "#FAFAFA", textAlign: "center", marginBottom: 12, maxWidth: 760, margin: "0 auto 12px" }}>
            Découvrez un monde de divertissement sans fin avec Lenscraft
          </h2>
          <p style={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", marginBottom: 56, maxWidth: 700, margin: "0 auto 56px" }}>
            Achetez un abonnement et arrêtez de gaspiller de l&apos;argent sur plusieurs abonnements. Nous proposons toute la gamme de contenus, de films et de séries télévisées, le tout sous un même toit virtuel : Lenscraft
          </p>
        </Animate>

        {/* Channel logo grid — real images */}
        <Animate type="fadeInUp" delay={0.15}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 12 }}>
          {channelLogos.map((src, i) => (
            <div
              key={i}
              style={{ backgroundColor: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 8, display: "flex", alignItems: "center", justifyContent: "center", aspectRatio: "16/9", overflow: "hidden", transition: "transform 0.2s", cursor: "default" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src={src} alt={`Channel ${i + 1}`} fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          ))}
        </div>
        </Animate>
      </div>
    </section>
  );
}
