import Title from "@/components/ui/Title";
import PinnedWebsites from "./_components/PinnedWebsites";

export default function PinsPage() {
  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Vos sites web">
        Favoris
      </Title>
      <PinnedWebsites />
    </main>
  );
}
