import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export async function getCurrentBusinessId() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  if (!session.user.businessId) {
    redirect("/auth/login");
  }

  return session.user.businessId;
}