import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    if (password === "wpadka") {
      const message = `🚨 <b>Ktoś zalogował się do akt!</b>\n\n<b>IP:</b> ${ip}\n<b>Urządzenie:</b> ${userAgent}`;
      await sendTelegramMessage(message);
      return NextResponse.json({ success: true });
    } else {
      const message = `⚠️ <b>Błędna próba logowania!</b>\n\n<b>Hasło:</b> ${password}\n<b>IP:</b> ${ip}\n<b>Urządzenie:</b> ${userAgent}`;
      await sendTelegramMessage(message);
      return NextResponse.json({ success: false, message: "Nieprawidłowe hasło" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Błąd serwera" }, { status: 500 });
  }
}
