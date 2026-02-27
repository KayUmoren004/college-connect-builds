import type { Metadata, Viewport } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: { default: "College Connect", template: "%s | College Connect" },
  description:
    "Find study partners, event companions, and ride shares within the verified RIT community.",
  keywords: [
    "college connect",
    "RIT",
    "campus",
    "students",
    "Rochester Institute of Technology",
    "study buddy",
    "ride share",
    "campus events",
  ],
  authors: [{ name: "SWEN-732 Group 1" }],
  openGraph: {
    title: "College Connect",
    description:
      "Find study partners, event companions, and ride shares at RIT.",
    type: "website",
    locale: "en_US",
    siteName: "College Connect",
    url: "https://cc.g-umoren.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "College Connect",
    description:
      "Find study partners, event companions, and ride shares at RIT.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
