"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "@/components/icons";
import { Animate } from "@/components/Animate";

const faqs = [
  {
    q: "Comment fonctionne votre service de streaming ?",
    a: "Notre service IPTV vous permet de regarder des milliers de chaînes en direct et du contenu VOD via une application compatible. Après paiement, vous recevez vos identifiants en moins de 5 minutes et vous pouvez commencer à regarder immédiatement.",
  },
  {
    q: "Sur quels appareils puis-je utiliser le service ?",
    a: "Le service est compatible avec Smart TV (Samsung, LG, Sony), Android TV, Amazon Fire Stick, smartphones et tablettes iOS/Android, et ordinateurs (Windows, Mac, Linux). Toute installation peut être guidée par notre équipe technique.",
  },
  {
    q: "Quelle vitesse internet est nécessaire ?",
    a: "Pour une qualité HD nous recommandons au minimum 10 Mbps, et 25 Mbps pour profiter du contenu en 4K Ultra HD. Une connexion Wi-Fi stable ou filaire est préférable pour une expérience optimale.",
  },
  {
    q: "Comment fonctionne le test gratuit de 24h ?",
    a: "Contactez-nous via WhatsApp avec votre nom, numéro et ville. Nous vous envoyons des identifiants d'accès complets dans les 5 minutes. Vous bénéficiez d'un accès illimité pendant 24h, sans carte de crédit requise.",
  },
  {
    q: "Le service est-il fiable ? Y a-t-il des coupures ?",
    a: "Grâce à notre technologie Anti-Freeze et nos serveurs optimisés, nous garantissons un taux de disponibilité de 99.9%. Les rares interruptions sont corrigées en temps réel par notre équipe technique disponible 24h/24.",
  },
  {
    q: "Quels modes de paiement acceptez-vous ?",
    a: "Nous acceptons : Visa/Mastercard (-10% de réduction), Virement Bancaire, Wafacash, CashPlus, PayPal, Remitly, Western Union, Binance et Compte Europe. Tous les paiements sont sécurisés.",
  },
  {
    q: "Combien de temps dure l'activation ?",
    a: "L'activation est immédiate — vos identifiants vous sont envoyés dans les 5 minutes suivant la confirmation de votre paiement, 7j/7 de 10h à 23h.",
  },
  {
    q: "Puis-je utiliser le service à l'étranger ?",
    a: "Oui, notre service est disponible dans plus de 150 pays à travers le monde. Peu importe où vous vous trouvez, vous pouvez profiter de tout notre catalogue en HD/4K.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <Animate type="fadeInUp">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", color: "#9CA3AF", borderRadius: 20, padding: "4px 16px", fontSize: 12, marginBottom: 20 }}>
              FAQ
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 12 }}>
              <span style={{ color: "#FAFAFA" }}>Questions </span>
              <span style={{ background: "linear-gradient(to right, #EC4899, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Fréquentes
              </span>
            </h2>
            <p style={{ fontSize: 16, color: "#9CA3AF" }}>Tout ce que vous devez savoir avant de vous abonner</p>
          </div>
        </Animate>

        {/* FAQ list */}
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Animate key={i} type="fadeInUp" delay={0.05 + i * 0.05}>
              <div
                style={{ backgroundColor: "rgba(17,24,39,0.6)", border: `1px solid ${isOpen ? "rgba(37,123,244,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "left" }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#FAFAFA", paddingRight: 16 }}>{faq.q}</span>
                  <ChevronDown size={18} color="#9CA3AF" style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                </button>
                {isOpen && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <p style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.7, marginTop: 12 }}>{faq.a}</p>
                  </div>
                )}
              </div>
              </Animate>
            );
          })}
        </div>

        {/* Footer CTA */}
        <Animate type="fadeInUp" delay={0.2}>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ fontSize: 16, color: "#9CA3AF", marginBottom: 16 }}>Vous avez d&apos;autres questions ?</p>
          <a
            href="https://wa.me/447446248557"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white", borderRadius: 8, padding: "12px 24px", fontSize: 15, fontWeight: 600, textDecoration: "none", transition: "filter 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
          >
            <MessageCircle size={18} />
            Contactez-nous sur WhatsApp
          </a>
        </div>
        </Animate>
      </div>
    </section>
  );
}
