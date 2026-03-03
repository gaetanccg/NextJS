import PageHero from "@/components/ui/PageHero/PageHero";

export default function ContactPage() {
  return (
    <div>
      <PageHero title="CONTACT" subtitle="Envoyez-nous un message" />
      <section className="mx-auto max-w-md px-6 pb-16">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-project-black"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-project-black"
          />
          <textarea
            placeholder="Votre message"
            rows={5}
            className="resize-none rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-project-black"
          />
          <button
            type="submit"
            className="rounded-full bg-project-black px-6 py-2.5 text-sm font-medium text-project-white transition-opacity hover:opacity-90"
          >
            Envoyer
          </button>
        </form>
      </section>
    </div>
  );
}
