import Website from "@/components/ui/Website";
import Title from "@/components/ui/Title";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const t = await getTranslations("search");

  if (!tag) {
    redirect("/");
  }

  const client = createClient();
  const websites = await client.getAllByType("website", {
    filters: [prismic.filter.at("document.tags", [tag])],
  });

  return (
    <main className="px-6 py-12">
      <Title
        tag="h1"
        topLine={t("topLine")}
        bottomLine={t("bottomLine", { count: websites.length })}
      >
        {tag}
      </Title>

      {websites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {websites.map((website) => (
            <Website key={website.id} website={website} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center">
          <p className="text-2xl mt-8 text-center">
            {t("noResults")}
          </p>
          <ButtonLink href="/websites" variant="filled" color="dark">
            {t("viewAll")}
          </ButtonLink>
        </div>
      )}
    </main>
  );
}
