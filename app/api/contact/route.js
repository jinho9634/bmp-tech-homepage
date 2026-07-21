import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "이름, 이메일, 문의 내용을 입력해주세요.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"BMP TECH 홈페이지" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[BMP TECH 문의] ${name}님의 문의입니다.`,
      text: `
이름: ${name}
이메일: ${email}
연락처: ${phone || "미입력"}

문의 내용:
${message}
      `,
      html: `
        <h2>BMP TECH 홈페이지 문의</h2>

        <p><strong>이름:</strong> ${escapeHtml(name)}</p>
        <p><strong>이메일:</strong> ${escapeHtml(email)}</p>
        <p><strong>연락처:</strong> ${escapeHtml(phone || "미입력")}</p>

        <hr />

        <p><strong>문의 내용</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "문의가 정상적으로 전송되었습니다.",
    });
  } catch (error) {
    console.error("Contact mail error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "메일 전송에 실패했습니다.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}