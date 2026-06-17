"use server";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export async function createBusinessApplicationAction(formData: FormData) {
  const businessName = String(formData.get("businessName") || "");
  const ownerName = String(formData.get("ownerName") || "");
  const phone = String(formData.get("phone") || "");
  const email = String(formData.get("email") || "").toLowerCase();
  const city = String(formData.get("city") || "");
  const businessType = String(formData.get("businessType") || "");
  const message = String(formData.get("message") || "");

  if (!businessName || !ownerName || !phone || !email) {
    redirect("/apply?error=missing-fields");
  }

  await db.businessApplication.create({
    data: {
      businessName,
      ownerName,
      phone,
      email,
      city,
      businessType,
      message,
      status: "pending",
    },
  });

  redirect("/apply?success=true");
}