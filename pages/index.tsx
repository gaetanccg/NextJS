import { WebsiteType, ColorsMap } from "@/types/Website";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import styles from "./index.module.css";

type HomePageProps = {
  featured: WebsiteType;
  websites: WebsiteType[];
  colors: ColorsMap;
};

export async function getStaticProps() {
  const websitesPath = path.join(process.cwd(), "public", "websites.json");
  const websites: WebsiteType[] = JSON.parse(
    fs.readFileSync(websitesPath, "utf-8"),
  );
  const colorsPath = path.join(process.cwd(), "public", "colors.json");
  const colors: ColorsMap = JSON.parse(fs.readFileSync(colorsPath, "utf-8"));

  return {
    props: {
      featured: websites[0],
      websites: websites.slice(1, 4),
      colors,
    },
  };
}

export default function HomePage({
  featured,
  websites,
  colors,
}: HomePageProps) {
  return (
    <div>
      {/* Hero — featured website */}
      <section className={styles.heroHeader}>
        <span className={styles.heroDate}>
          {new Date(featured.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <h1 className={styles.heroTitle}>{featured.title.toUpperCase()}</h1>
        <div className={styles.heroDots}>
          {featured.colors.map((c) => (
            <span
              key={c}
              className={styles.dot}
              style={{ backgroundColor: colors[c]?.hex ?? "#ccc" }}
            />
          ))}
        </div>
      </section>

      <section className={styles.heroImage}>
        <Link href={`/websites/${featured.slug}`}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={`${process.env.PAGES_BASE_PATH || ""}/websites/${featured.thumbnail}`}
              alt={featured.title}
              fill
              priority
              sizes="100vw"
              className={styles.heroImg}
            />
          </div>
        </Link>
      </section>

      {/* Sites Web section */}
      <section className={styles.sitesSection}>
        <span className={styles.sectionLabel}>Voir les derniers</span>
        <h2 className={styles.sectionTitle}>SITES WEB</h2>
        <span className={styles.sectionSub}>
          et ajoute tes propres reviews
        </span>

        <div className={styles.sitesGrid}>
          {websites.map((w) => (
            <Link
              key={w.slug}
              href={`/websites/${w.slug}`}
              className={styles.siteCard}
            >
              <div className={styles.siteImageWrapper}>
                <Image
                  src={`${process.env.PAGES_BASE_PATH || ""}/websites/${w.thumbnail}`}
                  alt={w.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.siteImg}
                />
              </div>
              <span className={styles.siteCardTitle}>{w.title}</span>
            </Link>
          ))}
        </div>

        <Link href="/websites" className={styles.viewAll}>
          &rarr; Voir tout les sites
        </Link>
      </section>

      {/* Highlight section */}
      <section className={styles.highlightSection}>
        <span className={styles.sectionLabel}>Découvrez notre dernier</span>
        <h2 className={styles.sectionTitle}>HIGHLIGHT</h2>

        <div className={styles.videoWrapper}>
          <video
            src={`${process.env.PAGES_BASE_PATH || ""}/highlight.mp4`}
            autoPlay
            muted
            loop
            playsInline
            className={styles.video}
          />
        </div>
      </section>
    </div>
  );
}
