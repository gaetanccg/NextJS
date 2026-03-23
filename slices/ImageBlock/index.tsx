import { PrismicNextImage } from "@prismicio/next";

export default function ImageBlock({ slice }: { slice: any }) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-12 max-w-4xl mx-auto"
    >
      <figure>
        <PrismicNextImage
          field={slice.primary.image}
          className="rounded-lg w-full"
        />
        {slice.primary.caption && (
          <figcaption className="text-center text-sm text-medium mt-4">
            {slice.primary.caption}
          </figcaption>
        )}
      </figure>
    </section>
  );
}
