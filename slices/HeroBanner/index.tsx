import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default function HeroBanner({ slice }: { slice: any }) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative px-6 py-20 text-center"
    >
      {slice.primary.image?.url && (
        <PrismicNextImage
          field={slice.primary.image}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          fill
        />
      )}
      <div className="relative z-10 max-w-3xl mx-auto">
        <PrismicRichText field={slice.primary.title} />
        <div className="mt-4 text-lg">
          <PrismicRichText field={slice.primary.description} />
        </div>
        {slice.primary.button_text && (
          <PrismicNextLink
            field={slice.primary.button_link}
            className="inline-block mt-8 bg-dark text-white rounded-lg px-6 py-3 font-bold"
          >
            {slice.primary.button_text}
          </PrismicNextLink>
        )}
      </div>
    </section>
  );
}
