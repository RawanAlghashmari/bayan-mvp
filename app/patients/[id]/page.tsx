import Link from "next/link";
import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/AppSidebar";
import { MedicationCard } from "@/components/MedicationCard";
import { patients } from "@/data/patients";

interface PatientProfilePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return patients.map((patient) => ({ id: patient.mrn }));
}

export default async function PatientProfilePage({ params }: PatientProfilePageProps) {
  const { id } = await params;
  const patient = patients.find((entry) => entry.mrn === decodeURIComponent(id));

  if (!patient) notFound();

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[224px_1fr]">
      <AppSidebar />
      <main className="min-w-0 px-5 py-7 sm:px-8 lg:px-10 lg:py-9 xl:px-12">
        <div className="mx-auto max-w-7xl">
          <Link href="/patients" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
            </svg>
            Back to Patients
          </Link>

          <section className="mt-6 rounded-2xl border border-white/[0.08] bg-[#111827]/90 px-6 py-6 shadow-lg shadow-black/15 sm:px-8 sm:py-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">Patient profile</p>
            <h1 className="mt-2 text-3xl font-bold tracking-[-0.025em] text-white sm:text-4xl">{patient.name}</h1>
            <dl className="mt-6 grid gap-5 border-t border-white/[0.07] pt-5 sm:grid-cols-3">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Medical Record Number</dt>
                <dd className="mt-1.5 font-mono text-sm font-medium text-slate-200">{patient.mrn}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Nationality</dt>
                <dd className="mt-1.5 text-sm font-medium text-slate-200">{patient.nationality}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Patient Language</dt>
                <dd className="mt-1.5 text-sm font-medium text-slate-200">{patient.language}</dd>
              </div>
            </dl>
          </section>

          <section className="mt-8" aria-labelledby="medications-heading">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 id="medications-heading" className="text-xl font-semibold text-white">Prescribed Medications</h2>
                <p className="mt-1 text-sm text-slate-500">{patient.medications.length} prescribed {patient.medications.length === 1 ? "medication" : "medications"}</p>
              </div>
              <Link href={`/patients/${patient.mrn}/print`} className="rounded-lg border border-fuchsia-400/20 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400">
                Print All Labels
              </Link>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              {patient.medications.map((medication, index) => (
                <MedicationCard key={medication.id} medication={medication} patientId={patient.mrn} index={index} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
