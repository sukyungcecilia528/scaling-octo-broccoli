import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { save, optInSave, firstMessage } = body ?? {}

    // 기본 응답
    const responseData: Record<string, any> = {
      ok: true,
      save: Boolean(save),
    }

    // redirect URL 생성
    const base = process.env.NEXT_PUBLIC_CHAT_WIDGET_URL || "https://example.com/chat"
    const url = new URL(base)

    if (typeof optInSave === "boolean") url.searchParams.set("optInSave", String(optInSave))
    if (firstMessage) url.searchParams.set("q", String(firstMessage))

    responseData.redirectUrl = url.toString()

    return NextResponse.json(responseData)
  } catch (err) {
    return NextResponse.json({ error: "failed_to_start" }, { status: 500 })
  }
}