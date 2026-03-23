import { PrismicRichText } from "@prismicio/react";

export default function RichText({ slice }: { slice: any }) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-12 max-w-3xl mx-auto prose"
    >
      <PrismicRichText field={slice.primary.content} />
    </section>
  );
}
