"use client";

export default function PrivacyPolicy() {
  return (
    <div style={{
      background: "#0a0a0f",
      minHeight: "100vh",
      padding: "80px 24px",
      fontFamily: "inherit",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        <div style={{ marginBottom: 48 }}>
          <a href="/" style={{ color: "#22D3EE", fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
            ← Retour à l'accueil
          </a>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#FFFFFF", marginBottom: 12 }}>
            Politique de Confidentialité
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>
            Dernière mise à jour : Avril 2025 — Lenscraft
          </p>
        </div>

        {[
          {
            title: "1. Qui sommes-nous",
            content: `Lenscraft ("nous") exploite une plateforme de divertissement numérique et des services associés destinés aux clients en France, en Europe et à l'international. Nous nous engageons à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).

Contact : contact@lensscrafts.com`,
          },
          {
            title: "2. Données collectées",
            content: `Lors de votre demande d'essai gratuit ou de contact, nous pouvons collecter :
• Nom complet
• Numéro de téléphone (WhatsApp)
• Adresse e-mail
• Type d'appareil / préférences
• Adresse IP et pays (pour la personnalisation du service)
• Données soumises via Facebook Lead Ads

Nous ne collectons pas directement vos coordonnées bancaires.`,
          },
          {
            title: "3. Utilisation de vos données",
            content: `Nous utilisons vos données personnelles pour :
• Vous contacter via WhatsApp pour configurer votre essai gratuit ou abonnement
• Envoyer des communications liées au service
• Améliorer notre plateforme et l'expérience utilisateur
• Personnaliser le contenu selon votre pays/région
• Respecter nos obligations légales

Nous ne vendons, ne louons ni ne partageons vos données avec des tiers à des fins commerciales.`,
          },
          {
            title: "4. Base légale du traitement",
            content: `Nous traitons vos données sur les bases légales suivantes :
• Consentement — lorsque vous soumettez un formulaire de contact ou d'essai
• Intérêts légitimes — pour répondre à votre demande et fournir le service
• Contrat — pour remplir nos obligations d'abonnement`,
          },
          {
            title: "5. Communication WhatsApp",
            content: `En soumettant votre numéro de téléphone, vous consentez à être contacté via WhatsApp pour la mise en place de votre essai gratuit ou abonnement. Vous pouvez vous désabonner à tout moment en répondant "STOP" à n'importe quel message WhatsApp.`,
          },
          {
            title: "6. Facebook Lead Ads",
            content: `Si vous soumettez vos coordonnées via un formulaire instantané Facebook, vos données sont transférées de Meta Platforms vers nos systèmes via une API sécurisée. Ces données sont utilisées uniquement pour vous contacter au sujet de notre service. La politique de confidentialité de Meta s'applique également aux données collectées via leur plateforme.`,
          },
          {
            title: "7. Conservation des données",
            content: `Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services ou comme requis par la loi. Si vous annulez votre abonnement ou retirez votre consentement, nous supprimerons vos données dans les 30 jours suivant votre demande.`,
          },
          {
            title: "8. Vos droits (RGPD)",
            content: `Conformément au RGPD, vous disposez des droits suivants :
• Accès à vos données personnelles
• Rectification des données inexactes
• Suppression de vos données ("droit à l'oubli")
• Opposition ou limitation du traitement
• Portabilité des données
• Retrait du consentement à tout moment

Pour exercer ces droits : contact@lensscrafts.com`,
          },
          {
            title: "9. Cookies",
            content: `Notre site utilise des cookies minimaux à des fins de fonctionnement et d'analyse. Nous n'utilisons pas de cookies publicitaires tiers. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.`,
          },
          {
            title: "10. Sécurité",
            content: `Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé. Toutes les données sont transmises via des connexions chiffrées (HTTPS).`,
          },
          {
            title: "11. Modifications",
            content: `Nous pouvons mettre à jour cette politique de confidentialité. La version la plus récente sera toujours disponible sur cette page avec la date de mise à jour.`,
          },
          {
            title: "12. Nous contacter",
            content: `Pour toute question relative à la confidentialité :
📧 contact@lensscrafts.com
📞 WhatsApp : +447446248557`,
          },
        ].map((section, i) => (
          <div key={i} style={{
            marginBottom: 36,
            paddingBottom: 36,
            borderBottom: i < 11 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", marginBottom: 12 }}>
              {section.title}
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {section.content}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
