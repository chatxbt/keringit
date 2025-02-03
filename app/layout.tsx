import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { jsonLd, seoMetadata } from "@/lib/seo";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = seoMetadata;

export const viewport: Viewport = {
  userScalable: false,
  maximumScale: 1.0,
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${quicksand.className} antialiased`}>
        <NavBar />
        <main style={{ minHeight: "calc(100vh - 10rem)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
