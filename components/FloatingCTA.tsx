"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: `translateX(-50%) translateY(${visible ? "0" : "100px"})`,
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s ease, opacity 0.35s ease",
        zIndex: 999,
        display: "none",
      }}
      className="floating-cta"
    >
      <button
        onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "linear-gradient(135deg, #22D3EE, #257BF4)",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 50,
          padding: "14px 28px",
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "inherit",
          boxShadow: "0 4px 24px rgba(34,211,238,0.45)",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ fontSize: 18 }}>🎁</span>
        Essai Gratuit 24h
      </button>
      <style>{`
        @media (max-width: 768px) {
          .floating-cta { display: block !important; }
        }
      `}</style>
    </div>
  );
}
