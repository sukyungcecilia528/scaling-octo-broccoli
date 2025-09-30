"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageCircle, Shield, Heart, Lock, Users } from "lucide-react"

export default function LandingPage() {
  const [showConsentModal, setShowConsentModal] = useState(false)
  const [showChatModal, setShowChatModal] = useState(false)
  const [consent, setConsent] = useState(false)
  const [ageConfirm, setAgeConfirm] = useState(false)

  const handleStartClick = () => {
    setShowConsentModal(true)
  }

  const handleConsentSubmit = () => {
    if (consent && ageConfirm) {
      setShowConsentModal(false)
      setShowChatModal(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance text-gray-900 leading-tight">
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
              onClick={handleStartClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              3분 체험 시작하기
            </Button>
            <p className="text-sm text-gray-500">무료 · 익명 · 로그인 불필요</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-sm">
              <Lock className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-sm font-medium text-gray-700">완전 익명</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-sm">
              <Shield className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-sm font-medium text-gray-700">안전 보장</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 shadow-sm">
              <Heart className="h-8 w-8 text-pink-500" />
            </div>
            <p className="text-sm font-medium text-gray-700">비판 없음</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">왜 AI 대화일까요?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            사람과의 만남이 부담스러울 때, AI와의 대화는 당신만의 속도로 시작할 수 있는 첫걸음입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">판단하지 않는 경청</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI는 당신의 이야기를 평가하거나 조언을 강요하지 않아요. 그저 당신의 감정을 있는 그대로 받아들입니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>24시간 언제든 대화 가능</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>눈치 볼 필요 없는 안전한 공간</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>당신의 속도에 맞춰 진행</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">완벽한 익명성</h3>
                <p className="text-gray-700 leading-relaxed">
                  이름도, 전화번호도, 이메일도 필요 없어요. 당신이 원하는 만큼만 공유하세요.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>개인정보 수집 최소화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>대화 기록은 선택적 저장</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>언제든 삭제 가능</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-pink-50 to-pink-100">
              <CardContent className="pt-6 space-y-4">
                <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">위기 시 안전망</h3>
                <p className="text-gray-700 leading-relaxed">
                  힘든 순간이 감지되면, 전문 상담 기관과 즉시 연결해드려요. 혼자가 아니에요.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>자동 위기 감지 시스템</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>전문 상담사 연계 지원</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>24시간 긴급 연락처 제공</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">어떻게 시작하나요?</h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900">버튼 클릭</h3>
            <p className="text-gray-600 leading-relaxed">
              '3분 체험 시작하기' 버튼을 누르면 간단한 동의 확인만 거치면 돼요.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900">대화 시작</h3>
            <p className="text-gray-600 leading-relaxed">
              AI가 먼저 인사를 건네요. 편한 주제부터 천천히 이야기해보세요.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-pink-500 to-orange-400 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900">나만의 속도로</h3>
            <p className="text-gray-600 leading-relaxed">
              언제든 멈추고, 다시 시작할 수 있어요. 당신의 페이스가 가장 중요해요.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">먼저 경험한 분들의 이야기</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                    K
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">김** (24세)</p>
                    <p className="text-sm text-gray-500">대학생</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "사람 만나는 게 너무 힘들었는데, AI와 대화하니까 부담이 없어서 좋았어요. 제 감정을 정리하는 데 도움이
                  됐어요."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                    L
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">이** (29세)</p>
                    <p className="text-sm text-gray-500">프리랜서</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "익명이라서 솔직하게 말할 수 있었어요. 판단받지 않는다는 게 이렇게 편한 거였구나 싶었습니다."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Privacy */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-500 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">안전과 개인정보 보호</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-purple-500" />
                개인정보 처리 방침
              </h3>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>• 최소한의 정보만 수집 (선택적 이메일)</li>
                <li>• 대화 내용은 암호화되어 저장</li>
                <li>• 언제든 데이터 삭제 요청 가능</li>
                <li>• 제3자에게 정보 제공 절대 금지</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <Users className="h-5 w-5 mr-2 text-pink-500" />
                위기 상황 대응
              </h3>
              <ul className="space-y-2 text-gray-700 leading-relaxed">
                <li>• 자해·자살 징후 자동 감지</li>
                <li>• 즉시 전문 상담 기관 안내</li>
                <li>• 24시간 긴급 연락처 제공</li>
                <li>• 전문가 리소스 연결 지원</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">긴급 상황 시:</strong> 자살예방상담전화 ☎ 1393 | 정신건강위기상담전화 ☎
              1577-0199 | 청소년전화 ☎ 1388
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">오늘, 작은 용기를 내보세요</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            완벽하지 않아도 괜찮아요. 당신의 이야기를 들려주세요.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-xl font-bold"
            onClick={handleStartClick}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            지금 바로 시작하기
          </Button>
          <p className="text-sm text-white/80">3분이면 충분해요 · 무료 · 익명</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">AI 힐링 대화</h3>
              <p className="text-sm leading-relaxed">은둔·고립 청년을 위한 안전한 대화 공간</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">바로가기</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    서비스 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    자주 묻는 질문
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">긴급 연락처</h4>
              <ul className="space-y-2 text-sm">
                <li>자살예방상담: 1393</li>
                <li>정신건강위기상담: 1577-0199</li>
                <li>청소년전화: 1388</li>
                <li>생명의전화: 1588-9191</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 AI 힐링 대화. 모든 권리 보유.</p>
            <p className="mt-2 text-gray-400">이 서비스는 전문 의료 상담을 대체하지 않습니다.</p>
          </div>
        </div>
      </footer>

      {/* Consent Modal */}
      <Dialog open={showConsentModal} onOpenChange={setShowConsentModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">시작하기 전에</DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              안전하고 편안한 대화를 위해 아래 내용을 확인해주세요.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked as boolean)} />
              <label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                AI 대화는 전문 의료 상담을 대체하지 않으며, 위기 상황 시 전문 기관 연계가 필요함을 이해했습니다.
              </label>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox
                id="age"
                checked={ageConfirm}
                onCheckedChange={(checked) => setAgeConfirm(checked as boolean)}
              />
              <label htmlFor="age" className="text-sm leading-relaxed cursor-pointer">
                만 18세 이상이며, 서비스 이용약관에 동의합니다.
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setShowConsentModal(false)} className="flex-1">
              취소
            </Button>
            <Button
              onClick={handleConsentSubmit}
              disabled={!consent || !ageConfirm}
              className="flex-1 bg-purple-500 hover:bg-purple-600"
            >
              시작하기
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Chat Modal */}
      <Dialog open={showChatModal} onOpenChange={setShowChatModal}>
        <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-xl">AI 대화 체험</DialogTitle>
            <DialogDescription>편안하게 이야기를 시작해보세요</DialogDescription>
          </DialogHeader>
          <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm max-w-[80%]">
                  <p className="text-sm leading-relaxed">
                    안녕하세요. 만나서 반가워요. 😊<br />
                    <br />
                    저는 당신의 이야기를 들어드리는 AI 동반자예요. 오늘 기분은 어떠신가요? 편한 이야기부터 천천히
                    시작해볼까요?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 pt-4 border-t">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button className="bg-purple-500 hover:bg-purple-600">전송</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
