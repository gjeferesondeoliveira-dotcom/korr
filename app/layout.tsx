import type { Metadata } from "next"
import { Cinzel, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel"
})

export const metadata: Metadata = {
  title: "KØRR - The Valley of Lost Voices",
  description: "A community-driven cryptocurrency built to turn the world of KORR into a global movement.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} bg-black`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
