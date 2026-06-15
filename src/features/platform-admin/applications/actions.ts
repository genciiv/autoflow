"use server";

import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function approveBusinessApplication(applicationId: string) {
  const application = await db.businessApplication.findUnique({
    where: { id: applicationId },
  });

  if (!application) {
    throw new Error("Aplikimi nuk u gjet.");
  }

  const business = await db.business.create({
    data: {
      name: application.businessName,
      city: application.city,
      phone: application.phone,
      email: application.email,
      status: "active",
      plan: "basic",
    },
  });

  const temporaryPassword = "AutoFlow123!";
  const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

  await db.user.create({
    data: {
      name: application.ownerName,
      email: application.email.toLowerCase(),
      password: hashedPassword,
      role: "owner",
      businessId: business.id,
    },
  });

  await db.businessApplication.update({
    where: { id: applicationId },
    data: { status: "approved" },
  });

  revalidatePath("/admin/applications");
}

export async function rejectBusinessApplication(applicationId: string) {
  await db.businessApplication.update({
    where: { id: applicationId },
    data: { status: "rejected" },
  });

  revalidatePath("/admin/applications");
}