import Link from "next/link";
import Logo from "../ui/Logo";
import CookiesConsent from "./CookiesConsent";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Footer() {
  const client = createClient();

  let footerLinks: Array<{ label: string; link: any }> = [];
  try {
    const navigation = await client.getSingle("navigation");
    footerLinks = navigation.data.footer_links || [];
  } catch {
    // Fallback si pas de navigation dans Prismic
  }

  return (
    <footer className="px-6 py-12">
      <Logo />
      <nav className="mt-8">
        <ul className="flex flex-col gap-2 text-button">
          {footerLinks.length > 0 ? (
            footerLinks.map((item, i) => (
              <li key={`footer-link-${i}`}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))
          ) : (
            <>
              <li>
                <Link href="/websites">Voir les sites web</Link>
              </li>
              <li>
                <Link href="/mentions">Mentions Légales</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </>
          )}
          <li>
            <CookiesConsent />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
