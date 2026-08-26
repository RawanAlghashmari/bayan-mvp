import type { Metadata } from "next";
import { HospitalPatientsDirectory } from "@/components/hospital/HospitalPatientsDirectory";
import { patients } from "@/data/patients";

export const metadata: Metadata = {
  title: "Patient Directory | Al Manar Medical Center",
  description: "Hospital-to-BAYAN integration simulation",
};

export default function HospitalPage() {
  return <HospitalPatientsDirectory patients={patients} />;
}
