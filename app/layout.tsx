import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "익명 AI 힐링 — 은둔 청년을 위한 안전한 대화 공간",
  description: "부담없이 시작하는 3분 AI 대화. 익명성 보장, 안전 연계, 전문가 리소스 제공.",
  generator: "v0.app",
  keywords: ["AI 상담", "익명 대화", "은둔 청년", "고립 청년", "정신건강", "힐링"],
  openGraph: {
    title: "익명 AI 힐링 — 은둔 청년을 위한 안전한 대화 공간",
    description: "부담없이 시작하는 3분 AI 대화. 익명성 보장, 안전 연계, 전문가 리소스 제공.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
