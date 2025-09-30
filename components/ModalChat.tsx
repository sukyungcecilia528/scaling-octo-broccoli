"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { MessageCircle } from "lucide-react"

type ModalChatProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ModalChat({ open, onOpenChange }: ModalChatProps) {
  const [consent, setConsent] = useState(false)
  const [saveOptIn, setSaveOptIn] = useState(false)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const startChat = async () => {
    setLoading(true)
    try {
      await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ save: saveOptIn }),
      })
    } catch (e) {
      // noop for MVP
    } finally {
      setLoading(false)
    }
  }

  const sendMessage = async () => {
    if (!message.trim()) return
    // Placeholder for external chat widget integration
    setMessage("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl">AI 대화 체험</DialogTitle>
          <DialogDescription>편안하게 이야기를 시작해보세요</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2" aria-live="polite">
          <div className="flex items-start space-x-3">
            <Checkbox id="consent" checked={consent} onCheckedChange={(c) => setConsent(Boolean(c))} />
            <label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
              전문 의료 상담을 대체하지 않으며 위기 시 도움을 요청할 수 있음을 이해했습니다.
            </label>
          </div>
          <div className="flex items-start space-x-3">
            <Checkbox id="save" checked={saveOptIn} onCheckedChange={(c) => setSaveOptIn(Boolean(c))} />
            <label htmlFor="save" className="text-sm leading-relaxed cursor-pointer">
              대화 내용을 로컬에 임시 저장하는 것에 동의합니다(선택).
            </label>
          </div>

          <div className="flex gap-2">
            <Button onClick={startChat} disabled={!consent || loading} className="bg-purple-500 hover:bg-purple-600">
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" /> 대화 시작
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)} aria-label="닫기">닫기</Button>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto mt-2" role="log" aria-label="Chat transcript">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm max-w-[80%]">
                <p className="text-sm leading-relaxed">
                  안녕하세요. 만나서 반가워요. 오늘 기분은 어떠신가요? 편한 이야기부터 시작해볼까요?
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="메시지 입력"
          />
          <Button className="bg-purple-500 hover:bg-purple-600" onClick={sendMessage} aria-label="전송">
            전송
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface ModalChatProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ModalChat({ open, onOpenChange }: ModalChatProps) {
  const [message, setMessage] = useState("")
  const [savingOptIn, setSavingOptIn] = useState(false)
  const [isStarting, setIsStarting] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [open])

  const handleStart = useCallback(async () => {
    setIsStarting(true)
    try {
      const res = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ optInSave: savingOptIn, firstMessage: message }),
      })
      if (!res.ok) throw new Error("Failed to start chat")
      const data = await res.json()
      if (data?.redirectUrl) {
        window.location.href = data.redirectUrl
      }
    } catch (err) {
      console.error(err)
      alert("죄송합니다. 대화를 시작할 수 없습니다. 잠시 후 다시 시도해주세요.")
    } finally {
      setIsStarting(false)
    }
  }, [message, savingOptIn])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col" aria-describedby="chat-desc">
        <DialogHeader>
          <DialogTitle className="text-xl">AI 대화 체험</DialogTitle>
          <DialogDescription id="chat-desc">편안하게 이야기를 시작해보세요</DialogDescription>
        </DialogHeader>
        <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm max-w-[90%]">
              <p className="text-sm leading-relaxed">
                안녕하세요. 만나서 반가워요. 😊
                <br />
                저는 당신의 이야기를 들어드리는 AI 동반자예요. 오늘 기분은 어떠신가요?
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 pt-4 border-t">
          <label htmlFor="opt-in" className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
            <Checkbox id="opt-in" checked={savingOptIn} onCheckedChange={(v) => setSavingOptIn(!!v)} />
            대화 저장 동의(옵션)
          </label>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="메시지를 입력하세요..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="메시지 입력"
            />
            <Button onClick={handleStart} disabled={isStarting} className="bg-purple-500 hover:bg-purple-600">
              {isStarting ? "연결 중..." : "전송"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
