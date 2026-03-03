import type {NextConfig} from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    output: "export",
    basePath: process.env.PAGES_BASE_PATH || "",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
