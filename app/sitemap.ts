import { createClient } from "@/prismicio";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const publicUrl = process.env.NEXT_PUBLIC_URL ?? "";
  const websites = await client.getAllByType("website", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const homePage = await client.getSingle("home");
  const contactPage = await client.getSingle("contact");
  const websitesPage = await client.getSingle("websites");
  const mentionsPage = await client.getSingle("mentions");

  const alternates = (path: string) => ({
    languages: {
      fr: publicUrl + path,
      en: `${publicUrl}/en${path}`,
    },
  });

  const pagesSitemap: MetadataRoute.Sitemap = [
    {
      url: publicUrl,
      lastModified: homePage.last_publication_date ?? new Date(),
      priority: 1,
      alternates: alternates("/"),
    },
    {
      url: publicUrl + websitesPage.url,
      lastModified: websitesPage.last_publication_date ?? new Date(),
      priority: 0.7,
      alternates: alternates(websitesPage.url!),
    },
    {
      url: publicUrl + contactPage.url,
      lastModified: contactPage.last_publication_date ?? new Date(),
      priority: 0.7,
      alternates: alternates(contactPage.url!),
    },
    {
      url: publicUrl + mentionsPage.url,
      lastModified: mentionsPage.last_publication_date ?? new Date(),
      priority: 0.2,
      alternates: alternates(mentionsPage.url!),
    },
  ];

  const websitesSitemap = websites.map((w) => ({
    url: publicUrl + w.url!,
    lastModified: w.last_publication_date ?? new Date(),
    priority: 0.5,
    alternates: alternates(w.url!),
  }));

  return [...pagesSitemap, ...websitesSitemap];
}
