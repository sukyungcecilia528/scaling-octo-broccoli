import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({})) as { save?: boolean }
    // Placeholder: integrate with external chat provider here (issue token, etc.)
    return NextResponse.json({ ok: true, save: Boolean(body?.save) })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { optInSave, firstMessage } = body ?? {}

    // In real integration, create a session with external chat engine.
    // For now, build redirect URL from env or fallback to a placeholder.
    const base = process.env.NEXT_PUBLIC_CHAT_WIDGET_URL || "https://example.com/chat"

    const url = new URL(base)
    if (typeof optInSave === "boolean") url.searchParams.set("optInSave", String(optInSave))
    if (firstMessage) url.searchParams.set("q", String(firstMessage))

    return NextResponse.json({ redirectUrl: url.toString() })
  } catch (err) {
    return NextResponse.json({ error: "failed_to_start" }, { status: 500 })
  }
}
