"use client";
import { Animate } from "@/components/Animate";

type Channel = {
  name: string;
  icon?: string;
  iconColor?: string;
  bg: string;
  textColor?: string;
};

const channels: Channel[] = [
  // Streaming
  { name: "Netflix",       icon: "netflix",       iconColor: "E50914", bg: "#141414" },
  { name: "Disney+",       bg: "#1133A5",          textColor: "#ffffff" },
  { name: "Prime Video",   bg: "#00A8E0",          textColor: "#ffffff" },
  { name: "Apple TV+",     icon: "appletv",        iconColor: "ffffff", bg: "#000000" },
  { name: "Max",           icon: "max",            iconColor: "ffffff", bg: "#002BE7" },
  { name: "Shahid",        bg: "#4CAF50",          textColor: "#ffffff" },
  { name: "DAZN",          icon: "dazn",           iconColor: "F8FF00", bg: "#111111" },
  // Chaînes françaises
  { name: "TF1",           bg: "#003E99",          textColor: "#ffffff" },
  { name: "M6",            bg: "#E2001A",          textColor: "#ffffff" },
  { name: "France TV",     bg: "#004A9A",          textColor: "#ffffff" },
  { name: "Canal+",        bg: "#111111",          textColor: "#ffffff" },
  { name: "Arte",          bg: "#002E5E",          textColor: "#FF6600" },
  { name: "BFM TV",        bg: "#E2001A",          textColor: "#ffffff" },
  { name: "RMC Sport",     bg: "#1A1A8C",          textColor: "#ffffff" },
  // Sports
  { name: "beIN Sports",   bg: "#E30613",          textColor: "#ffffff" },
  { name: "Premier League", icon: "premierleague", iconColor: "ffffff", bg: "#380285" },
  { name: "Champions League", bg: "#071D49",       textColor: "#C4A847" },
  { name: "Ligue 1",       bg: "#001E62",          textColor: "#D4AF37" },
  { name: "LaLiga",        bg: "#EE8100",          textColor: "#ffffff" },
  { name: "Serie A",       bg: "#010E80",          textColor: "#ffffff" },
  { name: "Bundesliga",    bg: "#D3010C",          textColor: "#ffffff" },
  { name: "Eurosport",     bg: "#FF6B00",          textColor: "#ffffff" },
  // Chaînes arabes
  { name: "MBC",           bg: "#006DB3",          textColor: "#ffffff" },
  { name: "Al Jazeera",    bg: "#CC0000",          textColor: "#ffffff" },
  { name: "Rotana",        bg: "#B8860B",          textColor: "#ffffff" },
  { name: "OSN",           bg: "#D4000F",          textColor: "#ffffff" },
];

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

        {/* Channel logo grid */}
        <Animate type="fadeInUp" delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 12 }}>
            {channels.map((ch) => (
              <div
                key={ch.name}
                title={ch.name}
                style={{
                  backgroundColor: ch.bg,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: 12,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  transition: "transform 0.2s",
                  cursor: "default",
                  gap: 4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                {ch.icon ? (
                  <img
                    src={`https://cdn.simpleicons.org/${ch.icon}/${ch.iconColor ?? "ffffff"}`}
                    alt={ch.name}
                    style={{ width: 36, height: 36, objectFit: "contain" }}
                  />
                ) : (
                  <span
                    style={{
                      fontSize: "clamp(9px, 1.1vw, 12px)",
                      fontWeight: 800,
                      color: ch.textColor ?? "#ffffff",
                      textAlign: "center",
                      lineHeight: 1.2,
                      letterSpacing: "0.02em",
                      padding: "0 4px",
                    }}
                  >
                    {ch.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}
