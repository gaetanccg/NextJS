import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type PageProps = {
  params: Promise<{ uid: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { uid } = await params;
  const client = createClient();

  try {
    const page = await client.getByUID("page", uid);
    return {
      title: prismic.asText(page.data.title),
      description: page.data.meta_description,
    };
  } catch {
    return {};
  }
}

export default async function Page({ params }: PageProps) {
  const { uid } = await params;
  const client = createClient();

  let page;
  try {
    page = await client.getByUID("page", uid);
  } catch {
    notFound();
  }

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  try {
    const pages = await client.getAllByType("page");
    return pages.map((page: { uid: string }) => ({ uid: page.uid }));
  } catch {
    return [];
  }
}
