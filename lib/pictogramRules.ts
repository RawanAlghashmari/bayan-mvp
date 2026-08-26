import type { PictogramCode } from "@/data/pictograms";

const instructionPictogramMap: Readonly<Record<string, readonly PictogramCode[]>> = {
  "Take 1 capsule three times daily after meals.": ["ORAL_MEDICATION", "THREE_TIMES_DAILY"],
  "Take 2 tablets when needed for pain.": ["ORAL_MEDICATION", "AS_NEEDED"],
  "Take 1 tablet at bedtime. May cause drowsiness.": ["ORAL_MEDICATION", "BEDTIME", "DROWSINESS"],
  "Take 1 tablet twice daily with meals.": ["ORAL_MEDICATION", "TWICE_DAILY_WITH_MEALS"],
  "Take 1 capsule once daily before breakfast.": ["ORAL_MEDICATION"],
};

export function getPictogramCodes(instruction: string): readonly PictogramCode[] {
  return instructionPictogramMap[instruction] ?? [];
}
