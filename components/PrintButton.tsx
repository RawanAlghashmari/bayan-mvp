"use client";

interface PrintButtonProps {
  children: React.ReactNode;
}

export function PrintButton({ children }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg border border-fuchsia-400/20 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
    >
      {children}
    </button>
  );
}
