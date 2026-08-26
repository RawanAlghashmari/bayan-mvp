import Image from "next/image";
import Link from "next/link";

const PatientsIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 20.25v-1.5A3.75 3.75 0 0 0 12.25 15h-4.5A3.75 3.75 0 0 0 4 18.75v1.5m16 0v-1a3 3 0 0 0-2.25-2.9M14 4.75a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm3.25 1.1a3 3 0 0 1 0 5.8" />
  </svg>
);

export function AppSidebar() {
  return (
    <aside className="border-b border-white/[0.07] bg-[#090d17]/90 px-5 py-5 backdrop-blur-xl lg:relative lg:min-h-screen lg:border-r lg:border-b-0 lg:px-5 lg:py-6">
      <div className="flex items-center justify-between lg:block">
        <div className="w-28 rounded-2xl border border-white/[0.07] bg-[#080b16] p-2.5 sm:w-32 lg:w-full lg:p-3">
          <Image
            src="/brand/bayan-logo.jpg"
            alt="BAYAN medication care"
            width={1254}
            height={1254}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <nav aria-label="Main navigation" className="lg:mt-8">
          <Link href="/patients" aria-current="page" className="flex items-center gap-3 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-100 shadow-[inset_2px_0_0_#a855f7] transition-colors hover:bg-violet-500/15">
            <PatientsIcon />
            <span>Patients</span>
          </Link>
        </nav>
      </div>

      <div className="mt-auto hidden border-t border-white/[0.06] px-2 pt-5 lg:absolute lg:bottom-7 lg:block lg:w-[184px]">
        <p className="text-xs leading-5 text-slate-500">Secure pharmacist workspace</p>
        <p className="mt-1 text-[11px] text-slate-600">BAYAN MVP · 2026</p>
      </div>
    </aside>
  );
}
