import { getTranslations } from "next-intl/server";

export default async function ThankYouPage() {
  const t = await getTranslations("thankyou");
  return <main>{t("message")}</main>;
}
