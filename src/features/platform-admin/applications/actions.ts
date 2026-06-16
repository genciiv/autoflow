"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { createBusinessOwnerAccount } from "@/services/business-owner.service";
import { getTrialEndDate } from "@/utils/trial";

export async function approveBusinessApplication(applicationId: string) {
  const application = await db.businessApplication.findUnique({
    where: {
      id: applicationId,
    },
  });

  if (!application) {
    throw new Error("Aplikimi nuk u gjet.");
  }

  if (application.status !== "pending") {
    throw new Error("Ky aplikim është procesuar më parë.");
  }

  const business = await db.business.create({
    data: {
      name: application.businessName,
      city: application.city,
      phone: application.phone,
      email: application.email.toLowerCase(),
      status: "trial",
      plan: "basic",
      trialEndsAt: getTrialEndDate(30),
      subscriptionEndsAt: getTrialEndDate(30),
    },
  });

  const { temporaryPassword } = await createBusinessOwnerAccount({
    businessId: business.id,
    name: application.ownerName,
    email: application.email,
  });

  await db.businessApplication.update({
    where: {
      id: applicationId,
    },
    data: {
      status: "approved",
    },
  });

  console.log("Temporary owner password:", temporaryPassword);

  revalidatePath("/admin/applications");
  revalidatePath("/admin/businesses");
}

export async function rejectBusinessApplication(applicationId: string) {
  await db.businessApplication.update({
    where: {
      id: applicationId,
    },
    data: {
      status: "rejected",
    },
  });

  revalidatePath("/admin/applications");
}