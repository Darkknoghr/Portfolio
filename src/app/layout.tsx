import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "./components/CursorGlow";
import BackToTop from "./components/BackToTop";

export const metadata: Metadata = {
  title: "Cyril Nutsugah | Portfolio",
  description: "Web developer specializing in building modern web applications with React, Next.js, and JavaScript, with a background in IT troubleshooting and securing digital systems.",
  openGraph: {
    title: "Cyril Nutsugah | Portfolio",
    description: "Web developer specializing in building modern web applications with React, Next.js, and JavaScript.",
    url: "https://cyrilnutsugah.com",
    siteName: "Cyril Nutsugah Portfolio",
    images: [
      {
        url: "https://cyrilnutsugah.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
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
