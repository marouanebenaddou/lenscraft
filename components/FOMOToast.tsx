"use client";
import { useState, useEffect, useRef } from "react";

const NAMES = [
  "Mohammed", "Youssef", "Fatima", "Aicha", "Karim", "Nadia", "Hassan", "Samira",
  "Omar", "Houda", "Rachid", "Khadija", "Tariq", "Leila", "Hamid", "Zineb",
  "Khalid", "Meryem", "Amine", "Soukaina", "Imane", "Younes", "Salma", "Reda",
  "Hajar", "Mehdi", "Loubna", "Saad", "Ghita", "Nassim", "Wafae", "Ilyas",
];

const ACTIONS = [
  "vient de démarrer un essai gratuit",
  "vient d'activer son abonnement",
  "vient de tester le service gratuitement",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function FOMOToast() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [action, setAction] = useState("");
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showNext = () => {
    setName(pick(NAMES));
    setAction(pick(ACTIONS));
    setVisible(true);
    setTimeout(() => setVisible(false), 9000);
  };

  useEffect(() => {
    const initial = setTimeout(() => {
      showNext();
      intervalRef.current = setInterval(showNext, 22000 + Math.random() * 8000);
    }, 7000);
    return () => {
      clearTimeout(initial);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fomo-slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fomo-slide-down {
          from { transform: translateY(0);    opacity: 1; }
          to   { transform: translateY(100%); opacity: 0; }
        }
        @keyframes fomo-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.8); }
        }
        .fomo-toast-enter { animation: fomo-slide-up 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .fomo-toast-exit  { animation: fomo-slide-down 0.4s ease-in forwards; }
      `}</style>

      <div
        key={name}
        className={visible ? "fomo-toast-enter" : "fomo-toast-exit"}
        style={{
          position: "fixed",
          bottom: 24,
          left: 20,
          zIndex: 9990,
          pointerEvents: visible ? "auto" : "none",
          maxWidth: 290,
          width: "calc(100vw - 40px)",
        }}
      >
        <div style={{
          backgroundColor: "rgba(10,12,18,0.97)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "linear-gradient(135deg, #D97706, #B45309)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 700, color: "white", flexShrink: 0,
            boxShadow: "0 0 0 2px rgba(217,119,6,0.25)",
          }}>
            {name ? name[0] : ""}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#FAFAFA", lineHeight: 1.4 }}>
              <span style={{ color: "#FCD34D" }}>{name}</span>
            </div>
            <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 2, lineHeight: 1.4 }}>{action}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 5 }}>
              <div style={{
                width: 7, height: 7, borderRadius: "50%", backgroundColor: "#22C55E",
                animation: "fomo-pulse-dot 2s ease-in-out infinite",
              }} />
              <span style={{ fontSize: 11, color: "#6B7280" }}>À l'instant</span>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            style={{
              background: "none", border: "none", color: "#4B5563",
              cursor: "pointer", fontSize: 18, lineHeight: 1,
              padding: "2px 4px", flexShrink: 0, alignSelf: "flex-start",
            }}
            aria-label="Fermer"
          >×</button>
        </div>
      </div>
    </>
  );
}
