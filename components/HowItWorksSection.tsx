export default function HowItWorksSection() {
  const steps = [
    {
      icon: "🛒",
      title: "1. Choisissez un abonnement",
      desc: "Passez simplement à la caisse avec l'un de nos nombreux moyens de paiement sécurisés.",
    },
    {
      icon: "✉️",
      title: "2. Recevez vos identifiants et codes",
      desc: "Vous recevrez tout par e-mail ou WhatsApp. Si cela prend plus de temps que prévu, n'hésitez pas à nous contacter par e-mail.",
    },
    {
      icon: "🎬",
      title: "3. Profitez de votre abonnement IPTV",
      desc: "Accédez instantanément à vos chaînes, films et séries préférés. Plongez dans un divertissement sans fin avec notre service IPTV. Regardez à tout moment, partout.",
    },
  ];

  return (
    <section
      id="comment-ca-marche"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a1035 50%, #0d0d1a 100%)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#FAFAFA",
            marginBottom: 56,
            fontFamily: "inherit",
          }}
        >
          Comment ça marche ?
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(145deg, #6b3fa0 0%, #9b59d0 50%, #b06ee8 100%)",
                borderRadius: 20,
                padding: "36px 28px",
                textAlign: "center",
                boxShadow: "0 8px 32px rgba(107,63,160,0.35)",
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.15)",
                  fontSize: 32,
                  marginBottom: 20,
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: 14,
                  lineHeight: 1.3,
                  fontFamily: "inherit",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
