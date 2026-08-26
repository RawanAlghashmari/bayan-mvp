import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { PatientSearch } from "@/components/PatientSearch";
import { patients } from "@/data/patients";

export default function PatientsPage() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[224px_1fr]">
      <AppSidebar />
      <main className="min-w-0 px-5 py-7 sm:px-8 lg:px-10 lg:py-9 xl:px-12">
        <div className="mx-auto max-w-7xl">
          <AppHeader />
          <PatientSearch patients={patients} />
        </div>
      </main>
    </div>
  );
}
