import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
};

const variantClasses: Record<string, string> = {
  primary: "bg-black text-white hover:opacity-90",
  secondary: "bg-green-500 text-white hover:opacity-90",
  outline:
    "bg-transparent text-black border border-black hover:bg-black hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
