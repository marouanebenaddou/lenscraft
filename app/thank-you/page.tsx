"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function ThankYouContent() {
  const router = useRouter();
  const params = useSearchParams();
  const [seconds, setSeconds] = useState(10);

  const clientWa = params.get("wa") || "";
  const waMsg = encodeURIComponent(
    `Bonjour, je souhaite tester Lenscraft gratuitement 24h. Mon numéro WhatsApp : ${clientWa}`
  );
  const waLink = `https://wa.me/447446248557?text=${waMsg}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) { clearInterval(interval); router.push("/"); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0E1115",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "inherit",
      }}
    >
      <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>

        {/* Animated checkmark */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22C55E, #16A34A)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
            fontSize: 48,
            boxShadow: "0 0 60px rgba(34,197,94,0.35)",
            animation: "pulse-green 2s ease-in-out infinite",
          }}
        >
          ✓
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 800,
            color: "#FAFAFA",
            marginBottom: 16,
            lineHeight: 1.15,
          }}
        >
          Demande reçue avec succès !
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 18,
            color: "#9CA3AF",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 440,
            margin: "0 auto 40px",
          }}
        >
          Merci pour votre intérêt. Un agent Lenscraft va vous contacter{" "}
          <strong style={{ color: "#FAFAFA" }}>très prochainement</strong> sur
          votre WhatsApp pour configurer votre essai gratuit ou finaliser votre
          abonnement.
        </p>

        {/* Info card */}
        <div
          style={{
            backgroundColor: "rgba(17,24,39,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            padding: "28px 32px",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "⚡", text: "Temps de réponse habituel : moins de 5 minutes" },
              { icon: "🕒", text: "Support disponible 7j/7 de 10h à 23h" },
              { icon: "🔒", text: "Vos données sont sécurisées et confidentielles" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: "#9CA3AF", lineHeight: 1.5 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp button */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "linear-gradient(135deg, #22C55E, #16A34A)",
            color: "white",
            borderRadius: 12,
            padding: "16px 40px",
            fontSize: 17,
            fontWeight: 700,
            textDecoration: "none",
            marginBottom: 20,
            transition: "filter 0.2s, transform 0.2s",
            boxShadow: "0 8px 32px rgba(34,197,94,0.3)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <span style={{ fontSize: 22 }}>💬</span>
          Contacter sur WhatsApp maintenant
        </a>

        {/* Back link */}
        <div>
          <button
            onClick={() => router.push("/")}
            style={{
              background: "transparent",
              border: "none",
              color: "#6B7280",
              fontSize: 13,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ← Retour au site ({seconds}s)
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 40px rgba(34,197,94,0.35); }
          50% { box-shadow: 0 0 80px rgba(34,197,94,0.6); }
        }
      `}</style>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
