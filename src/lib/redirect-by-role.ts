import { redirect } from "next/navigation";
import { ROLES } from "@/constants/roles";

export function redirectByRole(role?: string | null) {
  if (role === ROLES.PLATFORM_ADMIN) {
    redirect("/admin");
  }

  if (role === ROLES.CLIENT) {
    redirect("/client");
  }

  redirect("/dashboard");
}