"use client";
import { useState, useEffect } from "react";
import { MessageCircle, ChevronDown } from "@/components/icons";

export default function FloatingElements() {
  const [showPill, setShowPill] = useState(true);

  useEffect(() => {
    const onScroll = () =>
      setShowPill(window.scrollY < window.innerHeight * 0.9);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      {/* Découvrir nos offres pill — bottom center */}
      {showPill && (
        <button
          onClick={() =>
            document
              .getElementById("pricing")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            position: "fixed",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 40,
            background: "linear-gradient(135deg,#E63333,#C2185B)",
            borderRadius: 24,
            padding: "10px 24px",
            border: "none",
            color: "white",
            fontSize: 14,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 8,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 20px rgba(230,51,51,0.4)",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "filter 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter = "brightness(1.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = "brightness(1)")
          }
        >
          🔥 Découvrir nos offres
          <ChevronDown size={16} />
        </button>
      )}
    </>
  );
}
