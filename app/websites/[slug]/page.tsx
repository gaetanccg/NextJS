import WebsiteHeader from "@/components/ui/WebsiteHeader";
import {WebsiteType} from "@/types/Website";

export async function generateStaticParams() {
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
    const websites = await fetch(baseUrl + "/websites.json").then(
        (res) => res.json(),
    );

    return websites.map((w: WebsiteType) => ({
        slug: w.slug,
    }));
}

type WebsitePageType = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function WebsitePage({params}: WebsitePageType) {
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
    const {slug} = await params;
    const websites: WebsiteType[] = await fetch(
        baseUrl + "/websites.json",
    ).then((res) => res.json());
    const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
    console.log("currentWebsite: ", currentWebsite);

    return (
        <main>{currentWebsite && <WebsiteHeader website={currentWebsite} />}</main>
    );
}
