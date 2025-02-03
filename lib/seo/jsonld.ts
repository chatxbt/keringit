import { WithContext, WebSite } from "schema-dts";

import { BASE_URL } from "../constants/seo";

export const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Keringit",
  image: `${BASE_URL}/og-image.png`,
  description:
    "Transform GitHub repositories into AI-ready text digests with Keringit. Simplify codebase analysis, create interactive documentation, and deploy AI-assisted custom versions effortlessly.",
  provider: {
    "@type": "Organization",
    name: "ChatXBT Team",
    url: BASE_URL,
  },
  creator: "ChatXBT Team",
  thumbnailUrl: `${BASE_URL}/og-image.png`,
  keywords: [
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
  ],
};
