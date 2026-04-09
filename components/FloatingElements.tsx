"use client";
import { MessageCircle } from "@/components/icons";

export default function FloatingElements() {
  return (
    <>
      {/* WhatsApp bubble — bottom right */}
      <a
        href="https://wa.me/447446248557"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 40,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "linear-gradient(135deg,#22C55E,#16A34A)",
          boxShadow: "0 4px 20px rgba(34,197,94,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.2s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.1)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <MessageCircle size={24} color="white" />
      </a>
    </>
  );
}
