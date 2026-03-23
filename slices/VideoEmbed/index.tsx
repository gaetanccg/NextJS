import { PrismicRichText } from "@prismicio/react";
import Video from "@/components/ui/Video";

export default function VideoEmbed({ slice }: { slice: any }) {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-12"
    >
      {slice.primary.title && (
        <div className="text-center mb-8">
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      {slice.primary.video_id && <Video id={slice.primary.video_id} />}
    </section>
  );
}
