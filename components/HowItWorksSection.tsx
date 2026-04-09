export default function HowItWorksSection() {
  const steps = [
    {
      icon: "🛒",
      title: "1. Pick a Plan",
      desc: "Just go through checkout with one of our many secured payment methods.",
    },
    {
      icon: "✉️",
      title: "2. Receive Instructions and Codes",
      desc: "You'll receive everything by email or WhatsApp. If it takes longer than expected, feel free to follow up via email.",
    },
    {
      icon: "🎬",
      title: "3. Enjoy Your IPTV Subscription",
      desc: "Instantly access your favorite channels, movies, and series. Dive into endless entertainment with our IPTV service. Watch anytime, anywhere.",
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
          How does it work?
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
