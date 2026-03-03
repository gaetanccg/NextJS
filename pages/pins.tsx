import PageHero from "@/components/ui/PageHero/PageHero";

export default function PinsPage() {
  return (
    <div>
      <PageHero title="PINS" subtitle="Explorez les tags et épingles" />
      <section className="grid grid-cols-2 gap-6 px-6 pb-16 md:grid-cols-4">
        {/* PinCards will be rendered here with data */}
      </section>
    </div>
  );
}
