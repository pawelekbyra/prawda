import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  const message = `🎯 <b>Odtworzono/pobrano nagranie audio!</b>\n\n<b>IP:</b> ${ip}\n<b>Urządzenie:</b> ${userAgent}`;
  await sendTelegramMessage(message);

  const url = new URL("/evidence/rozprawa-15-04-2026-sroda-slaska-lizynska.mp3", req.url);
  return NextResponse.redirect(url);
}
