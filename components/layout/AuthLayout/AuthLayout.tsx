import Link from "next/link";
import styles from "./AuthLayout.module.css";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.panelLeft}>
        <Link href="/" className={styles.logo}>
          .COM
        </Link>
      </div>
      <div className={styles.panelRight}>{children}</div>
    </div>
  );
}
