"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/lib/auth";
import { db } from "@/lib/db";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") || "").toLowerCase();
  const password = String(formData.get("password") || "");

  const user = await db.user.findUnique({
    where: { email },
    select: {
      role: true,
    },
  });

  const redirectTo =
    user?.role === "platform_admin"
      ? "/admin"
      : user?.role === "client"
        ? "/client"
        : "/dashboard";

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error: "Email ose fjalëkalim i pasaktë.",
      };
    }

    throw error;
  }
}