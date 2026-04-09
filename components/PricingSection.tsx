"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Star, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Animate } from "@/components/Animate";
import * as PricingCard from "@/components/ui/pricing-card";

// ── Data ─────────────────────────────────────────────────────────────────────

const premiumPlans = [
  { label: "3 Mois", price: "149 DH", original: "249 DH", perPeriod: "50 DH/mois" },
  { label: "6 Mois", price: "199 DH", original: "349 DH", perPeriod: "33 DH/mois", discount: "-33%" },
  { label: "12 Mois", price: "299 DH", original: "499 DH", perPeriod: "25 DH/mois", discount: "-50%" },
];

const goldPlans = [
  { label: "3 Mois", price: "199 DH", original: "349 DH", perPeriod: "66 DH/mois" },
  { label: "6 Mois", price: "299 DH", original: "449 DH", perPeriod: "50 DH/mois", discount: "-33%" },
  { label: "12 Mois", price: "499 DH", original: "699 DH", perPeriod: "42 DH/mois", discount: "-50% 🏆" },
];

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
  "Replay 24h sur les chaînes sélectionnées",
  "Guide EPG électronique complet",
  "Support prioritaire 24/7",
  "Compatible tous les appareils",
];

const goldLocked = [
  "VOD : Netflix, Prime, Disney+…",
  "Contenu international premium",
  "2ème abonnement à 150 DH (offre 12 mois)",
];

const paymentMethods = [
  { name: "Visa/Mastercard", img: "/images/payments/visa-mastercard.png", badge: "-10%" },
  { name: "Virement", img: "/images/payments/virement-bancaire.png", badge: null },
  { name: "Wafacash", img: "/images/payments/wafacash.png", badge: null },
  { name: "CashPlus", img: "/images/payments/cashplus.png", badge: null },
  { name: "PayPal", img: "/images/payments/paypal.png", badge: null },
  { name: "Remitly", img: "/images/payments/remitly.png", badge: null },
  { name: "Western Union", img: "/images/payments/western-union.png", badge: null },
  { name: "Binance", img: "/images/payments/binance.png", badge: null },
  { name: "Banques", img: "/images/payments/banques.png", badge: null },
  { name: "Compte EU", img: "/images/payments/compte-europe.png", badge: null },
];

// ── Plan Selector ─────────────────────────────────────────────────────────────

function PlanSelector({ value, onChange, plans, accent }: {
  value: number;
  onChange: (n: number) => void;
  plans: { label: string }[];
  accent: string;
}) {
  return (
    <div className="flex gap-1.5 mb-3">
      {plans.map((p, n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={cn(
            "flex-1 rounded-lg py-1.5 text-xs font-semibold border transition-all cursor-pointer",
            value === n
              ? "text-white"
              : "border-white/10 bg-white/5 text-white/50 hover:text-white/80"
          )}
          style={value === n ? { borderColor: accent, backgroundColor: `${accent}18`, color: accent } : {}}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [premiumIdx, setPremiumIdx] = useState(0);
  const [goldIdx, setGoldIdx] = useState(0);

  const prem = premiumPlans[premiumIdx];
  const gold = goldPlans[goldIdx];

  return (
    <section id="pricing" className="bg-[#0E1115] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <Animate type="fadeInUp">
          <div className="text-center mb-14">
            <span className="inline-block border border-white/15 text-[#D1D5DB] rounded-full px-4 py-1 text-xs mb-5">
              💎 Offres Exclusives
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Abonnement Streaming Premium
            </h2>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              🎥 Accès illimité à +40 000 Films & Séries + 35 000 Chaînes TV en direct — Qualité 4K garantie sans coupure
            </p>
          </div>
        </Animate>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mb-10">

          {/* ── PREMIUM ── */}
          <Animate type="fadeInLeft" delay={0.1}>
            <PricingCard.Card className="w-full max-w-sm">
              <PricingCard.Header>
                <PricingCard.Plan>
                  <PricingCard.PlanName>
                    <Zap className="text-cyan-400" />
                    <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">Premium</span>
                  </PricingCard.PlanName>
                  <PricingCard.Badge className="border-cyan-400/30 text-cyan-300">
                    Essentiel
                  </PricingCard.Badge>
                </PricingCard.Plan>

                <PlanSelector value={premiumIdx} onChange={setPremiumIdx} plans={premiumPlans} accent="#22D3EE" />

                <PricingCard.Price>
                  <PricingCard.MainPrice className="text-white">{prem.price}</PricingCard.MainPrice>
                  <PricingCard.OriginalPrice>{prem.original}</PricingCard.OriginalPrice>
                </PricingCard.Price>
                <p className="text-xs text-white/40 mb-2">{prem.perPeriod}</p>

                {prem.discount && (
                  <div className="text-xs font-bold text-cyan-400 mb-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1 inline-block">
                    {prem.discount}
                  </div>
                )}

                <button
                  onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full font-semibold text-white rounded-lg py-2.5 text-sm transition-all cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #22D3EE, #0891B2)", boxShadow: "0 8px 20px rgba(34,211,238,0.25)" }}
                >
                  🎁 Tester maintenant
                </button>
              </PricingCard.Header>

              <PricingCard.Body>
                <PricingCard.List>
                  {premiumFeatures.map((item) => (
                    <PricingCard.ListItem key={item}>
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-white/75">{item}</span>
                    </PricingCard.ListItem>
                  ))}
                </PricingCard.List>
              </PricingCard.Body>
            </PricingCard.Card>
          </Animate>

          {/* ── GOLD ── */}
          <Animate type="fadeInRight" delay={0.15}>
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-black text-xs font-bold rounded-full px-4 py-1.5 whitespace-nowrap shadow-lg">
                <Crown className="h-3 w-3" /> RECOMMANDÉ
              </div>

              <PricingCard.Card
                className="w-full border-amber-400/40"
                style={{ boxShadow: "0 0 40px rgba(251,191,36,0.12)" }}
              >
                <PricingCard.Header className="border-amber-400/20">
                  <PricingCard.Plan>
                    <PricingCard.PlanName>
                      <Crown className="text-amber-400" />
                      <span className="text-amber-400 font-bold tracking-widest text-xs uppercase">Gold</span>
                    </PricingCard.PlanName>
                    <PricingCard.Badge className="border-amber-400/30 text-amber-300">
                      ⭐ Premium
                    </PricingCard.Badge>
                  </PricingCard.Plan>

                  <PlanSelector value={goldIdx} onChange={setGoldIdx} plans={goldPlans} accent="#FBBF24" />

                  <PricingCard.Price>
                    <PricingCard.MainPrice className="text-white">{gold.price}</PricingCard.MainPrice>
                    <PricingCard.OriginalPrice>{gold.original}</PricingCard.OriginalPrice>
                  </PricingCard.Price>
                  <p className="text-xs text-white/40 mb-2">{gold.perPeriod}</p>

                  {gold.discount && (
                    <div className="text-xs font-bold text-amber-400 mb-3 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 inline-block">
                      {gold.discount}
                    </div>
                  )}

                  <button
                    onClick={() => document.getElementById("free-test")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full font-semibold text-black rounded-lg py-2.5 text-sm transition-all cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #FBBF24, #F59E0B)", boxShadow: "0 8px 20px rgba(251,191,36,0.3)" }}
                  >
                    🔥 Choisir Gold
                  </button>
                </PricingCard.Header>

                <PricingCard.Body>
                  <PricingCard.List>
                    {goldFeatures.map((item) => (
                      <PricingCard.ListItem key={item}>
                        <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                        <span className="text-white/75">{item}</span>
                      </PricingCard.ListItem>
                    ))}
                  </PricingCard.List>

                  <PricingCard.Separator>Exclusivités Gold</PricingCard.Separator>

                  <PricingCard.List>
                    {goldLocked.map((item) => (
                      <PricingCard.ListItem key={item}>
                        <Star className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                        <span className="text-white/75">{item}</span>
                      </PricingCard.ListItem>
                    ))}
                  </PricingCard.List>
                </PricingCard.Body>
              </PricingCard.Card>
            </div>
          </Animate>
        </div>

        {/* Payment discount banner */}
        <Animate type="fadeInUp" delay={0.2}>
          <div className="bg-emerald-400/8 border border-emerald-400/20 rounded-xl py-3 px-6 text-center text-emerald-400 text-sm font-medium mb-10">
            💳 -10% de réduction pour paiement par carte bancaire
          </div>
        </Animate>

        {/* Payment methods */}
        <Animate type="fadeInUp" delay={0.25}>
          <h3 className="text-base font-semibold text-white text-center mb-5">Modes de paiement acceptés</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-8">
            {paymentMethods.map((p) => (
              <div key={p.name} className="relative bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center gap-2">
                {p.badge && (
                  <span className="absolute -top-2 -right-2 bg-cyan-400 text-black text-[9px] font-bold rounded-full px-1.5 py-0.5">
                    {p.badge}
                  </span>
                )}
                <div className="relative w-12 h-7">
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: "contain" }} />
                </div>
                <span className="text-[9px] text-gray-400 font-medium text-center leading-tight">{p.name}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {["🔒 Paiement sécurisé", "⚡ Activation instantanée", "🛡 Support dédié"].map((item) => (
              <span key={item} className="text-xs text-gray-500">{item}</span>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
}
