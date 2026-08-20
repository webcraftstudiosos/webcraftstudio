import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "contacto@webcraftstudiosos.com";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "El servicio de email no está configurado todavía." },
      { status: 503 }
    );
  }

  let payload: Partial<ContactPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const { name, email, phone, projectType, budget, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Nombre, email y mensaje son obligatorios." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "WebcraftStudioSOS <contacto@webcraftstudiosos.com>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nuevo mensaje de ${name} — WebcraftStudioSOS`,
    text: [
      `Nombre: ${name}`,
      `Email: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      projectType ? `Tipo de proyecto: ${projectType}` : null,
      budget ? `Presupuesto estimado: ${budget}` : null,
      "",
      "Mensaje:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
