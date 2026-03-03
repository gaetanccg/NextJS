import { WebsiteType, ColorsMap } from "@/types/Website";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import styles from "./[slug].module.css";

function readJSON<T>(filename: string): T {
  const filePath = path.join(process.cwd(), "public", filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export async function getStaticPaths() {
  const websites = readJSON<WebsiteType[]>("websites.json");
  const paths = websites.map((w) => ({ params: { slug: w.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const websites = readJSON<WebsiteType[]>("websites.json");
  const colors = readJSON<ColorsMap>("colors.json");
  const idx = websites.findIndex((w) => w.slug === params.slug);
  if (idx === -1) return { redirect: { destination: "/websites" } };

  const website = websites[idx];
  const prevSlug = idx > 0 ? websites[idx - 1].slug : null;
  const nextSlug = idx < websites.length - 1 ? websites[idx + 1].slug : null;

  return { props: { website, colors, prevSlug, nextSlug } };
}

type WebsitePageProps = {
  website: WebsiteType;
  colors: ColorsMap;
  prevSlug: string | null;
  nextSlug: string | null;
};

export default function WebsitePage({
  website,
  colors,
  prevSlug,
  nextSlug,
}: WebsitePageProps) {
  const scrollColor = colors[website.scroll]?.hex ?? "#000000";

  return (
    <div>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.navButtons}>
          {prevSlug ? (
            <Link href={`/websites/${prevSlug}`} className={styles.navBtn}>
              &larr; Préc.
            </Link>
          ) : (
            <span />
          )}
          {nextSlug && (
            <Link href={`/websites/${nextSlug}`} className={styles.navBtn}>
              Suiv. &rarr;
            </Link>
          )}
        </div>
        <span className={styles.date}>
          {new Date(website.date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Hero title */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{website.title.toUpperCase()}</h1>
        <div className={styles.colorDots}>
          {website.colors.map((c) => (
            <span
              key={c}
              className={styles.dot}
              style={{ backgroundColor: colors[c]?.hex ?? "#ccc" }}
            />
          ))}
        </div>
      </section>

      {/* Main screenshot + description */}
      <section className={styles.showcase} style={{ backgroundColor: scrollColor }}>
        <div className={styles.showcaseInner}>
          <div className={styles.thumbnailWrapper}>
            <Image
              src={`/websites/${website.thumbnail}`}
              alt={website.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.thumbnailImg}
            />
          </div>
          <div className={styles.showcaseInfo}>
            <p className={styles.showcaseDesc}>{website.description}</p>
            <Link
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seeWebsite}
            >
              Voir le site &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Details section */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Détails</p>
        <h2 className={styles.sectionTitle}>
          Découvrir les
          <br />
          détails de ce site
        </h2>
        <p className={styles.detailsText}>{website.description}</p>
      </section>

      {/* Image gallery */}
      {website.images.length > 0 && (
        <section className={styles.gallery}>
          {website.images.map((img) => (
            <div key={img} className={styles.galleryItem}>
              <Image
                src={`/websites/${img}`}
                alt={`${website.title} - ${img}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.galleryImg}
              />
            </div>
          ))}
        </section>
      )}

      {/* Colors section */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Couleurs</p>
        <h2 className={styles.sectionTitle}>
          Liste des
          <br />
          couleurs du site
        </h2>
        <div className={styles.colorsGrid}>
          {website.colors.map((c) => {
            const color = colors[c];
            if (!color) return null;
            const textColor = color.light ? "#000" : "#fff";
            return (
              <div
                key={c}
                className={styles.colorCard}
                style={{ backgroundColor: color.hex }}
              >
                <div className={styles.colorCardHeader}>
                  <span style={{ color: textColor }} className={styles.colorName}>
                    {color.name}
                  </span>
                  <span style={{ color: textColor }} className={styles.colorHex}>
                    {color.hex}
                  </span>
                </div>
                <span style={{ color: textColor }} className={styles.colorPreview}>
                  Aa
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews section */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Avis</p>
        <h2 className={styles.sectionTitle}>
          Liste des avis
          <br />
          du visiteurs
        </h2>
        <div className={styles.reviews}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <span className={styles.reviewUser}>Username</span>
                <span className={styles.reviewNote}>7</span>
              </div>
              <p className={styles.reviewText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Review form */}
      <section className={styles.section}>
        <h3 className={styles.formTitle}>Votre avis sur ce site</h3>
        <form className={styles.reviewForm}>
          <div className={styles.ratingRow}>
            <input
              type="number"
              min={0}
              max={10}
              defaultValue={10}
              className={styles.ratingInput}
            />
            <span className={styles.ratingMax}>/ 10</span>
          </div>
          <textarea
            placeholder="Qu'est-ce que vous dites ?"
            rows={4}
            className={styles.reviewTextarea}
          />
          <div className={styles.formActions}>
            <button type="submit" className={styles.submitBtn}>
              &gt; Envoyer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
