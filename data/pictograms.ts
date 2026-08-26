export const pictogramCodes = [
  "ORAL_MEDICATION",
  "TWICE_DAILY_WITH_MEALS",
  "THREE_TIMES_DAILY",
  "WITH_MEALS",
  "BEDTIME",
  "DROWSINESS",
  "AS_NEEDED",
  "MORNING",
] as const;

export type PictogramCode = (typeof pictogramCodes)[number];

export interface Pictogram {
  code: PictogramCode;
  fileName: string;
  src: string;
  alt: string;
  caption: string;
  description: string;
  width: number;
  height: number;
}

export const pictogramCatalog: Record<PictogramCode, Pictogram> = {
  ORAL_MEDICATION: {
    code: "ORAL_MEDICATION", fileName: "01.GIF", src: "/pictograms/01.GIF", alt: "Take by mouth", caption: "By mouth", description: "Medication is taken by mouth", width: 140, height: 180,
  },
  TWICE_DAILY_WITH_MEALS: {
    code: "TWICE_DAILY_WITH_MEALS", fileName: "03.GIF", src: "/pictograms/03.GIF", alt: "Take twice daily with meals", caption: "Twice daily with meals", description: "Take medication twice daily with meals", width: 140, height: 171,
  },
  THREE_TIMES_DAILY: {
    code: "THREE_TIMES_DAILY", fileName: "16.GIF", src: "/pictograms/16.GIF", alt: "Take three times daily", caption: "3 times daily", description: "Take medication three times daily", width: 726, height: 646,
  },
  WITH_MEALS: {
    code: "WITH_MEALS", fileName: "18.GIF", src: "/pictograms/18.GIF", alt: "Take with meals", caption: "With meals", description: "Take medication with meals", width: 169, height: 223,
  },
  BEDTIME: {
    code: "BEDTIME", fileName: "22.GIF", src: "/pictograms/22.GIF", alt: "Take at bedtime", caption: "Bedtime", description: "Take medication at bedtime", width: 169, height: 221,
  },
  DROWSINESS: {
    code: "DROWSINESS", fileName: "24.GIF", src: "/pictograms/24.GIF", alt: "May cause drowsiness", caption: "May cause drowsiness", description: "Medication may cause drowsiness", width: 169, height: 169,
  },
  AS_NEEDED: {
    code: "AS_NEEDED", fileName: "58.GIF", src: "/pictograms/58.GIF", alt: "Take as needed", caption: "As needed", description: "Take/use medication as needed", width: 404, height: 218,
  },
  MORNING: {
    code: "MORNING", fileName: "67.GIF", src: "/pictograms/67.GIF", alt: "Take in the morning", caption: "Morning", description: "Take/use medication in the morning (Catalog only for future use)", width: 169, height: 209,
  },
};

export function getPictograms(codes: readonly PictogramCode[]): Pictogram[] {
  return codes.map((code) => pictogramCatalog[code]);
}
