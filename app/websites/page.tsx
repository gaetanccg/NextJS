import Title from "@/components/ui/Title";
import { WebsiteType } from "@/types/Website";
import WebsitesList from "./_components/WebsitesList";

export default async function WebsitesPage() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const websites: WebsiteType[] = await fetch(
    `${baseUrl}/websites.json`,
  ).then((res) => res.json());

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      {websites && <WebsitesList websites={websites} />}
    </main>
  );
}
