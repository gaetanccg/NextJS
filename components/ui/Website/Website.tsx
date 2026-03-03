import Link from "next/link";
import Image from "next/image";
import styles from "./Website.module.css";

type WebsiteProps = {
  slug: string;
  title: string;
  thumbnail: string;
};

export default function Website({ title, thumbnail, slug }: WebsiteProps) {
  return (
    <Link href={`/websites/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={`/websites/${thumbnail}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className={styles.image}
        />
      </div>
      <span className={styles.title}>{title}</span>
    </Link>
  );
}
