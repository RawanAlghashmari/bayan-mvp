import Link from "next/link";
import type { Medication } from "@/types/patient";

interface MedicationCardProps {
  medication: Medication;
  patientId: string;
  index: number;
}

export function MedicationCard({ medication, patientId, index }: MedicationCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/90 shadow-lg shadow-black/15">
      <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-5 py-5 sm:px-6">
        <div className="flex min-w-0 items-start gap-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600/25 to-fuchsia-500/20 text-sm font-bold text-violet-200 ring-1 ring-violet-400/20">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-white">{medication.medicationName}</h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-medium text-orange-300">{medication.strength}</span>
              <span aria-hidden="true" className="size-1 rounded-full bg-slate-600" />
              <span>{medication.dosageForm}</span>
            </div>
          </div>
        </div>
        <Link
          href={`/labels/${patientId}/${medication.id}`}
          className="shrink-0 rounded-lg border border-violet-400/25 bg-violet-500/10 px-3.5 py-2 text-xs font-semibold text-violet-200 transition-colors hover:bg-violet-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
        >
          Preview Label
        </Link>
      </div>
      <div className="px-5 py-5 sm:px-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Doctor instruction</p>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-100">{medication.doctorInstruction}</p>
      </div>
    </article>
  );
}
