import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { phone, email } = await req.json();

    const payload = {
      object: "page",
      entry: [
        {
          changes: [
            {
              field: "leadgen",
              value: {
                leadgen_id: `lenscraft_${Date.now()}`,
                form_id: "lenscraft_free_test",
                page_id: "lenscraft_website",
                field_data: [
                  { name: "phone_number", values: [phone] },
                  { name: "email", values: [email] },
                ],
              },
            },
          ],
        },
      ],
    };

    const res = await fetch("https://lenscraft.ngrok.app/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Bot responded with ${res.status}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Notify error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
