import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import SocialFloat from "@/components/social-float"
import "./globals.css"

const siteUrl = "https://ubaid-portfolio-roan.vercel.app"
const title = "Muhammad Ubaid — Agentic Engineer+ Full-Stack Developer"
const description =
  "Karachi-based Agentic Engineer+ Full-Stack Developer. Unified 5+ systems into one ERP; multi-agent AI system placed Runner-Up at Hackfest x Datathon 2026 and launched as Unscripted."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammad Ubaid",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-background text-foreground font-roboto antialiased" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <SocialFloat />
      </body>
    </html>
  )
}
