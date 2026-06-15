import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { ROLES } from "@/constants/roles";

export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return session;
}

export async function requirePlatformAdmin() {
  const session = await requireAuth();

  if (session.user.role !== ROLES.PLATFORM_ADMIN) {
    redirect("/dashboard");
  }

  return session;
}

export async function requireBusinessUser() {
  const session = await requireAuth();

  const allowedRoles = [
    ROLES.OWNER,
    ROLES.MANAGER,
    ROLES.MECHANIC,
    ROLES.RECEPTIONIST,
  ];

  if (!allowedRoles.includes(session.user.role as any)) {
    redirect("/auth/login");
  }

  if (!session.user.businessId) {
    redirect("/auth/login");
  }

  return session;
}

export async function requireClient() {
  const session = await requireAuth();

  if (session.user.role !== ROLES.CLIENT) {
    redirect("/dashboard");
  }

  return session;
}