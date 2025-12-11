import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" })

export const metadata: Metadata = {
  title: "EcoDIYApartment — Small Space. Big Impact.",
  description:
    "Creative, low-waste DIY projects for compact city homes. Discover sustainable living ideas for small apartments.",
  keywords: ["eco DIY", "apartment projects", "sustainable living", "small space", "upcycling", "green living"],
  icons: {
    icon: [
      {
        url: "/favicon.jpg",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
