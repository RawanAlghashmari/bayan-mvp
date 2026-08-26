"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Patient } from "@/types/patient";

interface HospitalSimulatorProps {
  patient: Patient;
}

type SendState = "idle" | "sending" | "success";

const prescription = {
  date: "27 Aug 2026",
  status: "Active",
} as const;

const doctors = ["Dr. Sarah Ahmed", "Dr. Omar Hassan", "Dr. Lina Kareem"] as const;

function getPrescriptionMetadata(mrn: string) {
  const patientNumber = Number.parseInt(mrn.replace("MRN-", ""), 10);
  const sequence = Number.isFinite(patientNumber) ? patientNumber - 900 : 101;
  const doctorIndex = Number.isFinite(patientNumber) ? (patientNumber - 1001) % doctors.length : 0;
  return {
    id: `RX-2026-${String(sequence).padStart(5, "0")}`,
    prescribedBy: doctors[Math.max(0, doctorIndex)],
  };
}

export function HospitalSimulator({ patient }: HospitalSimulatorProps) {
  const [sendState, setSendState] = useState<SendState>("idle");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const metadata = getPrescriptionMetadata(patient.mrn);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  function sendPrescription() {
    if (sendState !== "idle") return;
    setSendState("sending");
    timerRef.current = setTimeout(() => setSendState("success"), 900);
  }

  return (
    <div className="min-h-screen bg-[#f3f6f8] font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-teal-700 text-lg font-bold text-white">M</div>
            <div>
              <p className="text-sm font-bold tracking-tight text-slate-900">Al Manar Medical Center</p>
              <p lang="ar" dir="rtl" className="mt-0.5 w-fit text-xs text-slate-500">مركز المنار الطبي</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-700">Clinical Information System</p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">Integration Simulation — MVP</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:py-10">
        <Link href="/hospital" className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-teal-800">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" /></svg>
          Back to Patient Directory
        </Link>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Medication order</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">Prescription Details</h1>
          <p className="mt-1 text-sm text-slate-500">Review the clinical record before sending it to the pharmacy labeling system.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="space-y-6">
            <section className="rounded-lg border border-slate-200 bg-white" aria-labelledby="patient-heading">
              <div className="border-b border-slate-200 px-5 py-3.5">
                <h2 id="patient-heading" className="text-sm font-semibold text-slate-900">Patient Information</h2>
              </div>
              <dl className="grid gap-x-8 gap-y-5 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="text-xs text-slate-500">Patient Name</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900">{patient.name}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Medical Record Number</dt>
                  <dd className="mt-1 font-mono text-sm font-semibold text-slate-900">{patient.mrn}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Nationality</dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">{patient.nationality}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Preferred Language</dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">{patient.preferredLanguage}</dd>
                  <p className="mt-0.5 text-[10px] text-slate-400">Read-only from patient record</p>
                </div>
              </dl>
            </section>

            <section className="overflow-hidden rounded-lg border border-slate-200 bg-white" aria-labelledby="medications-heading">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3.5">
                <h2 id="medications-heading" className="text-sm font-semibold text-slate-900">Prescribed Medications</h2>
                <span className="text-xs text-slate-500">{patient.medications.length} items</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="border-b border-slate-200 bg-slate-50 text-xs text-slate-500">
                    <tr>
                      <th className="px-5 py-3 font-medium">Medication</th>
                      <th className="px-5 py-3 font-medium">Strength</th>
                      <th className="px-5 py-3 font-medium">Dosage Form</th>
                      <th className="px-5 py-3 font-medium">Doctor Instruction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {patient.medications.map((medication) => (
                      <tr key={medication.id}>
                        <td className="px-5 py-4 font-semibold text-slate-900">{medication.medicationName}</td>
                        <td className="px-5 py-4 text-slate-700">{medication.strength}</td>
                        <td className="px-5 py-4 text-slate-700">{medication.dosageForm}</td>
                        <td className="px-5 py-4 leading-5 text-slate-700">{medication.doctorInstruction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900">Prescription Summary</h2>
            <dl className="mt-4 space-y-4 border-b border-slate-200 pb-5">
              <div>
                <dt className="text-xs text-slate-500">Prescription ID</dt>
                <dd className="mt-1 font-mono text-sm font-semibold">{metadata.id}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Prescribed By</dt>
                <dd className="mt-1 text-sm font-medium">{metadata.prescribedBy}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Prescription Date</dt>
                <dd className="mt-1 text-sm font-medium">{prescription.date}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Status</dt>
                <dd className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700"><span className="size-1.5 rounded-full bg-emerald-500" />{prescription.status}</dd>
              </div>
            </dl>

            {sendState === "success" ? (
              <div className="mt-5" aria-live="polite">
                <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm font-medium leading-5 text-emerald-800">Prescription sent successfully to BAYAN</div>
                <Link href={`/patients/${patient.mrn}`} className="mt-3 flex w-full items-center justify-center rounded-md bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">Open in BAYAN</Link>
              </div>
            ) : (
              <button type="button" onClick={sendPrescription} disabled={sendState === "sending"} className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-wait disabled:bg-blue-500" aria-live="polite">
                {sendState === "sending" && <span aria-hidden="true" className="size-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />}
                {sendState === "sending" ? "Sending prescription to BAYAN..." : "Send Prescription to BAYAN"}
              </button>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
