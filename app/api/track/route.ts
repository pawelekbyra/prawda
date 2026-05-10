import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") || "nieznany";
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  let fileName = "";
  let redirectPath = "";

  if (type === "protokol_sfalszowany") {
    fileName = "sfalszowany-protokol-sroda-slaska-15-04.2026.pdf";
    redirectPath = "/evidence/" + fileName;
  } else if (type === "protokol_prawdziwy") {
    fileName = "protokol-prawdziwy-na-podstawie-transkrybcji.pdf";
    redirectPath = "/evidence/" + fileName;
  } else {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  const message = `📄 <b>Wyświetlono dokument!</b>\n\n<b>Typ:</b> ${type.replace("_", " ")}\n<b>Plik:</b> ${fileName}\n<b>IP:</b> ${ip}\n<b>Urządzenie:</b> ${userAgent}`;
  await sendTelegramMessage(message);

  const url = new URL(redirectPath, req.url);
  return NextResponse.redirect(url);
}
