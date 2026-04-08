"use client";
import { Animate } from "@/components/Animate";

const movies = [
  { rank: 1, img: "https://dublinview.com/wp-content/uploads/2026/02/1.png" },
  { rank: 2, img: "https://dublinview.com/wp-content/uploads/2026/02/2.png" },
  { rank: 3, img: "https://dublinview.com/wp-content/uploads/2026/02/3.png" },
  { rank: 4, img: "https://dublinview.com/wp-content/uploads/2026/02/4.png" },
  { rank: 5, img: "https://dublinview.com/wp-content/uploads/2026/02/5.png" },
  { rank: 6, img: "https://dublinview.com/wp-content/uploads/2026/02/6.png" },
  { rank: 7, img: "https://dublinview.com/wp-content/uploads/2026/02/7.png" },
  { rank: 8, img: "https://dublinview.com/wp-content/uploads/2026/02/8.png" },
];

export default function TrendingSection() {
  return (
    <section style={{ backgroundColor: "#0a0c10", padding: "80px 0 96px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-block", background: "rgba(229,57,53,0.12)", border: "1px solid rgba(229,57,53,0.3)", color: "#EF5350", borderRadius: 20, padding: "4px 16px", fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
              🔥 Tendances
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
              Top 8 du moment
            </h2>
            <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 500, margin: "0 auto" }}>
              Films, séries et shows disponibles dès maintenant sur votre abonnement
            </p>
          </div>
        </Animate>

        {/* Grid — 4 cols desktop, 2 cols mobile */}
        <div className="trending-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {movies.map((movie, i) => (
            <Animate key={movie.rank} type="scaleIn" delay={i * 0.07}>
              <div
                style={{ position: "relative", borderRadius: 14, overflow: "hidden", aspectRatio: "2/3", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  (e.currentTarget.querySelector(".poster-img") as HTMLElement).style.transform = "scale(1.07)";
                  (e.currentTarget.querySelector(".rank-num") as HTMLElement).style.opacity = "0.4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.querySelector(".poster-img") as HTMLElement).style.transform = "scale(1)";
                  (e.currentTarget.querySelector(".rank-num") as HTMLElement).style.opacity = "1";
                }}
              >
                {/* Poster with zoom */}
                <img
                  className="poster-img"
                  src={movie.img}
                  alt={`Top ${movie.rank}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />

                {/* Dark gradient at bottom for rank number */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
                  pointerEvents: "none",
                }} />

                {/* Rank number */}
                <div
                  className="rank-num"
                  style={{
                    position: "absolute",
                    bottom: -8,
                    left: 6,
                    fontSize: "clamp(64px, 9vw, 90px)",
                    fontWeight: 900,
                    color: "transparent",
                    WebkitTextStroke: "3px rgba(255,255,255,0.95)",
                    lineHeight: 1,
                    userSelect: "none",
                    zIndex: 2,
                    transition: "opacity 0.4s ease",
                  }}
                >
                  {movie.rank}
                </div>
              </div>
            </Animate>
          ))}
        </div>

        {/* Bottom note */}
        <Animate type="fadeIn" delay={0.5}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <span style={{ fontSize: 13, color: "#6B7280" }}>
              +70 000 films & séries disponibles · Mis à jour chaque semaine
            </span>
          </div>
        </Animate>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .trending-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
