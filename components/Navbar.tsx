"use client";
import { useState, useEffect } from "react";
import { PhoneCall, Menu, X, Globe2 } from "@/components/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Tarifs", href: "#pricing" },
    { label: "Fonctionnement", href: "#comment-ca-marche" },
    { label: "Support", href: "#support" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 64,
          backgroundColor: scrolled ? "rgba(14,17,21,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <span
              style={{
                background: "linear-gradient(to right, #257BF4, #E63333)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              Lenscraft
            </span>
          </a>

          {/* Desktop nav links */}
          <div
            style={{ display: "flex", gap: 32, alignItems: "center" }}
            className="hidden md:flex"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(250,250,250,0.8)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#FAFAFA")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(250,250,250,0.8)")
                }
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "rgba(250,250,250,0.8)",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8,
                padding: "6px 12px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "border-color 0.2s",
              }}
            >
              <Globe2 size={14} />
              العربية
            </button>
            <button
              onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 14,
                fontWeight: 600,
                color: "#FFFFFF",
                background: "#257BF4",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#1193D4")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#257BF4")
              }
            >
              <PhoneCall size={14} />
              Contacter
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(250,250,250,0.8)",
                cursor: "pointer",
                padding: 4,
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            zIndex: 49,
            backgroundColor: "rgba(14,17,21,0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#FAFAFA",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
