import Link from "next/link";
import SearchBar from "@/components/ui/SearchBar/SearchBar";
import styles from "./Header.module.css";

const navLinks = [
    {label: "Site web", href: "/websites"},
];

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/" className={styles.logo}>
                    .COM
                </Link>
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className={styles.center}>
                <SearchBar placeholder="Rechercher par tags" />
            </div>

            <div className={styles.right}>
                <span className={styles.counter}>13</span>
                <svg
                    className={styles.pinIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="17" x2="12" y2="22" />
                    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
                </svg>
                <div className={styles.langSwitch}>
                    <button className={styles.langBtn}>EN</button>
                    <span className={styles.langDivider} />
                    <button className={`${styles.langBtn} ${styles.langBtnActive}`}>FR</button>
                </div>
            </div>
        </header>
    );
}
