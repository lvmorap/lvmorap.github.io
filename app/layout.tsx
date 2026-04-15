import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lvmorap.github.io"),
  title: "Valeria Mora Parra | Data & AI Portfolio",
  description:
    "Economist transitioning to Data Science and AI with QA and systems validation experience.",
  openGraph: {
    title: "Valeria Mora Parra | Data & AI Portfolio",
    description:
      "Economist | Incoming MSc in Artificial Intelligence | QA Analyst | Data & AI Enthusiast",
    url: "https://lvmorap.github.io",
    siteName: "Valeria Mora Parra Portfolio",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Valeria Mora Parra Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
