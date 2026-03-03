import PageHero from "@/components/ui/PageHero/PageHero";
import Button from "@/components/ui/Button/Button";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center gap-6 pb-16">
      <PageHero title="OUPS..." subtitle="Cette page n'existe pas" />
      <Button href="/" variant="primary">
        Retour à l&apos;accueil
      </Button>
    </div>
  );
}
