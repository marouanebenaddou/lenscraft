"use client";
import { Animate } from "@/components/Animate";

const movies = [
  { rank: 1, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/1.png" },
  { rank: 2, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/2.png" },
  { rank: 3, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/3.png" },
  { rank: 4, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/4.png" },
  { rank: 5, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/5.png" },
  { rank: 6, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/6.png" },
  { rank: 7, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/7.png" },
  { rank: 8, title: "", img: "https://dublinview.com/wp-content/uploads/2026/02/8.png" },
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
              Top 10 du moment
            </h2>
            <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 500, margin: "0 auto" }}>
              Films, séries et shows disponibles dès maintenant sur votre abonnement
            </p>
          </div>
        </Animate>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 16,
        }}
          className="trending-grid"
        >
          {movies.map((movie, i) => (
            <Animate key={movie.rank} type="scaleIn" delay={i * 0.06}>
              <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", aspectRatio: "2/3", cursor: "default" }}
                onMouseEnter={(e) => {
                  (e.currentTarget.querySelector(".trend-overlay") as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.querySelector(".trend-overlay") as HTMLElement).style.opacity = "0";
                }}
              >
                {/* Poster */}
                <img
                  src={movie.img}
                  alt={movie.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/300x450/1a1a2e/FFFFFF?text=" + encodeURIComponent(movie.title); }}
                />

                {/* Rank number */}
                <div style={{
                  position: "absolute",
                  bottom: -6,
                  left: -4,
                  fontSize: "clamp(56px, 8vw, 80px)",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "3px rgba(255,255,255,0.9)",
                  lineHeight: 1,
                  userSelect: "none",
                  zIndex: 2,
                  textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                }}>
                  {movie.rank}
                </div>

                {/* Hover overlay */}
                <div className="trend-overlay" style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px 12px",
                  zIndex: 3,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#FAFAFA", lineHeight: 1.3 }}>{movie.title}</span>
                </div>
              </div>
            </Animate>
          ))}
        </div>

        {/* Bottom badge */}
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
        @media (min-width: 768px) and (max-width: 1023px) {
          .trending-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
