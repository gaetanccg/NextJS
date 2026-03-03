import styles from "./SearchBar.module.css";

type SearchBarProps = {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
};

export default function SearchBar({
                                      placeholder = "Rechercher...",
                                      value,
                                      onChange,
                                  }: SearchBarProps) {
    return (
        <div className={styles.wrapper}>
            <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
                type="text"
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </div>
    );
}
