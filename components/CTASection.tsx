"use client";
import { useState, useEffect } from "react";
import { Zap, PhoneCall } from "@/components/icons";
import { Animate } from "@/components/Animate";

export default function CTASection() {
  const [seconds, setSeconds] = useState(6 * 60 * 60); // 6 hours

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 6 * 60 * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #257BF4 0%, #1565C0 50%, #0D47A1 100%)",
        padding: "96px 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative radial glows */}
      <div style={{ position: "absolute", top: "20%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "15%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        <Animate type="scaleIn">
        {/* Lightning icon */}
        <div style={{ marginBottom: 20 }}>
          <Zap size={48} color="rgba(255,255,255,0.9)" />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "-1px",
          }}
        >
          Commencez à Regarder Aujourd&apos;hui
        </h2>

        {/* Description */}
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.6 }}>
          Rejoignez des milliers de clients satisfaits. Activez votre abonnement en 5 minutes et profitez de +25 000 chaînes.
        </p>

        {/* Countdown */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 24,
            padding: "8px 24px",
            marginBottom: 36,
          }}
        >
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.9)" }}>🕒 Offre promotionnelle expire dans</span>
          <span
            style={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#FACC15",
              fontSize: 18,
              letterSpacing: 2,
            }}
          >
            {hh}:{mm}:{ss}
          </span>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
          <button
            onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#FFFFFF",
              color: "#257BF4",
              border: "none",
              borderRadius: 10,
              padding: "14px 32px",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <PhoneCall size={18} color="#257BF4" />
            Tester maintenant
          </button>
          <button
            onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
              borderRadius: 10,
              padding: "14px 32px",
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)")}
          >
            <Zap size={18} />
            Tester gratuitement 24h
          </button>
        </div>

        {/* Trust badges */}
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
          ✅ Paiement sécurisé • ✅ Activation instantanée • ✅ Garantie 7 jours
        </p>
        </Animate>
      </div>
    </section>
  );
}
