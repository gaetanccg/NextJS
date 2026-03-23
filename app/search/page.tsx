import { createClient } from "@/prismicio";
import Title from "@/components/ui/Title";
import Link from "next/link";
import * as prismic from "@prismicio/client";

type SearchPageProps = {
  searchParams: Promise<{ tag?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { tag } = await searchParams;
  const client = createClient();

  let tags: string[] = [];
  let documents: any[] = [];

  try {
    tags = await client.getTags();
  } catch {
    tags = [];
  }

  if (tag) {
    try {
      documents = await client.getAllByTag(tag);
    } catch {
      documents = [];
    }
  }

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Rechercher par">
        Tags
      </Title>

      <div className="flex flex-wrap gap-2 mt-8 justify-center">
        {tags.map((t) => (
          <Link
            key={t}
            href={`/search?tag=${encodeURIComponent(t)}`}
            className={`px-4 py-2 rounded-full border transition-colors ${
              t === tag
                ? "bg-dark text-white border-dark"
                : "border-soft hover:bg-soft"
            }`}
          >
            {t}
          </Link>
        ))}
      </div>

      {tag && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            Résultats pour le tag &laquo;&nbsp;{tag}&nbsp;&raquo;
          </h2>

          {documents.length === 0 ? (
            <p className="text-center text-medium">
              Aucun résultat trouvé pour ce tag.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <Link
                  key={doc.id}
                  href={doc.url || `/${doc.uid}`}
                  className="block border border-soft rounded-lg p-6 hover:bg-soft transition-colors"
                >
                  <span className="text-xs text-medium uppercase tracking-wide">
                    {doc.type}
                  </span>
                  <h3 className="text-lg font-bold mt-1">
                    {doc.data?.title
                      ? prismic.asText(doc.data.title)
                      : doc.uid || "Sans titre"}
                  </h3>
                  {doc.tags && doc.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {doc.tags.map((docTag: string) => (
                        <span
                          key={docTag}
                          className="text-xs bg-soft px-2 py-1 rounded-full"
                        >
                          {docTag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
