import Link from "next/link";
import { AppSidebar } from "@/components/AppSidebar";
import { PhysicalMedicationLabel } from "@/components/PhysicalMedicationLabel";
import { PrintButton } from "@/components/PrintButton";
import { patients } from "@/data/patients";

interface PrintAllLabelsPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return patients.map((patient) => ({ id: patient.mrn }));
}

export default async function PrintAllLabelsPage({ params }: PrintAllLabelsPageProps) {
  const { id } = await params;
  const patient = patients.find((entry) => entry.mrn === decodeURIComponent(id));

  if (!patient || patient.medications.length === 0) {
    return (
      <div className="min-h-screen lg:grid lg:grid-cols-[224px_1fr]">
        <AppSidebar />
        <main className="grid min-w-0 place-items-center px-5 py-12">
          <section className="w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#111827]/90 p-8 text-center shadow-lg shadow-black/15">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">Batch printing</p>
            <h1 className="mt-3 text-2xl font-bold text-white">No labels available</h1>
            <p className="mt-2 text-sm leading-6 text-slate-400">The patient could not be found or has no prescribed medications to print.</p>
            <Link href="/patients" className="mt-6 inline-flex rounded-lg border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-500/20">Back to Patients</Link>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="print-shell min-h-screen lg:grid lg:grid-cols-[224px_1fr]">
      <div className="print-hidden"><AppSidebar /></div>
      <main className="print-content min-w-0 px-5 py-7 sm:px-8 lg:px-10 lg:py-9 xl:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="print-hidden">
            <Link href={`/patients/${patient.mrn}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" /></svg>
              Back to Patient
            </Link>
            <header className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">Batch label workspace</p>
                <h1 className="mt-1.5 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl">Print Labels for {patient.name}</h1>
                <p className="mt-2 text-sm text-slate-400">Review all prescribed medication labels before printing</p>
              </div>
              <PrintButton>Print {patient.medications.length} Labels</PrintButton>
            </header>
          </div>

          <div className="mt-7 space-y-6 print:mt-0 print:space-y-0">
            {patient.medications.map((medication) => (
              <div key={medication.id} className="batch-print-item">
                <PhysicalMedicationLabel patient={patient} medication={medication} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
