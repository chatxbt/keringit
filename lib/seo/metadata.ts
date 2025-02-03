import { Metadata } from "next";

const BASE_URL = "https://keringit.com";

const VERSION = Date.now();

export const seoMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Keringit | Transform GitHub Repos into AI-Ready Documentation",
  description:
    "Transform your GitHub repositories into interactive documentation with Keringit. Analyze codebases, generate comprehensive digests, and leverage AI assistance for better code understanding.",

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
    "Keringit documentation",
    "GitHub repository analysis",
    "Code documentation generator",
    "AI documentation assistant",
    "Repository structure analyzer",
    "Code digest generator",
    "GitHub codebase analysis",
    "Interactive documentation",
    "AI-powered code analysis",
    "Repository visualization",
    "Code understanding tool",
    "Developer documentation",
    "Code exploration platform",
    "Repository documentation",
    "AI code assistant",
    "Code breakdown tool",
    "Repository structure visualization",
    "Automated documentation",
    "Code analysis platform",
    "Developer productivity tool",
    "Keringit",
    "GitHub",
    "documentation",
    "code analysis",
    "artificial intelligence",
    "repository management",
    "software development",
    "code understanding",
    "development tools",
    "code documentation",
    "version control",
    "code structure",
    "software engineering",
    "code organization",
    "development workflow",
  ],

  authors: [{ name: "Keringit", url: BASE_URL }],
  category: "Technology",
  creator: "Keringit",
  publisher: "Keringit",

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
    title: "Keringit | Transform GitHub Repos into AI-Ready Documentation",
    description:
      "Convert your GitHub repositories into comprehensive documentation with AI assistance. Analyze codebases, understand structure, and generate interactive documentation effortlessly.",
    images: [
      {
        url: `${BASE_URL}/og-image.png?v=${VERSION}`,
        width: 1200,
        height: 630,
        alt: "Keringit - GitHub Repository Documentation Generator",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Keringit - GitHub Repository Documentation Generator",
    description:
      "Transform your GitHub repositories into interactive documentation. Analyze codebases, understand structure, and generate comprehensive documentation with AI assistance.",
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
