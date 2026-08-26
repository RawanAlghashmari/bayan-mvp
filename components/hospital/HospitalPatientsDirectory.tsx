"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Patient } from "@/types/patient";

interface HospitalPatientsDirectoryProps {
  patients: Patient[];
}

export function HospitalPatientsDirectory({ patients }: HospitalPatientsDirectoryProps) {
  const [query, setQuery] = useState("");
  const filteredPatients = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return patients;
    return patients.filter((patient) => `${patient.name} ${patient.mrn}`.toLocaleLowerCase().includes(normalizedQuery));
  }, [patients, query]);

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
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Clinical records</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">Patient Directory</h1>
          <p className="mt-1 text-sm text-slate-500">Select a patient to review their active prescription.</p>
        </div>

        <section aria-label="Hospital patient directory">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative block w-full max-w-xl">
              <span className="sr-only">Search patients</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="m20 20-4-4" /></svg>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by patient name or MRN" className="h-10 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15" />
            </label>
            <p aria-live="polite" className="text-xs text-slate-500">{filteredPatients.length} {filteredPatients.length === 1 ? "patient" : "patients"}</p>
          </div>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-xs text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-medium">MRN</th><th className="px-5 py-3 font-medium">Patient Name</th><th className="px-5 py-3 font-medium">Nationality</th><th className="px-5 py-3 font-medium">Preferred Language</th><th className="px-5 py-3 text-center font-medium">Medications</th><th className="px-5 py-3 text-right font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPatients.map((patient) => (
                    <tr key={patient.mrn} className="transition-colors hover:bg-slate-50/80">
                      <td className="whitespace-nowrap px-5 py-4 font-mono text-xs font-semibold text-slate-600">{patient.mrn}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-950">{patient.name}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-slate-600">{patient.nationality}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-slate-600">{patient.preferredLanguage}</td>
                      <td className="px-5 py-4 text-center font-semibold text-slate-700">{patient.medications.length}</td>
                      <td className="px-5 py-4 text-right"><Link href={`/hospital/patients/${patient.mrn}`} className="inline-flex rounded-md bg-teal-700 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">View Prescription</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredPatients.length === 0 && <div className="border-t border-slate-200 px-5 py-12 text-center text-sm text-slate-500">No patients match this search.</div>}
          </div>
        </section>
      </main>
    </div>
  );
}
