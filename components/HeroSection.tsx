"use client";
import Image from "next/image";
import { Zap, MessageSquare, CheckCircle, Tv, Film, Shield } from "@/components/icons";
import { Animate } from "@/components/Animate";

export default function HeroSection() {
  const featureCards = [
    { icon: <Zap size={22} color="white" />, bg: "#F97316", label: "Test gratuit 24h" },
    { icon: <Tv size={22} color="white" />, bg: "#22D3EE", label: "+35 000 chaînes" },
    { icon: <Film size={22} color="white" />, bg: "#EC4899", label: "Films & séries 4K" },
    { icon: <Shield size={22} color="white" />, bg: "#34D399", label: "Service stable 24/7" },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#0E1115",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 64,
      }}
    >
      {/* Full-width background image */}
      <Image
        src="https://xperi.com/wp-content/uploads/2023/09/Xperi.com-Blog-Header-1280-%C3%97-720-px-26.png"
        alt="Family watching TV"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(14,17,21,0.88) 0%, rgba(14,17,21,0.62) 50%, rgba(14,17,21,0.88) 100%)",
        }}
      />

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, #0E1115, transparent)",
          zIndex: 2,
        }}
      />

      {/* Content — centered */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 24px 120px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge */}
        <Animate type="fadeInUp" delay={0.1}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid #34D399",
              borderRadius: 20,
              padding: "5px 16px",
              marginBottom: 24,
            }}
          >
            <CheckCircle size={14} color="#34D399" />
            <span style={{ fontSize: 13, color: "#34D399", fontWeight: 500 }}>
              Garantie satisfait ou remboursé
            </span>
          </div>
        </Animate>

        {/* Headline */}
        <Animate type="fadeInUp" delay={0.2}>
          <h1
            style={{
              fontSize: "clamp(40px, 5.5vw, 76px)",
              fontWeight: 800,
              color: "#FAFAFA",
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-1px",
            }}
          >
            Votre cinéma TV{" "}
            <span
              style={{
                background: "linear-gradient(to right, #257BF4, #E63333)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              illimité à la maison !
            </span>
          </h1>
        </Animate>

        {/* Subtitle */}
        <Animate type="fadeInUp" delay={0.3}>
          <p
            style={{
              fontSize: 17,
              color: "rgba(250,250,250,0.85)",
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 680,
            }}
          >
            Profitez d&apos;un accès illimité à{" "}
            <strong style={{ color: "#FAFAFA", fontWeight: 700 }}>
              +35 000 chaînes en direct
            </strong>{" "}
            et{" "}
            <strong style={{ color: "#FAFAFA", fontWeight: 700 }}>
              +70 000 films & séries
            </strong>{" "}
            en qualité HD/4K —{" "}
            <strong style={{ color: "#FAFAFA", fontWeight: 700 }}>
              0 coupure, 0 freeze
            </strong>
            . Notre équipe est disponible{" "}
            <strong style={{ color: "#FAFAFA", fontWeight: 700 }}>
              7j/7 de 10h à 23h
            </strong>{" "}
            pour vous accompagner. Testez gratuitement et rejoignez des milliers de clients satisfaits !
          </p>
        </Animate>

        {/* CTA Buttons */}
        <Animate type="fadeInUp" delay={0.4}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32, justifyContent: "center" }}>
            <button
              onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, #257BF4 0%, #1193D4 100%)",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 10,
                padding: "14px 32px",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Zap size={18} />
              Tester maintenant
            </button>
            <button
              onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(14,17,21,0.6)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#FAFAFA",
                borderRadius: 10,
                padding: "14px 32px",
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)")}
            >
              <MessageSquare size={18} />
              Nous contacter
            </button>
          </div>
        </Animate>

        {/* Rating */}
        <Animate type="fadeInUp" delay={0.5}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 56,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#FACC15", fontSize: 18 }}>★</span>
              ))}
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#FAFAFA" }}>4.9/5</span>
            <span style={{ fontSize: 14, color: "#9CA3AF" }}>– +2 300 clients</span>
          </div>
        </Animate>

        {/* Feature cards */}
        <div
          className="mobile-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
            width: "100%",
            maxWidth: 720,
          }}
        >
          {featureCards.map((card, i) => (
            <Animate key={card.label} type="scaleIn" delay={0.6 + i * 0.08}>
              <div
                style={{
                  backgroundColor: "rgba(17,24,39,0.75)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  padding: "18px 12px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  textAlign: "center",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: card.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#FAFAFA", lineHeight: 1.3 }}>
                  {card.label}
                </span>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
