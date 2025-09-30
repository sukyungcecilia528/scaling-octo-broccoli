"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { FC } from "react"

type HeroProps = {
  onStart: () => void
}

const Hero: FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto" aria-labelledby="hero-heading">
      <div className="text-center space-y-6">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-balance text-gray-900 leading-tight">
          혼자가 편했던 당신에게,
          <br />
          <span className="text-purple-600">조용한 대화의 시작</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
          당신의 속마음을 서두르지 않고 함께 살펴볼게요.
          <br />
          익명으로, 부담 없이, 안전하게.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
            onClick={onStart}
            aria-label="3분 체험 시작하기"
          >
            <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            3분 체험 시작하기
          </Button>
          <p className="text-sm text-gray-500" role="note">무료 · 익명 · 로그인 불필요</p>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"

interface HeroProps {
  onStart: () => void
}

export function Hero({ onStart }: HeroProps) {
  return (
    <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto" aria-labelledby="hero-heading">
      <div className="text-center space-y-6">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-balance text-gray-900 leading-tight">
          혼자가 편했던 당신에게,
          <br />
          <span className="text-purple-600">조용한 대화의 시작</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
          당신의 속마음을 서두르지 않고 함께 살펴볼게요.
          <br />
          익명으로, 부담 없이, 안전하게.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
            onClick={onStart}
            aria-label="3분 체험 시작하기"
          >
            <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            3분 체험 시작하기
          </Button>
          <p className="text-sm text-gray-500">무료 · 익명 · 로그인 불필요</p>
        </div>
      </div>
    </section>
  )
}
