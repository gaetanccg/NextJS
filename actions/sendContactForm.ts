"use server";
import { redirect } from "@/i18n/navigation";
import validator from "validator";
import { getLocale } from "next-intl/server";

export async function sendContactForm(formData: FormData) {
  const email = validator.normalizeEmail(formData.get("email")!.toString());
  const message = validator.escape(formData.get("message")!.toString());

  /* Envoi de l'email avec nodemailer */

  const locale = await getLocale();
  redirect({ href: "/thankyou", locale });
}
