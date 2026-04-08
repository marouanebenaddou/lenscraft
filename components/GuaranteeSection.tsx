import { ShieldCheck } from "@/components/icons";
import { Animate } from "@/components/Animate";

const stats = [
  { value: "100%", label: "Remboursement", desc: "Remboursement intégral si le service ne vous convient pas" },
  { value: "Tester", label: "7 Jours pour", desc: "Une semaine complète pour découvrir toutes les fonctionnalités" },
  { value: "Dédié", label: "Support", desc: "Notre équipe vous accompagne tout au long de votre essai" },
];

export default function GuaranteeSection() {
  return (
    <section style={{ backgroundColor: "#0A0D11", padding: "96px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        {/* Shield icon */}
        <Animate type="scaleIn">
          <div style={{ width: 96, height: 96, borderRadius: "50%", background: "linear-gradient(135deg, #14B8A6, #06B6D4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
            <ShieldCheck size={44} color="white" />
          </div>
        </Animate>

        {/* Heading */}
        <Animate type="fadeInUp" delay={0.1}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.1 }}>
            <span style={{ color: "#FAFAFA" }}>Garantie </span>
            <span style={{ background: "linear-gradient(to right, #257BF4, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Satisfait </span>
            <span style={{ color: "#FAFAFA" }}>ou </span>
            <span style={{ background: "linear-gradient(to right, #E63333, #EC4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Remboursé</span>
          </h2>
        </Animate>

        <Animate type="fadeInUp" delay={0.2}>
          <p style={{ fontSize: 18, color: "#9CA3AF", maxWidth: 580, margin: "0 auto 56px", lineHeight: 1.6 }}>
            Testez notre service pendant 7 jours. Si vous n&apos;êtes pas satisfait, nous vous remboursons intégralement — sans questions.
          </p>
        </Animate>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 800, margin: "0 auto" }}>
          {stats.map((s, i) => (
            <Animate key={s.value} type="fadeInUp" delay={0.3 + i * 0.1}>
              <div style={{ backgroundColor: "rgba(17,24,39,0.6)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "32px 24px" }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "#FAFAFA", marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#9CA3AF", marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
