"use client";

import Image from "next/image";
import { useState } from "react";
import type { Pictogram } from "@/data/pictograms";

interface LabelPictogramsProps {
  pictograms: Pictogram[];
}

export function LabelPictograms({ pictograms }: LabelPictogramsProps) {
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const visiblePictograms = pictograms.filter((pictogram) => !failedImages.includes(pictogram.code));

  if (visiblePictograms.length === 0) return null;

  return (
    <div className="flex flex-wrap items-start justify-center gap-x-4 gap-y-2 border-t border-slate-200 px-1 py-2" aria-label="Medication instructions pictograms">
      {visiblePictograms.slice(0, 4).map((pictogram) => (
        <figure key={pictogram.code} className="flex w-16 flex-col items-center text-center">
          <Image
            src={pictogram.src}
            alt={pictogram.alt}
            title={pictogram.description}
            width={pictogram.width}
            height={pictogram.height}
            unoptimized
            onError={() => setFailedImages((current) => current.includes(pictogram.code) ? current : [...current, pictogram.code])}
            className="h-8 w-auto max-w-10 object-contain"
          />
          <figcaption className="mt-0.5 text-[9px] leading-3 text-slate-500">{pictogram.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
