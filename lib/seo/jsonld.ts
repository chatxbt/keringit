import { WithContext, WebSite } from "schema-dts";

export const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Solcycle",
  image: `https://keringit.com/og-image.png`,
  description:
    "Maximize your Solana potential with an AI Agent that delivers instant expertise, transaction guidance, and cutting-edge ecosystem insights.",
  provider: {
    "@type": "Organization",
    name: "Open Good for Solana",
    url: "https://keringit.com",
  },
  creator: "ChatXBT Labs LTD.",
  thumbnailUrl: `https://keringit.com/og-image.png`,
  keywords: [
    "Solana explorer",
    "blockchain AI",
    "cryptocurrency analysis",
    "DeFi tools",
    "blockchain navigation",
  ],
};
