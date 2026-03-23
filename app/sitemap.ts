import { createClient } from "@/prismicio";
import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const publicUrl = process.env.NEXT_PUBLIC_URL ?? "";

  const websites = await client.getAllByType("website", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  function localizedUrl(path: string) {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      languages[locale] = `${publicUrl}${prefix}${path}`;
    }
    return languages;
  }

  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/websites", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/mentions", priority: 0.2 },
  ];

  const pagesSitemap: MetadataRoute.Sitemap = staticPaths.map((page) => ({
    url: `${publicUrl}${page.path}`,
    lastModified: new Date(),
    priority: page.priority,
    alternates: { languages: localizedUrl(page.path) },
  }));

  const websitesSitemap: MetadataRoute.Sitemap = websites.map((w) => ({
    url: `${publicUrl}/websites/${w.uid}`,
    lastModified: w.last_publication_date ?? new Date(),
    priority: 0.5,
    alternates: { languages: localizedUrl(`/websites/${w.uid}`) },
  }));

  return [...pagesSitemap, ...websitesSitemap];
}
