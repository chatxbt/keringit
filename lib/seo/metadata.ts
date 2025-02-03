import { Metadata } from "next";

const BASE_URL = "https://keringit.com";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Keringit | Transform GitHub Repositories into AI-Ready Text Digests",
  description:
    "Keringit simplifies codebase analysis by transforming GitHub repositories into concise text digests. Perfect for feeding codebases into LLMs, creating interactive documentation, and deploying AI-assisted custom versions.",

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
    "Keringit",
    "GitHub repository analyzer",
    "codebase text digest",
    "AI-ready codebases",
    "LLM code integration",
    "GitHub to text converter",
    "codebase documentation",
    "AI-assisted code analysis",
    "interactive code documentation",
    "GitHub repository insights",
    "codebase structure breakdown",
    "AI-powered code tools",
    "developer tools",
    "codebase optimization",
    "GitHub automation",
    "AI code assistant",
    "codebase ingestion",
    "LLM-friendly code",
    "GitHub repository insights",
    "codebase simplification",
    "AI-driven development",
    "GitHub repository documentation",
    "codebase analysis tool",
    "AI code integration",
    "developer productivity tools",
    "GitHub repository management",
    "codebase transformation",
    "AI codebase assistant",
    "GitHub repository digest",
    "codebase insights",
  ],

  authors: [{ name: "Keringit Team", url: BASE_URL }],
  category: "Technology",
  creator: "ChatXBT Team",
  publisher: "ChatXBT Team",

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
    siteName: "Keringit",
    title:
      "Keringit | Transform GitHub Repositories into AI-Ready Text Digests",
    description:
      "Keringit simplifies codebase analysis by transforming GitHub repositories into concise text digests. Perfect for feeding codebases into LLMs, creating interactive documentation, and deploying AI-assisted custom versions.",
    images: [
      {
        url: `${BASE_URL}/og-image.png?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "Keringit - GitHub Repository Analyzer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Keringit - Transform GitHub Repositories into AI-Ready Text Digests",
    description:
      "Simplify your codebase analysis with Keringit. Transform GitHub repositories into concise text digests for LLMs, interactive documentation, and AI-assisted deployments.",
    creator: "@Keringit",
    images: [`${BASE_URL}/og-image.png?v=${VERSION}`],
  },

  other: {
    "telegram:channel": "@Keringit",
    "og:image:width": "1200",
    "og:image:height": "630",
    "cache-control": "no-cache, no-store, must-revalidate",
    pragma: "no-cache",
    expires: "0",
  },
};
