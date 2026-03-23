import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ["mdx", "tsx", "ts"],
  redirects() {
    return [
      {
        source: "/websites/test",
        destination: "/websites/oskaprod",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./libs/i18n/request.ts");
const withMDX = createMDX();
export default withNextIntl(withMDX(nextConfig));
