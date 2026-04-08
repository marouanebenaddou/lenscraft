"use client";
import Image from "next/image";
import { Animate } from "@/components/Animate";

const devices = [
  { img: "/images/devices/smart-tv.png", name: "Smart TV", brands: "Samsung, LG, Sony, Philips…" },
  { img: "/images/devices/android-tv.png", name: "Android TV", brands: "Box Android, Nvidia Shield…" },
  { img: "/images/devices/fire-stick.png", name: "Fire Stick", brands: "Amazon Fire TV Stick 4K" },
  { img: "/images/devices/smartphone.png", name: "Smartphone", brands: "iOS & Android" },
  { img: "/images/devices/tablet.png", name: "Tablette", brands: "iPad, Samsung Tab…" },
  { img: "/images/devices/laptop.png", name: "Ordinateur", brands: "Windows, Mac, Linux" },
];

export default function CompatibilitySection() {
  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 13, marginBottom: 20 }}>
              📺 Compatibilité
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              Compatible avec{" "}
              <span style={{ background: "linear-gradient(to right, #257BF4, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                tous vos appareils
              </span>
            </h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 560, margin: "0 auto" }}>
              Installez en moins de 2 minutes sur n&apos;importe quel appareil et profitez du streaming partout.
            </p>
          </div>
        </Animate>

        {/* Device grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }} className="compat-grid-mobile">
          {devices.map((d, i) => (
            <Animate key={d.name} type="scaleIn" delay={0.1 + i * 0.07}>
              <div
                style={{ backgroundColor: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 16px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, textAlign: "center", cursor: "default", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(37,123,244,0.4)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", width: 72, height: 56 }}>
                  <Image src={d.img} alt={d.name} fill style={{ objectFit: "contain" }} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#FAFAFA" }}>{d.name}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.4 }}>{d.brands}</div>
              </div>
            </Animate>
          ))}
        </div>

        {/* Footer note */}
        <Animate type="fadeIn" delay={0.5}>
          <p style={{ fontSize: 14, color: "#9CA3AF", textAlign: "center", marginTop: 32 }}>
            ✅ Installation guidée par notre équipe technique • ✅ Assistance à distance disponible
          </p>
        </Animate>
      </div>
    </section>
  );
}
