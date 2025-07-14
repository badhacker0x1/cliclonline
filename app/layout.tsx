import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Click Online - Internet Service Provider | Fastest Speed with Reliable Prices",
  description:
    "Leading Internet Service Provider in Dhaka, Bangladesh. Covering Hatirjheel, Ramna, and Khilgaon areas with lightning-fast connectivity and almost zero downtime.",
  keywords:
    "ISP, Internet Service Provider, Dhaka, Bangladesh, Broadband, Fiber Internet, Home Internet, Corporate Internet",
    generator: 'v0.dev'
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
