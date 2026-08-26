import Link from "next/link";
import type { Patient } from "@/types/patient";

interface PatientTableProps {
  patients: Patient[];
}

const initials = (name: string) => name.split(" ").map((part) => part[0]).slice(0, 2).join("");

export function PatientTable({ patients }: PatientTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827]/90 shadow-lg shadow-black/15 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/[0.07] bg-white/[0.02] text-[10px] uppercase tracking-[0.13em] text-slate-500">
              <th className="px-6 py-4 font-medium">Medical Record Number</th>
              <th className="px-6 py-4 font-medium">Patient Name</th>
              <th className="px-6 py-4 font-medium">Nationality</th>
              <th className="px-6 py-4 font-medium">Patient Language</th>
              <th className="px-6 py-4 text-center font-medium">Medications</th>
              <th className="px-6 py-4 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.055]">
            {patients.map((patient, index) => (
              <tr key={patient.mrn} className="group transition-colors hover:bg-white/[0.022]">
                <td className="whitespace-nowrap px-6 py-4 font-mono text-[11px] font-medium tracking-wide text-slate-500">{patient.mrn}</td>
                <td className="whitespace-nowrap px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className={`grid size-9 place-items-center rounded-lg text-xs font-semibold text-white ${index % 2 === 0 ? "bg-gradient-to-br from-violet-600 to-fuchsia-500" : "bg-gradient-to-br from-orange-500 to-orange-400"}`}>
                      {initials(patient.name)}
                    </span>
                    <span className="text-sm font-semibold text-white">{patient.name}</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-5 text-sm text-slate-400">{patient.nationality}</td>
                <td className="whitespace-nowrap px-6 py-5">
                  <span className="text-sm text-slate-300">{patient.language}</span>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="inline-grid size-8 place-items-center rounded-lg bg-orange-400/10 text-sm font-semibold text-orange-300">{patient.medicationsCount}</span>
                </td>
                <td className="px-6 py-5 text-right">
                  <Link href={`/patients/${patient.mrn}`} className="inline-flex whitespace-nowrap rounded-lg border border-violet-400/20 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400">
                    View Patient
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {patients.length === 0 && (
        <div className="grid min-h-52 place-items-center px-6 py-12 text-center">
          <div>
            <div className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-white/[0.04] text-slate-500">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="size-6"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
            </div>
            <p className="font-medium text-slate-300">No patients found</p>
            <p className="mt-1 text-sm text-slate-500">Try a different name or medical record number.</p>
          </div>
        </div>
      )}
    </div>
  );
}
