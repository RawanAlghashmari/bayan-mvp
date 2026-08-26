"use client";

import { useMemo, useState } from "react";
import type { Patient } from "@/types/patient";
import { PatientTable } from "./PatientTable";

interface PatientSearchProps {
  patients: Patient[];
}

export function PatientSearch({ patients }: PatientSearchProps) {
  const [query, setQuery] = useState("");

  const filteredPatients = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return patients;
    return patients.filter(({ name, mrn }) =>
      `${name} ${mrn}`.toLocaleLowerCase().includes(normalizedQuery),
    );
  }, [patients, query]);

  return (
    <section aria-label="Patient search and results">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="group relative block w-full max-w-2xl">
          <span className="sr-only">Search patients</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-violet-400">
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="m20 20-4-4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by patient name or medical record number"
            className="h-12 w-full rounded-xl border border-white/[0.09] bg-[#121827]/90 pl-12 pr-4 text-sm text-white shadow-sm shadow-black/20 outline-none transition placeholder:text-slate-600 focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/10"
          />
        </label>
        <p aria-live="polite" className="shrink-0 text-sm text-slate-500">
          <span className="font-semibold text-slate-300">{filteredPatients.length}</span> {filteredPatients.length === 1 ? "patient" : "patients"}
        </p>
      </div>
      <PatientTable patients={filteredPatients} />
    </section>
  );
}
