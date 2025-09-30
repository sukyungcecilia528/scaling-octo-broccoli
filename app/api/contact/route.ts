import { NextResponse } from "next/server"

async function forwardToFormspree(payload: Record<string, unknown>) {
  const url = process.env.FORMSPREE_ENDPOINT
  if (!url) return { ok: false, status: 500 }
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  return { ok: res.ok, status: res.status }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      name?: string
      email?: string
      message?: string
    }

    const payload = {
      name: body.name ?? "",
      email: body.email ?? "",
      message: body.message ?? "",
      source: "landing-contact",
    }

    const useFormspree = Boolean(process.env.FORMSPREE_ENDPOINT)
    if (useFormspree) {
      const res = await forwardToFormspree(payload)
      if (!res.ok) return NextResponse.json({ ok: false }, { status: res.status || 500 })
      return NextResponse.json({ ok: true })
    }

    // Fallback: pretend success in dev to avoid storing emails here
    return NextResponse.json({ ok: true, dev: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}



