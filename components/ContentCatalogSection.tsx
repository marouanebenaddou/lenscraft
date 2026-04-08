"use client";
import Image from "next/image";
import { Animate } from "@/components/Animate";

const categories = [
  {
    emoji: "⚽",
    name: "Sports en Direct",
    desc: "Tous les matchs de foot, tennis, boxe, F1 — BeIN, Canal+, DAZN et plus encore.",
    iconBg: "#10B981",
    img: "/images/catalog/sports.jpg",
  },
  {
    emoji: "🎬",
    name: "Films & Cinéma",
    desc: "Des milliers de films en 4K — blockbusters, classiques, et nouveautés chaque semaine.",
    iconBg: "#8B5CF6",
    img: "/images/catalog/cinema.jpg",
  },
  {
    emoji: "📺",
    name: "Séries & VOD",
    desc: "Netflix, Disney+, Prime Video et plus — toutes vos séries préférées en un seul endroit.",
    iconBg: "#3B82F6",
    img: "/images/catalog/series.jpg",
  },
  {
    emoji: "🌍",
    name: "Chaînes Internationales",
    desc: "Plus de 150 pays couverts — chaînes arabes, européennes, africaines, américaines.",
    iconBg: "#06B6D4",
    img: "/images/catalog/international.jpg",
  },
  {
    emoji: "👶",
    name: "Contenu Enfants",
    desc: "Des centaines de chaînes et dessins animés pour vos enfants — en toute sécurité.",
    iconBg: "#F59E0B",
    img: "/images/catalog/kids.jpg",
  },
];

export default function ContentCatalogSection() {
  return (
    <section style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 13, marginBottom: 20 }}>
              Catalogue
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              Sports, Films, Séries & bien plus
            </h2>
            <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 560, margin: "0 auto" }}>
              Un catalogue complet pour toute la famille — du sport en direct au divertissement illimité.
            </p>
          </div>
        </Animate>

        {/* Grid */}
        <div className="catalog-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: 16 }}>
          {/* Sports (tall — spans 2 rows) */}
          <Animate type="fadeInLeft" delay={0.1} style={{ gridRow: "1 / span 2" }}>
          <div
            className="mobile-row-reset"
            style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 400, cursor: "default", height: "100%" }}
            onMouseEnter={(e) => { (e.currentTarget.querySelector(".overlay") as HTMLElement).style.opacity = "0.7"; }}
            onMouseLeave={(e) => { (e.currentTarget.querySelector(".overlay") as HTMLElement).style.opacity = "0.5"; }}
          >
            <Image src={categories[0].img} alt={categories[0].name} fill style={{ objectFit: "cover" }} />
            <div className="overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))", opacity: 0.5, transition: "opacity 0.2s" }} />
            <div style={{ position: "absolute", top: 16, left: 16, width: 40, height: 40, borderRadius: 10, backgroundColor: categories[0].iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, zIndex: 2 }}>
              {categories[0].emoji}
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24, zIndex: 2 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#FAFAFA", marginBottom: 8 }}>⚽ {categories[0].name}</div>
              <div style={{ fontSize: 13, color: "rgba(250,250,250,0.8)", lineHeight: 1.4 }}>{categories[0].desc}</div>
            </div>
          </div>
          </Animate>

          {/* Other categories */}
          {categories.slice(1).map((cat, i) => (
            <Animate key={cat.name} type="fadeInUp" delay={0.15 + i * 0.08}>
            <div
              style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 190, cursor: "default", height: "100%" }}
              onMouseEnter={(e) => { (e.currentTarget.querySelector(".overlay") as HTMLElement).style.opacity = "0.7"; }}
              onMouseLeave={(e) => { (e.currentTarget.querySelector(".overlay") as HTMLElement).style.opacity = "0.5"; }}
            >
              <Image src={cat.img} alt={cat.name} fill style={{ objectFit: "cover" }} />
              <div className="overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))", opacity: 0.5, transition: "opacity 0.2s" }} />
              <div style={{ position: "absolute", top: 12, left: 12, width: 36, height: 36, borderRadius: 10, backgroundColor: cat.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, zIndex: 2 }}>
                {cat.emoji}
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", zIndex: 2 }}>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#FAFAFA", marginBottom: 6 }}>{cat.emoji} {cat.name}</div>
                <div style={{ fontSize: 12, color: "rgba(250,250,250,0.8)", lineHeight: 1.4 }}>{cat.desc}</div>
              </div>
            </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
