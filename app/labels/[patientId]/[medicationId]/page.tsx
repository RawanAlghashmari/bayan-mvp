import Link from "next/link";
import { AppSidebar } from "@/components/AppSidebar";
import { PhysicalMedicationLabel } from "@/components/PhysicalMedicationLabel";
import { PrintButton } from "@/components/PrintButton";
import { patients } from "@/data/patients";
import { isSupportedLanguage, languageCodes } from "@/data/translations";

interface LabelPreviewPageProps {
  params: Promise<{ patientId: string; medicationId: string }>;
}

export function generateStaticParams() {
  return patients.flatMap((patient) =>
    patient.medications.map((medication) => ({
      patientId: patient.mrn,
      medicationId: medication.id,
    })),
  );
}

function MissingLabel({ patientId }: { patientId: string }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[224px_1fr]">
      <AppSidebar />
      <main className="grid min-w-0 place-items-center px-5 py-12">
        <section className="w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#111827]/90 p-8 text-center shadow-lg shadow-black/15">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">Label preview</p>
          <h1 className="mt-3 text-2xl font-bold text-white">Patient or Medication not found</h1>
          <p className="mt-2 text-sm leading-6 text-slate-400">The requested label cannot be displayed. Return to the patient directory and choose an available medication.</p>
          <Link href={patients.some((patient) => patient.mrn === patientId) ? `/patients/${patientId}` : "/patients"} className="mt-6 inline-flex rounded-lg border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-500/20">
            Go back
          </Link>
        </section>
      </main>
    </div>
  );
}

export default async function LabelPreviewPage({ params }: LabelPreviewPageProps) {
  const { patientId, medicationId } = await params;
  const patient = patients.find((entry) => entry.mrn === decodeURIComponent(patientId));
  const medication = patient?.medications.find((entry) => entry.id === decodeURIComponent(medicationId));

  if (!patient || !medication) return <MissingLabel patientId={patientId} />;

  const language = patient.preferredLanguage;
  const supportedLanguage = isSupportedLanguage(language) ? language : undefined;
  return (
    <div className="print-shell min-h-screen lg:grid lg:grid-cols-[224px_1fr]">
      <div className="print-hidden"><AppSidebar /></div>
      <main className="print-content min-w-0 px-5 py-7 sm:px-8 lg:px-10 lg:py-9 xl:px-12">
        <div className="mx-auto max-w-5xl">
          <Link href={`/patients/${patient.mrn}`} className="print-hidden inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
            </svg>
            Back to Patient
          </Link>

          <header className="print-hidden mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">Label workspace</p>
              <h1 className="mt-1.5 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl">Medication Label Preview</h1>
              <p className="mt-2 text-sm text-slate-400">Review the automatically generated bilingual medication label</p>
            </div>
            <span className="w-fit rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-200">
              EN + {supportedLanguage ? languageCodes[supportedLanguage] : language}
            </span>
          </header>

          <PhysicalMedicationLabel patient={patient} medication={medication} className="mt-7" />

          <div className="print-hidden mt-5 flex justify-end">
            <PrintButton>Print Label</PrintButton>
          </div>
        </div>
      </main>
    </div>
  );
}
