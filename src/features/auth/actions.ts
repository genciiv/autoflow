"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function registerUser(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "").toLowerCase();
  const password = String(formData.get("password") || "");

  if (!name || !email || !password) {
    return {
      success: false,
      message: "Plotëso të gjitha fushat.",
    };
  }

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      success: false,
      message: "Ky email ekziston.",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "client",
    },
  });

  return {
    success: true,
    message: "Llogaria u krijua me sukses.",
  };
}