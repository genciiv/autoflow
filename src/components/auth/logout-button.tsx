import { logoutAction } from "@/features/auth/logout.action";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
      >
        Dil
      </button>
    </form>
  );
}