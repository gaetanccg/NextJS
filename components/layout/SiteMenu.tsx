"use client";

import { ButtonLink } from "../ui/ButtonLink";
import Logo from "../ui/Logo";
import { useTranslations } from "next-intl";

type SiteMenuType = {
  link?: string | null;
  target?: string | null;
};
export default function SiteMenu({ link, target }: SiteMenuType) {
  const t = useTranslations("siteMenu");
  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 bg-medium rounded-md p-2 z-90">
      <ul className="flex items-stretch gap-2">
        <li className="bg-dark rounded-lg flex items-center p-2">
          <Logo size={38} color="light" />
        </li>
        <li>
          <ButtonLink href="/websites" variant="outline" color="light">
            {t("viewSites")}
          </ButtonLink>
        </li>
        {link && (
          <li>
            <ButtonLink href={link} color="light" target={target ?? undefined}>
              {t("viewSite")}
            </ButtonLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
