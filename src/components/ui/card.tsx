import { ReactNode } from "react";

export function Card({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      {children}
    </div>
  );
}