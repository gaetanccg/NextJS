import Link from "next/link";
import Logo from "../ui/Logo";
import CookiesConsent from "./CookiesConsent";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { Menu1Document } from "@/prismicio-types";

export default async function Footer() {
  const client = createClient();
  let menu: Menu1Document | null = null;
  try {
    menu = await client.getSingle("menu1");
  } catch {
    // Document "menu" pas encore créé dans Prismic
  }

  return (
    <footer className="px-6 py-12">
      <Logo />
      <nav className="mt-8">
        <ul className="flex flex-col gap-2 text-button">
          {menu?.data?.links?.map((link, i) => {
            if (!isFilled.link(link)) return null;
            const url = "url" in link ? (link.url as string) : "#";
            const text = "text" in link ? (link.text as string) : url;
            return (
              <li key={`link-${i}`}>
                <Link href={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <CookiesConsent />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
