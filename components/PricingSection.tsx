"use client";
import Image from "next/image";
import { Check, Zap, Crown } from "@/components/icons";
import { Animate } from "@/components/Animate";

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px 12px", textAlign: "center" }}>
      <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#FAFAFA", marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#9CA3AF" }}>{label}</div>
    </div>
  );
}

function FeatureCheck({ text, accent }: { text: string; accent: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
      <Check size={15} color={accent} style={{ flexShrink: 0, marginTop: 2 }} />
      <span style={{ fontSize: 13, color: "rgba(250,250,250,0.85)", lineHeight: 1.4 }}>{text}</span>
    </div>
  );
}

function PriceCol({ months, original, price, perMonth, badge, btnLabel, btnStyle, extra }: {
  months: string; original: string; price: string; perMonth: string;
  badge?: string; btnLabel: string; btnStyle: React.CSSProperties; extra?: string;
}) {
  return (
    <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px 16px", textAlign: "center", position: "relative" }}>
      {badge && (
        <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", backgroundColor: "#22D3EE", color: "#0E1115", borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{badge}</div>
      )}
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "#22D3EE", marginBottom: 8 }}>{months}</div>
      <div style={{ fontSize: 13, color: "#6B7280", textDecoration: "line-through", marginBottom: 4 }}>{original}</div>
      <div style={{ fontSize: 40, fontWeight: 800, color: "#FAFAFA", lineHeight: 1 }}>
        {price}<span style={{ fontSize: 18, fontWeight: 600 }}>DH</span>
      </div>
      <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 16 }}>{perMonth}</div>
      {extra && (
        <div style={{ backgroundColor: "rgba(52,211,153,0.15)", border: "1px solid rgba(52,211,153,0.3)", color: "#34D399", borderRadius: 6, fontSize: 12, padding: "4px 10px", marginBottom: 12 }}>{extra}</div>
      )}
      <button onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })} style={{ ...btnStyle, width: "100%", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", border: "1px solid" }}>
        {btnLabel}
      </button>
    </div>
  );
}

function GoldPriceCol({ months, original, price, perMonth, badge, btnLabel, btnStyle, badgeBg }: {
  months: string; original: string; price: string; perMonth: string;
  badge?: string; btnLabel: string; btnStyle: React.CSSProperties; badgeBg?: string;
}) {
  return (
    <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px 16px", textAlign: "center", position: "relative" }}>
      {badge && (
        <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", backgroundColor: badgeBg || "#FBBF24", color: "#0E1115", borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>{badge}</div>
      )}
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "#FBBF24", marginBottom: 8 }}>{months}</div>
      <div style={{ fontSize: 13, color: "#6B7280", textDecoration: "line-through", marginBottom: 4 }}>{original}</div>
      <div style={{ fontSize: 40, fontWeight: 800, color: "#FAFAFA", lineHeight: 1 }}>
        {price}<span style={{ fontSize: 18, fontWeight: 600 }}>DH</span>
      </div>
      <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 12 }}>{perMonth}</div>
      <div style={{ backgroundColor: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.3)", color: "#FBBF24", borderRadius: 6, fontSize: 11, padding: "3px 8px", marginBottom: 12 }}>↺ Replay 24h</div>
      <button onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })} style={{ ...btnStyle, width: "100%", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", border: "none" }}>
        {btnLabel}
      </button>
    </div>
  );
}

const premiumFeatures = [
  "Qualité HD / 4K sur tous vos écrans",
  "1 Application IPTV incluse",
  "1 Appareil connecté simultanément",
  "Activation immédiate en 5 min",
  "Support WhatsApp 7j/7",
  "Compatible Smart TV, Box, Mobile, PC",
  "Mises à jour automatiques",
  "Chaînes internationales incluses",
];

const goldFeatures = [
  "Qualité 4K Ultra HD premium",
  "3 Applications IPTV incluses",
  "1 Appareil connecté simultanément",
  "Technologie Anti-Freeze exclusive",
  "Replay 24h sur quelques chaînes",
  "Guide EPG électronique complet",
  "Support prioritaire 24/7",
  "Compatible tous les appareils",
  "Mises à jour automatiques",
  "Contenu international premium",
  "VOD Netflix, Prime, Disney+…",
  "Activation immédiate en 5 min",
];

const paymentMethods = [
  { name: "Visa/Mastercard", img: "/images/payments/visa-mastercard.png", badge: "-10%" },
  { name: "Virement Bancaire", img: "/images/payments/virement-bancaire.png", badge: null },
  { name: "Wafacash", img: "/images/payments/wafacash.png", badge: null },
  { name: "CashPlus", img: "/images/payments/cashplus.png", badge: null },
  { name: "Banques", img: "/images/payments/banques.png", badge: null },
  { name: "PayPal", img: "/images/payments/paypal.png", badge: null },
  { name: "Remitly", img: "/images/payments/remitly.png", badge: null },
  { name: "Western Union", img: "/images/payments/western-union.png", badge: null },
  { name: "Binance", img: "/images/payments/binance.png", badge: null },
  { name: "Compte Europe", img: "/images/payments/compte-europe.png", badge: null },
];

export default function PricingSection() {
  const tealBtnStyle: React.CSSProperties = {
    backgroundColor: "rgba(6,182,212,0.15)",
    color: "#67E8F9",
    borderColor: "rgba(6,182,212,0.3)",
  };

  return (
    <section id="pricing" style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Badge + Heading */}
        <Animate type="fadeInUp">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.15)", color: "#D1D5DB", borderRadius: 20, padding: "4px 16px", fontSize: 13, marginBottom: 20 }}>
            💎 Offres Exclusives
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#FAFAFA", marginBottom: 12 }}>
            Abonnement Streaming Premium
          </h2>
          <p style={{ fontSize: 14, color: "#9CA3AF" }}>
            🎥 Accès illimité à +40 000 Films & Séries + 35 000 Chaînes TV en direct - Qualité 4K garantie sans coupure !
          </p>
        </div>
        </Animate>

        {/* PREMIUM PLAN */}
        <Animate type="fadeInUp" delay={0.15}>
        <div style={{ backgroundColor: "#111827", border: "1px solid rgba(34,211,238,0.3)", borderRadius: 20, padding: "36px 32px", marginBottom: 24 }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "rgba(34,211,238,0.15)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.3)", borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, marginBottom: 16 }}>
              <Zap size={12} /> PREMIUM
            </div>
            <h3 style={{ fontSize: 32, fontWeight: 800, color: "#FAFAFA", marginBottom: 6 }}>Offre Premium</h3>
            <p style={{ fontSize: 14, color: "#9CA3AF" }}>L&apos;essentiel du streaming de qualité</p>
          </div>

          {/* 4 stat cards */}
          <div className="stat-cols-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
            <StatCard icon={<span style={{ fontSize: 22 }}>📺</span>} value="+25 000" label="Chaînes HD/4K" />
            <StatCard icon={<span style={{ fontSize: 22 }}>🎬</span>} value="+35 000" label="Films & Séries" />
            <StatCard icon={<span style={{ fontSize: 22 }}>📱</span>} value="1 App" label="Incluse" />
            <StatCard icon={<span style={{ fontSize: 22 }}>📶</span>} value="Stable" label="Connexion" />
          </div>

          {/* Features */}
          <div className="mobile-1col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px", marginBottom: 28 }}>
            {premiumFeatures.map((f) => <FeatureCheck key={f} text={f} accent="#22D3EE" />)}
          </div>

          {/* Price cols */}
          <div className="price-cols-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <PriceCol months="3 MOIS" original="249 DH" price="149" perMonth="50 DH/mois" btnLabel="🎁 Tester" btnStyle={tealBtnStyle} />
            <PriceCol months="6 MOIS" original="349 DH" price="199" perMonth="33 DH/mois" badge="-33%" btnLabel="🎁 Tester" btnStyle={tealBtnStyle} />
            <PriceCol months="12 MOIS" original="499 DH" price="299" perMonth="25 DH/mois" badge="-50%" extra="🎁 2ème abo à 150 DH" btnLabel="🎁 Tester" btnStyle={tealBtnStyle} />
          </div>
        </div>
        </Animate>

        {/* Divider */}
        <div style={{ textAlign: "center", margin: "24px 0", color: "#9CA3AF", fontSize: 12, fontWeight: 600, letterSpacing: 2 }}>
          ⬆ PASSEZ AU NIVEAU SUPÉRIEUR
        </div>

        {/* GOLD PLAN */}
        <Animate type="fadeInUp" delay={0.1}>
        <div style={{ position: "relative", backgroundColor: "#111827", border: "2px solid rgba(251,191,36,0.5)", borderRadius: 20, padding: "48px 32px 36px", boxShadow: "0 0 40px rgba(251,191,36,0.08)", marginBottom: 32 }}>
          {/* Recommended badge */}
          <div style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #FBBF24, #F59E0B)", color: "#0E1115", borderRadius: 20, padding: "5px 20px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 6 }}>
            <Crown size={13} /> RECOMMANDÉ
          </div>

          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "rgba(251,191,36,0.15)", color: "#FBBF24", border: "1px solid rgba(251,191,36,0.3)", borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 1.5, marginBottom: 16 }}>
              <Crown size={12} /> PREMIUM GOLD
            </div>
            <h3 style={{ fontSize: 32, fontWeight: 800, color: "#FAFAFA", marginBottom: 6 }}>
              Offre Premium <span style={{ color: "#FBBF24" }}>GOLD</span>
            </h3>
            <p style={{ fontSize: 14, color: "#9CA3AF", marginBottom: 12 }}>L&apos;expérience ultime du streaming • Tout inclus</p>
            <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 560, margin: "0 auto" }}>
              Profitez d&apos;un accès illimité à plus de{" "}
              <strong style={{ color: "#FBBF24" }}>trente-cinq mille chaînes</strong>{" "}
              en direct et plus de{" "}
              <strong style={{ color: "#FBBF24" }}>soixante-dix mille films et séries</strong>
            </p>
          </div>

          {/* 4 gold stat cards */}
          <div className="stat-cols-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
            <StatCard icon={<span style={{ fontSize: 22 }}>📺</span>} value="+35 000" label="Chaînes 4K" />
            <StatCard icon={<span style={{ fontSize: 22 }}>🎬</span>} value="+70 000" label="Films & Séries" />
            <StatCard icon={<span style={{ fontSize: 22 }}>📱</span>} value="3 Apps" label="Sur 1 appareil" />
            <StatCard icon={<span style={{ fontSize: 22 }}>❄️</span>} value="Anti-Freeze" label="Technologie" />
          </div>

          {/* Gold features */}
          <div style={{ marginBottom: 6 }}>
            <div style={{ fontSize: 13, color: "#FBBF24", fontWeight: 600, marginBottom: 12 }}>⭐ Avantages exclusifs Gold</div>
            <div className="mobile-1col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px", marginBottom: 16 }}>
              {goldFeatures.map((f) => <FeatureCheck key={f} text={f} accent="#FBBF24" />)}
            </div>
            <p style={{ fontSize: 12, color: "#9CA3AF" }}>Premium : 1 App → Gold : 3 Apps sur le même appareil</p>
          </div>

          {/* Gold price cols */}
          <div className="price-cols-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
            <GoldPriceCol months="3 MOIS" original="349 DH" price="199" perMonth="66 DH/mois" btnLabel="🎁 Tester" btnStyle={{ backgroundColor: "rgba(17,24,39,0.8)", color: "#FAFAFA" }} />
            <GoldPriceCol months="6 MOIS" original="449 DH" price="299" perMonth="50 DH/mois" badge="-33%" badgeBg="#FBBF24" btnLabel="🎁 Tester" btnStyle={{ backgroundColor: "rgba(17,24,39,0.8)", color: "#FAFAFA" }} />
            <GoldPriceCol months="12 MOIS" original="699 DH" price="499" perMonth="42 DH/mois" badge="-50% N°1" badgeBg="#FBBF24" btnLabel="🔥 Choisir" btnStyle={{ background: "linear-gradient(135deg, #FBBF24, #F59E0B)", color: "#0E1115", fontWeight: 700 }} />
          </div>
        </div>
        </Animate>

        {/* Payment discount banner */}
        <div style={{ backgroundColor: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 12, padding: "14px 24px", textAlign: "center", color: "#34D399", fontSize: 14, fontWeight: 500, marginBottom: 40 }}>
          💳 -10% de réduction si paiement par carte bancaire
        </div>

        {/* Payment methods */}
        <h3 style={{ fontSize: 18, fontWeight: 600, color: "#FAFAFA", textAlign: "center", marginBottom: 24 }}>
          Modes de paiement acceptés
        </h3>
        <div className="mobile-2col" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 24 }}>
          {paymentMethods.map((p) => (
            <div key={p.name} style={{ position: "relative", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 8px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              {p.badge && (
                <div style={{ position: "absolute", top: -8, right: -8, backgroundColor: "#22D3EE", color: "#0E1115", borderRadius: 10, padding: "1px 6px", fontSize: 10, fontWeight: 700 }}>{p.badge}</div>
              )}
              <div style={{ position: "relative", width: 80, height: 40 }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div style={{ fontSize: 10, color: "#9CA3AF", fontWeight: 500 }}>{p.name}</div>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          {["🔒 Paiement sécurisé", "⚡ Activation instantanée", "🛡 Support dédié"].map((t) => (
            <span key={t} style={{ fontSize: 13, color: "#9CA3AF" }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
