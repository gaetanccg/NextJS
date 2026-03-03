import PageHero from "@/components/ui/PageHero/PageHero";
import SearchBar from "@/components/ui/SearchBar/SearchBar";

export default function SearchPage() {
  return (
    <div>
      <PageHero title="RECHERCHE" />
      <section className="flex flex-col items-center gap-8 px-6 pb-16">
        <SearchBar placeholder="Rechercher un site web..." />
        <p className="text-gray-500">
          Aucun site web ne correspond à votre recherche
        </p>
      </section>
    </div>
  );
}
