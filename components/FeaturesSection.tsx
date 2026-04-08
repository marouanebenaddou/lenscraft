"use client";
import { ShieldCheck, Zap, Headphones, RotateCcw, RefreshCw, Wifi, Star } from "@/components/icons";
import { Animate } from "@/components/Animate";

const features = [
  {
    icon: <ShieldCheck size={24} color="white" />,
    gradient: "linear-gradient(135deg, #14B8A6, #06B6D4)",
    title: "Garantie Satisfait ou Remboursé",
    desc: "7 jours pour tester, remboursement intégral si vous n'êtes pas satisfait",
  },
  {
    icon: <Zap size={24} color="white" />,
    gradient: "linear-gradient(135deg, #F97316, #EF4444)",
    title: "Activation Instantanée",
    desc: "Recevez vos accès en moins de 5 minutes après paiement",
  },
  {
    icon: <Headphones size={24} color="white" />,
    gradient: "linear-gradient(135deg, #EC4899, #8B5CF6)",
    title: "Support VIP 7j/7",
    desc: "Assistance technique disponible de 10h à 23h tous les jours",
  },
  {
    icon: <RotateCcw size={24} color="white" />,
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
    title: "Replay 7 Jours",
    desc: "Revoir vos émissions des 7 derniers jours quand vous voulez",
  },
  {
    icon: <RefreshCw size={24} color="white" />,
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
    title: "Mises à Jour Automatiques",
    desc: "Nouvelles chaînes et contenus ajoutés régulièrement",
  },
  {
    icon: <Wifi size={24} color="white" />,
    gradient: "linear-gradient(135deg, #8B5CF6, #6366F1)",
    title: "Anti-Freeze Technologie",
    desc: "Serveurs optimisés pour un streaming sans coupure",
  },
  {
    icon: <Star size={24} color="white" />,
    gradient: "linear-gradient(135deg, #FBBF24, #F59E0B)",
    title: "Qualité 4K Ultra HD",
    desc: "Image cristalline sur toutes vos chaînes favorites",
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              Pourquoi Choisir Lenscraft ?
            </h2>
            <p style={{ fontSize: 16, color: "#9CA3AF", maxWidth: 600, margin: "0 auto" }}>
              Découvrez tous les avantages qui font de nous le leader du streaming IPTV au Maroc
            </p>
          </div>
        </Animate>

        {/* 4-col grid, 7 cards */}
        <div className="features-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {features.map((f, i) => (
            <Animate key={f.title} type="fadeInUp" delay={0.1 + i * 0.07}>
              <div
                style={{
                  backgroundColor: "rgba(17,24,39,0.6)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(37,123,244,0.3)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: f.gradient, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#FAFAFA", lineHeight: 1.3 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
