import { Metadata } from "next";

import { BASE_URL } from "../constants/seo";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Keringit | GitHub Repository Analysis & Documentation Generator",
  description:
    "Transform GitHub repositories into comprehensive documentation with Keringit's AI-powered analysis. Generate digestible code summaries, interactive documentation, and deep insights into your codebase structure.",

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
    "GitHub repository analysis",
    "Code documentation generator",
    "AI code analysis",
    "Repository structure analyzer",
    "Code documentation tool",
    "GitHub code summary",
    "Interactive documentation",
    "Code digestion tool",
    "Repository visualization",
    "AI documentation assistant",
    "Code structure analysis",
    "GitHub integration",
    "Developer documentation",
    "Code insight generator",
    "Repository breakdown",
    "LLM code integration",
    "Code documentation platform",
    "GitHub repository explorer",
    "AI code documentation",
    "Code analysis platform",
    "Keringit",
    "GitHub",
    "code analysis",
    "documentation",
    "artificial intelligence",
    "developer tools",
    "code structure",
    "repository management",
    "code insights",
    "software documentation",
    "code organization",
    "development workflow",
    "code understanding",
    "repository analysis",
    "code documentation",
  ],

  authors: [{ name: "ChatXBT Team", url: BASE_URL }],
  category: "Developer Tools",
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
      "Keringit | Transform GitHub Repositories into Interactive Documentation",
    description:
      "Convert any GitHub repository into a comprehensive, digestible text summary with Keringit's AI-powered analysis. Generate interactive documentation and gain deep insights into your codebase structure.",
    images: [
      {
        url: `${BASE_URL}/og-image.png?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "Keringit - GitHub Repository Analysis & Documentation",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Keringit - GitHub Repository Analysis & Documentation Generator",
    description:
      "Transform your GitHub repositories into clear, comprehensive documentation. Keringit analyzes your codebase and generates interactive documentation with AI assistance.",
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
