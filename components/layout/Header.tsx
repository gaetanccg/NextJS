import Link from "next/link";
import Logo from "../ui/Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import TagSearch from "./TagSearch";

export default async function Header() {
  const client = createClient();

  let headerLinks: Array<{ label: string; link: any }> = [];
  try {
    const navigation = await client.getSingle("navigation");
    headerLinks = navigation.data.header_links || [];
  } catch {
    // Fallback si pas de navigation dans Prismic
  }

  return (
    <header className="flex items-center gap-5 py-8 px-6">
      <Logo />

      <nav className="flex-1">
        <ul className="flex items-center justify-end gap-5">
          {headerLinks.length > 0 ? (
            headerLinks.map((item, i) => (
              <li key={`header-link-${i}`}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))
          ) : (
            <>
              <li>
                <Link href="/websites">Sites web</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </>
          )}
          <li className="hidden md:block flex-1">
            <TagSearch />
          </li>
          <li>
            <Link href="/pins" className="flex items-center">
              13
              <span className="material-symbols-outlined">keep</span>
            </Link>
          </li>
          <li>
            <ul className="flex gap-1 border rounded p-1 text-tiny">
              <li className="pr-1 border-r">EN</li>
              <li className="font-bold">FR</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
