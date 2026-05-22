"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const eventType = String(formData.get("eventType") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  if (honeypot) {
    return { status: "success" };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Veuillez remplir tous les champs obligatoires." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Adresse courriel invalide." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? siteConfig.contact.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      status: "error",
      message:
        "Le formulaire n'est pas encore configuré. Écrivez-nous directement à info@zelevents.com.",
    };
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Nouvelle demande — ${siteConfig.name}</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ""}
    ${eventType ? `<p><strong>Type d'événement :</strong> ${escapeHtml(eventType)}</p>` : ""}
    ${date ? `<p><strong>Date prévue :</strong> ${escapeHtml(date)}</p>` : ""}
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? `${siteConfig.name} <onboarding@resend.dev>`,
    to: toEmail,
    replyTo: email,
    subject: `[ZElevents] Nouvelle demande — ${eventType || "Événement"}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Une erreur est survenue. Veuillez réessayer ou nous écrire directement.",
    };
  }

  return { status: "success" };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
