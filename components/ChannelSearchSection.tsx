"use client";
import { useState, useEffect } from "react";
import { CHANNELS } from "@/lib/channels";

const COUNTRY_SUGGESTIONS: Record<string, string[]> = {
  MA: ["2M Maroc", "Al Aoula", "Arryadia", "beIN Sports Arabia", "MBC Maroc", "Medi 1 TV"],
  DZ: ["ENTV", "Canal Algérie", "Ennahar TV", "beIN Sports Arabia", "Dzair TV", "Hoggar TV"],
  TN: ["Wataniya 1", "Hannibal TV", "beIN Sports Arabia", "Nessma TV", "El Hiwar Ettounsi", "Al Janoubia"],
  FR: ["TF1", "M6", "Canal+", "beIN Sports", "France 2", "BFM TV"],
  BE: ["VRT 1", "RTL-TVI", "La Une", "VTM", "Play Sports", "RTBF"],
  CH: ["SRF 1", "RTS Un", "RSI La 1", "blue Sport", "SRF zwei", "MySports"],
  GB: ["BBC One", "ITV", "Sky Sports", "BT Sport", "Channel 4", "Premier League"],
  ES: ["La 1", "Antena 3", "Telecinco", "DAZN España", "Movistar+", "La Liga TV"],
  IT: ["Rai 1", "Canale 5", "DAZN Italia", "Sky Sport Italia", "Italia 1", "Serie A TV"],
  DE: ["Das Erste", "ZDF", "RTL", "Sky Sport", "ProSieben", "Bundesliga TV"],
  NL: ["NPO 1", "RTL 4", "Ziggo Sport", "SBS6", "Eredivisie Live", "NOS"],
  PT: ["RTP1", "SIC", "TVI", "Sport TV", "Benfica TV", "Porto Canal"],
  SE: ["SVT1", "TV4", "C More", "Viaplay", "TV3 Sweden", "Kanal 5"],
  SA: ["MBC1", "Al Arabiya", "beIN Sports Arabia", "SSC Sport", "Rotana", "SBC"],
  AE: ["Dubai TV", "Abu Dhabi TV", "beIN Sports Arabia", "MBC", "Al Jazeera", "Abu Dhabi Sports"],
  EG: ["Al Nahar TV", "MBC Masr", "DMC", "ON E", "Sada El Balad", "Shahid"],
  SN: ["RTS Sénégal", "TFM", "2STV", "beIN Sports Arabia", "Sen TV", "Canal Info"],
  CI: ["RTI 1", "La 3", "beIN Sports Arabia", "NCI", "Vibe", "Canal+ Côte d'Ivoire"],
  US: ["ESPN", "NFL Network", "NBC Sports", "Fox Sports", "CNN", "HBO"],
  CA: ["CBC", "TSN", "Sportsnet", "CTV", "RDS", "TVA Sports"],
};

const DEFAULT_SUGGESTIONS = ["TF1", "M6", "Canal+", "beIN Sports", "2M Maroc", "Arryadia"];

export default function ChannelSearchSection() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>(DEFAULT_SUGGESTIONS);
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipinfo.io/json")
      .then(r => r.json())
      .then(data => {
        const cc = data.country as string;
        setCountry(cc);
        setSuggestions(COUNTRY_SUGGESTIONS[cc] ?? DEFAULT_SUGGESTIONS);
      })
      .catch(() => {});
  }, []);

  const results = query.trim().length >= 2
    ? CHANNELS.filter(ch => ch.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  const showResults = query.trim().length >= 2;

  return (
    <section style={{
      background: "linear-gradient(135deg, #0d0d1a 0%, #1a1035 50%, #0d0d1a 100%)",
      padding: "72px 24px",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.15)", color: "#D1D5DB", borderRadius: 20, padding: "4px 16px", fontSize: 13, marginBottom: 20 }}>
          📺 35 000+ Chaînes
        </div>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 12, fontFamily: "inherit" }}>
          Votre chaîne préférée est-elle disponible ?
        </h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>
          Recherchez parmi notre catalogue de 35 000+ chaînes en direct
        </p>

        {/* Search input */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", fontSize: 20 }}>🔍</span>
          <input
            type="text"
            placeholder="Recherchez votre chaîne préférée..."
            value={query}
            onChange={e => setQuery(e.target.value)}
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

        {/* IP-based suggestions */}
        {!showResults && (
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 12, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {country ? "🌍 Populaires près de vous" : "Chaînes populaires"}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {suggestions.map((ch, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(ch)}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 50,
                    padding: "7px 16px",
                    fontSize: 13,
                    color: "#D1D5DB",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(34,211,238,0.12)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(34,211,238,0.35)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#22D3EE";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#D1D5DB";
                  }}
                >
                  📺 {ch}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div style={{ textAlign: "left", marginTop: 8 }}>
            {results.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {results.map((ch, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    backgroundColor: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)",
                    borderRadius: 12, padding: "14px 18px",
                  }}>
                    <span style={{ fontSize: 15, color: "#FAFAFA", fontWeight: 500 }}>📺 {ch}</span>
                    <span style={{ fontSize: 13, color: "#34D399", fontWeight: 700 }}>✅ Disponible</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                backgroundColor: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 12, padding: "14px 18px",
              }}>
                <span style={{ fontSize: 15, color: "#FAFAFA", fontWeight: 500 }}>📺 {query}</span>
                <span style={{ fontSize: 13, color: "#34D399", fontWeight: 700 }}>✅ Disponible</span>
              </div>
            )}

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
                🎁 Essayez gratuitement 24h
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
