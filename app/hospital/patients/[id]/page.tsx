import Link from "next/link";
import type { Metadata } from "next";
import { HospitalSimulator } from "@/components/hospital/HospitalSimulator";
import { patients } from "@/data/patients";

interface HospitalPrescriptionPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Prescription Details | Al Manar Medical Center",
};

export function generateStaticParams() {
  return patients.map((patient) => ({ id: patient.mrn }));
}

export default async function HospitalPrescriptionPage({ params }: HospitalPrescriptionPageProps) {
  const { id } = await params;
  const patient = patients.find((entry) => entry.mrn === decodeURIComponent(id));

  if (!patient) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-100 px-6 text-slate-900">
        <section className="max-w-md rounded-lg border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-xl font-semibold">Patient record unavailable</h1>
          <p className="mt-2 text-sm text-slate-600">The requested prescription record could not be loaded.</p>
          <Link href="/hospital" className="mt-5 inline-flex rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white">Back to Patient Directory</Link>
        </section>
      </main>
    );
  }

  return <HospitalSimulator patient={patient} />;
}
