import { LabelPictograms } from "@/components/LabelPictograms";
import { getPictograms } from "@/data/pictograms";
import { getTranslation, isSupportedLanguage, rtlLanguages } from "@/data/translations";
import { getPictogramCodes } from "@/lib/pictogramRules";
import type { Medication, Patient } from "@/types/patient";

interface PhysicalMedicationLabelProps {
  patient: Patient;
  medication: Medication;
  className?: string;
}

export function PhysicalMedicationLabel({ patient, medication, className = "" }: PhysicalMedicationLabelProps) {
  const language = patient.preferredLanguage;
  const supportedLanguage = isSupportedLanguage(language) ? language : undefined;
  const translatedInstruction = getTranslation(medication.doctorInstruction, language);
  const isRtl = supportedLanguage ? rtlLanguages.has(supportedLanguage) : false;
  const pictograms = getPictograms(getPictogramCodes(medication.doctorInstruction));

  return (
    <section aria-label={`Medication label for ${medication.medicationName}`} className={`physical-label mx-auto max-w-xl overflow-hidden rounded-[3px] border border-slate-300 bg-white text-[#111827] ${className}`}>
      <div className="px-4 py-3">
        <dl className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 border-b border-slate-300 pb-2">
          <div>
            <dt className="text-[9px] font-medium text-slate-500">Patient Name</dt>
            <dd className="text-xs font-semibold leading-4 text-slate-900">{patient.name}</dd>
          </div>
          <div className="sm:text-right">
            <dt className="text-[9px] font-medium text-slate-500">MRN</dt>
            <dd className="font-mono text-xs font-semibold leading-4 text-slate-900">{patient.mrn}</dd>
          </div>
        </dl>

        <div className="border-b-2 border-slate-900 py-2.5">
          <h2 className="text-lg font-bold leading-6 tracking-tight text-slate-950">
            {medication.medicationName} <span className="whitespace-nowrap">{medication.strength}</span>
          </h2>
          <p className="mt-0.5 text-xs leading-4 text-slate-600">{medication.dosageForm}</p>
        </div>

        <div className="border-b border-slate-300 py-2.5" dir="ltr">
          <p className="text-[10px] font-medium leading-3 text-slate-500">English</p>
          <p className="mt-1 text-sm font-semibold leading-5 text-slate-950">{medication.doctorInstruction}</p>
        </div>

        <div className="border-b border-slate-300 py-2.5" dir={isRtl ? "rtl" : "ltr"}>
          <p className={`text-[10px] font-medium leading-3 text-slate-500 ${isRtl ? "text-right" : "text-left"}`}>{language}</p>
          <p className={`mt-1 text-sm font-semibold leading-5 text-slate-950 ${isRtl ? "text-right" : "text-left"}`}>
            {translatedInstruction ?? "Translation not available"}
          </p>
        </div>

        <LabelPictograms pictograms={pictograms} />

        <p className="border-t border-slate-200 pt-1.5 text-[9px] leading-3 text-slate-500">Keep out of reach of children.</p>
      </div>
    </section>
  );
}
