import { Metadata } from "next";

const BASE_URL = "https://keringit.com";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "SolCycle | First Solana Sentient Explorer",
  description:
    "Navigate the Solana ecosystem with confidence using SolCycle's AI-powered explorer. Get real-time insights, smart transaction analysis, and expert guidance for optimal blockchain interaction.",

  icons: {
    icon: [
      { url: `${BASE_URL}/favicon.ico` },
      { url: `${BASE_URL}/android-chrome-192x192.png`, type: "image/png" },
      { url: `${BASE_URL}/android-chrome-512x512.png`, type: "image/png" },
    ],
    apple: [
      { url: `${BASE_URL}/apple-touch-icon.png` },
      { url: `${BASE_URL}/apple-touch-icon.png`, sizes: "180x180" },
    ],
    other: [{ rel: "mask-icon", url: `${BASE_URL}/favicon.svg` }],
  },

  keywords: [
    "SolCycle AI explorer",
    "Solana blockchain assistant",
    "AI-powered Solana navigation",
    "Solana ecosystem insights",
    "Blockchain transaction guidance",
    "Solana AI agent",
    "Smart blockchain explorer",
    "Solana network analysis",
    "Cryptocurrency AI assistant",
    "Intelligent blockchain tools",
    "Solana transaction helper",
    "Blockchain AI integration",
    "Solana market insights",
    "Crypto portfolio optimization",
    "Decentralized finance assistant",
    "Solana DeFi tools",
    "Blockchain intelligence platform",
    "Crypto market analysis",
    "Solana ecosystem navigator",
    "Web3 AI platform",
    "SolCycle",
    "Solana",
    "blockchain explorer",
    "cryptocurrency",
    "artificial intelligence",
    "DeFi",
    "blockchain technology",
    "digital assets",
    "crypto analytics",
    "Web3",
    "smart contracts",
    "blockchain data",
    "crypto infrastructure",
    "decentralized applications",
    "blockchain automation",
  ],

  authors: [{ name: "Solana open good", url: BASE_URL }],
  category: "Technology",
  creator: "Solana open Good",
  publisher: "Solana open Good",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "SolCycle",
    title: "SolCycle | First Solana Sentient Explorer",
    description:
      "Unlock the full potential of Solana with SolCycle's intelligent AI agent. Experience seamless navigation, smart insights, and expert guidance for your blockchain journey.",
    images: [
      {
        url: `${BASE_URL}/og-image.png?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "SolCycle - Solana Sentient Explorer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SolCycle - First Solana Sentient Explorer",
    description:
      "Meet your AI-powered Solana companion. SolCycle delivers instant expertise and intelligent insights to help you navigate the Solana ecosystem with confidence.",
    creator: "@SolCycle",
    images: [`${BASE_URL}/og-image.png?v=${VERSION}`],
  },

  other: {
    "telegram:channel": "@SolCycle",
    "og:image:width": "1200",
    "og:image:height": "630",
    "cache-control": "no-cache, no-store, must-revalidate",
    pragma: "no-cache",
    expires: "0",
  },
};
