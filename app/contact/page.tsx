import Title from "@/components/ui/Title";
import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Une question ?">
        Contact
      </Title>
      <ContactForm />
    </main>
  );
}
