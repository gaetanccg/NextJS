"use client";

import Title from "@/components/ui/Title";
import WebsitesList from "@/components/ui/WebsitesList";
import { useWebsitesStore } from "@/store/websites.store";
import { useTranslations } from "next-intl";

export default function SavedWebsites() {
  const websites = useWebsitesStore((state) => state.websites);
  const t = useTranslations("pins");

  return (
    <>
      <Title
        tag="h1"
        topLine={t("topLine")}
        bottomLine={t("bottomLine", { count: websites.length })}
      >
        {t("title")}
      </Title>
      {websites && <WebsitesList websites={websites} />}
    </>
  );
}
