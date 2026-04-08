"use client";
import { Animate } from "@/components/Animate";
const services = ["Abonnements Premium", "Films & Séries 4K", "Sport en Direct", "Support 24/7"];
const contact = ["📞 +447446248557", "📧 contact@lensscrafts.com", "🕒 Support 7j/7 10h-23h"];
const coverage = ["🌍 Europe", "🌍 Amérique", "🌍 Afrique", "🌍 Monde entier"];
const legal = ["À Propos", "Conditions Générales", "Politique de Confidentialité", "Politique de Remboursement", "Contact"];

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#FAFAFA", letterSpacing: 1, textTransform: "uppercase" as const, marginBottom: 16 }}>
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 6 }}>
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.8, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080B0F", paddingTop: 64, paddingBottom: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <Animate type="fadeInUp">
        {/* Grid */}
        <div
          className="footer-grid-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: 40,
          }}
        >
          {/* Brand col */}
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                background: "linear-gradient(to right, #257BF4, #E63333)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Lenscraft
            </div>
            <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.6, marginTop: 12, maxWidth: 220 }}>
              Streaming TV Premium International — Films, Séries & Chaînes TV en 4K
            </p>
          </div>

          <FooterCol title="Services" items={services} />
          <FooterCol title="Contact" items={contact} />
          <FooterCol title="Couverture" items={coverage} />
          <FooterCol title="Légal" items={legal} />
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 48, paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "#6B7280" }}>© 2024 Lenscraft — Tous droits réservés.</p>
        </div>
        </Animate>
      </div>
    </footer>
  );
}
