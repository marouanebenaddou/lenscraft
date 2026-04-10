"use client";
import { useState, useEffect } from "react";

function ViewerCount() {
  const BASE = 24 + Math.floor(Math.random() * 18);
  const [count, setCount] = useState(BASE);
  useEffect(() => {
    const iv = setInterval(() => {
      setCount(prev => Math.max(14, Math.min(52, prev + Math.floor(Math.random() * 5) - 2)));
    }, 13000);
    return () => clearInterval(iv);
  }, []);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
      <span style={{ fontSize: 15 }}>👁️</span>
      <span style={{ fontSize: 13, color: "#D1D5DB", fontWeight: 500 }}>
        <span style={{ color: "#FCD34D", fontWeight: 700 }}>{count}</span> personnes consultent en ce moment
      </span>
    </div>
  );
}

const STORAGE_KEY = "lenscraft_offer_expiry";
const DURATION_MS = 24 * 60 * 60 * 1000;

function Countdown() {
  const [ms, setMs] = useState(DURATION_MS);
  useEffect(() => {
    let expiry = parseInt(localStorage.getItem(STORAGE_KEY) || "0");
    if (!expiry || expiry <= Date.now()) {
      expiry = Date.now() + DURATION_MS;
      localStorage.setItem(STORAGE_KEY, expiry.toString());
    }
    const tick = () => setMs(Math.max(0, expiry - Date.now()));
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
      <span style={{ fontSize: 15 }}>⏳</span>
      <span style={{ fontSize: 13, color: "#D1D5DB", fontWeight: 500 }}>
        Offre expire dans{" "}
        <span style={{ color: "#F87171", fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.05em" }}>
          {pad(h)}:{pad(m)}:{pad(s)}
        </span>
      </span>
    </div>
  );
}

export default function FOMOBar() {
  return (
    <>
      <style>{`
        @keyframes fomo-bar-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .fomo-live-dot { width:8px;height:8px;border-radius:50%;background:#22C55E;animation:fomo-bar-pulse 2s ease-in-out infinite;flex-shrink:0; }
        @media(max-width:480px){ .fomo-bar-inner{flex-direction:column!important;gap:8px!important} .fomo-bar-divider{display:none!important} }
      `}</style>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <div style={{
          display: "inline-flex", alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 40, padding: "9px 20px",
        }}>
          <div className="fomo-bar-inner" style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className="fomo-live-dot" />
            <ViewerCount />
            <div className="fomo-bar-divider" style={{ width: 1, height: 16, backgroundColor: "rgba(255,255,255,0.1)" }} />
            <Countdown />
          </div>
        </div>
      </div>
    </>
  );
}
