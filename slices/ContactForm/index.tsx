import { PrismicRichText } from "@prismicio/react";

export default function ContactForm({ slice }: { slice: any }) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-12 max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <PrismicRichText field={slice.primary.title} />
        <div className="mt-2">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-bold">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-soft rounded-lg px-4 py-3"
            placeholder="Votre nom"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-soft rounded-lg px-4 py-3"
            placeholder="votre@email.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="border border-soft rounded-lg px-4 py-3"
            placeholder="Votre message..."
          />
        </div>
        <button
          type="submit"
          className="bg-dark text-white rounded-lg px-6 py-3 font-bold self-start"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
