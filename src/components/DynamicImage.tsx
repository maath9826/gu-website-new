import Image from "next/image";

import { cn } from "@/lib/utils";
import { getPlaiceholder } from "plaiceholder";
import { getImagePlaceholder } from "@/lib/server-utils";

export type PlaceholderImgData = {
  base64: string;
  data: {
    src: string;
    height: number;
    width: number;
  };
};

export default async function DynamicImage({
  src,
  placeholderData,
  alt,
  containerClass,
  sizes,
  priority,
  className,
}: {
  src?: string;
  placeholderData?: PlaceholderImgData;
  alt?: string;
  containerClass?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const { base64, data } = placeholderData ?? (await getImagePlaceholder(src!));

  return (
    <div className={cn("relative", containerClass)}>
      <Image
        {...data}
        alt={alt || ""}
        placeholder="blur"
        blurDataURL={base64}
        sizes={"(max-width: 768px) 100vw, " + sizes}
        priority={priority}
        className={className}
      />
    </div>
  );
}
