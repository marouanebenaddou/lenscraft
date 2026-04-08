"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Phone, Clock, Shield, Zap } from "@/components/icons";
import { Animate } from "@/components/Animate";

export default function FreeTestSection() {
  const router = useRouter();
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const callingCodes: Record<string, string> = {
      MA: "+212", FR: "+33", BE: "+32", CH: "+41", ES: "+34", IT: "+39",
      DE: "+49", GB: "+44", NL: "+31", PT: "+351", CA: "+1", US: "+1",
      DZ: "+213", TN: "+216", SN: "+221", CI: "+225", CM: "+237",
      SA: "+966", AE: "+971", QA: "+974", KW: "+965", EG: "+20",
      TR: "+90", SE: "+46", NO: "+47", DK: "+45", FI: "+358",
      PL: "+48", RO: "+40", AU: "+61", BR: "+55", MX: "+52",
    };
    fetch("https://ipinfo.io/json")
      .then((r) => r.json())
      .then((data) => {
        const code = callingCodes[data.country];
        if (code) setWhatsapp(code);
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Remove leading 0 after country code e.g. +212 0612... → +212 612...
    const cleanWa = whatsapp.replace(/^(\+\d+)\s*0+/, "$1");
    // Notify owner immediately (fire-and-forget — direct to ngrok bot)
    const payload = {
      object: "page",
      entry: [{ changes: [{ field: "leadgen", value: {
        leadgen_id: `lenscraft_${Date.now()}`,
        form_id: "lenscraft_free_test",
        page_id: "lenscraft_website",
        field_data: [
          { name: "phone_number", values: [cleanWa] },
          { name: "email", values: [email] },
        ],
      }}]}],
    };
    fetch("https://lenscraft.ngrok.app/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
    // Redirect to thank-you page with number for the WhatsApp button
    router.push(`/thank-you?wa=${encodeURIComponent(cleanWa)}`);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    padding: "12px 16px",
    color: "#FAFAFA",
    fontSize: 15,
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const features = [
    { icon: <Clock size={20} color="#EC4899" />, iconBg: "rgba(236,72,153,0.2)", title: "24h Complètes", desc: "Accès illimité pendant 24 heures à tous nos services" },
    { icon: <Shield size={20} color="#257BF4" />, iconBg: "rgba(37,123,244,0.2)", title: "Sans Engagement", desc: "Aucune carte de crédit requise, annulation automatique" },
    { icon: <Zap size={20} color="#FBBF24" />, iconBg: "rgba(251,191,36,0.2)", title: "Activation Instantanée", desc: "Recevez vos identifiants par email en moins de 5 minutes" },
  ];

  return (
    <section id="free-test" style={{ backgroundColor: "#0E1115", padding: "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Top header */}
        <Animate type="fadeInUp">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: "#34D399", marginBottom: 8 }}>Test Gratuit 24h</h3>
          <p style={{ fontSize: 15, color: "#9CA3AF", maxWidth: 500, margin: "0 auto" }}>
            Testez notre service pendant 24h gratuitement. Aucun engagement, aucune carte de crédit requise.
          </p>
        </div>
        </Animate>

        {/* Form card */}
        <Animate type="fadeInUp" delay={0.15}>
        <div style={{ backgroundColor: "rgba(17,24,39,0.8)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 40, maxWidth: 560, margin: "0 auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <Phone size={22} color="#EC4899" />
            <span style={{ fontSize: 22, fontWeight: 700, color: "#FAFAFA" }}>Contact Direct WhatsApp</span>
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label style={{ fontSize: 14, fontWeight: 500, color: "rgba(250,250,250,0.8)", display: "block", marginBottom: 6 }}>Numéro WhatsApp</label>
              <input
                style={inputStyle}
                placeholder="+33 6 12 34 56 78"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "#34D399")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <div>
              <label style={{ fontSize: 14, fontWeight: 500, color: "rgba(250,250,250,0.8)", display: "block", marginBottom: 6 }}>Adresse email</label>
              <input
                style={inputStyle}
                placeholder="votre@email.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={(e) => (e.target.style.borderColor = "#34D399")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <button
              type="submit"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg, #22C55E, #16A34A)", color: "white", border: "none", borderRadius: 10, padding: "14px 24px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", width: "100%", transition: "filter 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
            >
              <Phone size={18} />
              Envoyer ma demande sur WhatsApp
            </button>
            <p style={{ fontSize: 12, color: "#6B7280", textAlign: "center", marginTop: 8 }}>
              WhatsApp s&apos;ouvrira avec votre demande pré-remplie — appuyez sur <strong style={{ color: "#9CA3AF" }}>Envoyer</strong> pour confirmer.
            </p>
          </form>
        </div>
        </Animate>

        {/* 3 Features */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 680, margin: "48px auto 0" }}>
          {features.map((f, i) => (
            <Animate key={f.title} type="fadeInUp" delay={0.2 + i * 0.1}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: f.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {f.icon}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#FAFAFA" }}>{f.title}</div>
              <div style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.5 }}>{f.desc}</div>
            </div>
            </Animate>
          ))}
        </div>

        {/* What you can test */}
        <div style={{ backgroundColor: "rgba(17,24,39,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, maxWidth: 560, margin: "32px auto 0" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#9CA3AF", marginBottom: 16, textAlign: "center" }}>Ce que vous pouvez tester :</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#F97316", marginBottom: 4 }}>Tous les bouquets</div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>Canal+, OCS, Paramount+, Sport...</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#EC4899", marginBottom: 4 }}>Bibliothèque Complète</div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>20 000+ films et séries</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#FBBF24", marginBottom: 4 }}>Qualité Premium</div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>Qualité 4K, Full HD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
