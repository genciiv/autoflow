import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", ...props }: Props) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition ${className}`}
      {...props}
    />
  );
}