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
                <SearchBar placeholder="Rechercher par tags..." />
            </div>

            <div className={styles.right}>
                <Link href="/register" className={styles.authLink}>
                    S&apos;inscrire
                </Link>
                <Link href="/login" className={styles.authButton}>
                    Se connecter
                </Link>
            </div>
        </header>
    );
}
