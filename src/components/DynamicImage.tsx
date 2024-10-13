import Image from "next/image";

import { cn } from "@/lib/utils";
import { getPlaiceholder } from "plaiceholder";
import { getImagePlaceholder } from "@/lib/server-utils";
import { twMerge } from "tailwind-merge";

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
  id,
  wrapperClass,
  sizes,
  priority,
  className,
}: {
  src?: string;
  placeholderData?: PlaceholderImgData;
  alt?: string;
  id?: string;
  wrapperClass?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const { base64, data } = placeholderData ?? (await getImagePlaceholder(src!));

  return (
    <div className={cn("relative", wrapperClass)}>
      <Image
        {...data}
        id={id}
        alt={alt || ""}
        placeholder="blur"
        blurDataURL={base64}
        sizes={"(max-width: 768px) 100vw, " + sizes}
        priority={priority}
        className={twMerge("h-full w-full object-cover", className)}
      />
    </div>
  );
}
