import Image from "next/image";
import styles from "./PinCard.module.css";

type PinCardProps = {
  title: string;
  image: string;
  href?: string;
};

export default function PinCard({ title, image, href }: PinCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />
      </div>
      <span className={styles.title}>{title}</span>
    </Wrapper>
  );
}
