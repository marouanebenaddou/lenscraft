"use client";
import { useState } from "react";
import { CHANNELS } from "@/lib/channels";

export default function ChannelSearchSection() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const results = query.trim().length >= 2
    ? CHANNELS.filter(ch => ch.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  // Always show "available" — if no match, still confirm availability
  const showAvailable = query.trim().length >= 2;

  return (
    <section style={{
      background: "linear-gradient(135deg, #0d0d1a 0%, #1a1035 50%, #0d0d1a 100%)",
      padding: "72px 24px",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        {/* Title */}
        <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.15)", color: "#D1D5DB", borderRadius: 20, padding: "4px 16px", fontSize: 13, marginBottom: 20 }}>
          📺 35,000+ Channels
        </div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 12, fontFamily: "inherit" }}>
          Is your favourite channel available?
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>
          Search from our library of 35,000+ live channels
        </p>

        {/* Search input */}
        <div style={{ position: "relative", marginBottom: 24 }}>
          <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 20 }}>🔍</span>
          <input
            type="text"
            placeholder="Search your favourite channel..."
            value={query}
            onChange={e => { setQuery(e.target.value); setSearched(true); }}
            style={{
              width: "100%",
              padding: "18px 18px 18px 52px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.07)",
              color: "#FAFAFA",
              fontSize: 16,
              fontFamily: "inherit",
              outline: "none",
              boxSizing: "border-box",
              backdropFilter: "blur(10px)",
            }}
          />
        </div>

        {/* Results */}
        {showAvailable && (
          <div style={{ textAlign: "left" }}>
            {results.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {results.map((ch, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    backgroundColor: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)",
                    borderRadius: 12, padding: "14px 18px",
                  }}>
                    <span style={{ fontSize: 15, color: "#FAFAFA", fontWeight: 500 }}>📺 {ch}</span>
                    <span style={{ fontSize: 13, color: "#34D399", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                      ✅ Available
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              // No exact match — still confirm available
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                backgroundColor: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 12, padding: "14px 18px",
              }}>
                <span style={{ fontSize: 15, color: "#FAFAFA", fontWeight: 500 }}>📺 {query}</span>
                <span style={{ fontSize: 13, color: "#34D399", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                  ✅ Available
                </span>
              </div>
            )}

            {/* CTA below results */}
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <button
                onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: "linear-gradient(135deg, #22D3EE, #257BF4)",
                  color: "#fff", border: "none", borderRadius: 50,
                  padding: "13px 32px", fontSize: 15, fontWeight: 700,
                  cursor: "pointer", fontFamily: "inherit",
                  boxShadow: "0 4px 20px rgba(34,211,238,0.35)",
                }}
              >
                🎁 Try it free for 24h
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
