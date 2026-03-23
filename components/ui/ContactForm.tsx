"use client";

import { sendContactForm } from "@/actions/sendContactForm";
import Form from "next/form";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  return (
    <Form action={sendContactForm}>
      <input name="email" type="email" />
      <textarea name="message"></textarea>
      <button type="submit">{t("submit")}</button>
    </Form>
  );
}
