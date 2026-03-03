type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="flex flex-col items-center gap-4 py-16">
      <h1 className="text-4xl font-bold uppercase tracking-wide">{title}</h1>
      {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
    </section>
  );
}
