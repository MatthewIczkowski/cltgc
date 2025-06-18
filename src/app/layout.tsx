import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Charlotte Golf Club - Premium TrackMan Golf Simulator Membership",
  description:
    "Join Charlotte Golf Club for exclusive access to professional-grade TrackMan golf simulators. Year-round golf with private access and detailed performance analytics.",
  keywords: "golf simulator, TrackMan, Charlotte golf, private golf club, golf membership, indoor golf, simulator membership",
  authors: [{ name: "Charlotte Golf Club" }],
  openGraph: {
    title: "Charlotte Golf Club - Premium Golf Simulator Membership",
    description: "Experience professional-grade golf simulators year-round with TrackMan technology",
    url: "https://cltgc.com",
    siteName: "Charlotte Golf Club",
    images: [
      {
        url: "/hero-section.png",
        width: 1200,
        height: 630,
        alt: "Charlotte Golf Club - TrackMan Golf Simulators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlotte Golf Club - Premium Golf Simulator Membership",
    description: "Experience professional-grade golf simulation year-round with TrackMan technology",
    images: ["/hero-section.png"],
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}