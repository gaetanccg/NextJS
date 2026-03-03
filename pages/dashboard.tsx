import PageHero from "@/components/ui/PageHero/PageHero";

export default function DashboardPage() {
  return (
    <div>
      <PageHero title="DASHBOARD" subtitle="Gérez vos sites et favoris" />
      <section className="px-6 pb-16">
        <p className="text-center text-gray-500">
          Connectez-vous pour accéder à votre tableau de bord.
        </p>
      </section>
    </div>
  );
}
