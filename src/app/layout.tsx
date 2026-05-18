import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

// Self-hosted via next/font (same families/weights as Google Fonts; no extra preconnect).
const fontFraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const OPENING =
  "A manifesto for an AI-native school built for places where school still does not reach.";

const faviconSvg = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="#000"/></svg>'
);

export const metadata: Metadata = {
  title: "AI-Native University - Josué Godeme",
  description: OPENING,
  openGraph: {
    title: "AI-Native University - Josué Godeme",
    description: OPENING,
    type: "article",
  },
  icons: {
    icon: `data:image/svg+xml,${faviconSvg}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontFraunces.variable} ${fontInter.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
