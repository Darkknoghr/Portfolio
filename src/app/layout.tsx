import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyrilnutsugah.vercel.app"),
  title: "Cyril Nutsugah | Portfolio",
  description: "Frontend Developer with a solid foundation in web technologies and cybersecurity.",
  openGraph: {
    title: "Cyril Nutsugah | Portfolio",
    description: "Frontend Developer with a solid foundation in web technologies and cybersecurity.",
    url: "https://cyrilnutsugah.vercel.app",
    siteName: "Cyril Nutsugah Portfolio",
    images: [
      {
        url: "https://cyrilnutsugah.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "U4TjIMp68pZSe5gKfVvrq7yBsBK5xkzsuM-Pu9D4xzA",
  },
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CursorGlow />
        <BackToTop />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
