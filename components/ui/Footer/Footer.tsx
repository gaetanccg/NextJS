import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
    {label: "Voir les sites web", href: "/websites"},
    {label: "Mentions Légales", href: "/mentions"},
    {label: "Contact", href: "/contact"},
    {label: "Gestion des cookies", href: "#"},
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <Link href="/" className={styles.logo}>
                    .COM
                </Link>
                <nav className={styles.nav}>
                    {footerLinks.map((link) => (
                        <Link key={link.label} href={link.href} className={styles.link}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
