import Website from "@/components/ui/Website/Website";
import { WebsiteType } from "@/types/Website";
import PageHero from "@/components/ui/PageHero/PageHero";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const websites: WebsiteType[] = JSON.parse(raw);
  return { props: { websites } };
}

type WebsitesPageType = {
  websites: WebsiteType[];
};

export default function WebsitesPage({ websites }: WebsitesPageType) {
  return (
    <div>
      <PageHero title="SITES WEB" subtitle="Découvrez notre sélection" />
      <section className="grid grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {websites.map((w, i) => (
          <Website
            key={`website-${i}`}
            title={w.title}
            thumbnail={w.thumbnail}
            slug={w.slug}
          />
        ))}
      </section>
    </div>
  );
}
