import { getLocale } from "next-intl/server";

export default async function MentionsPage() {
  const locale = await getLocale();
  const Content = (await import(`@/content/mentions/${locale}.mdx`)).default;

  return (
    <main className="prose mx-auto px-6 py-12">
      <Content />
    </main>
  );
}
