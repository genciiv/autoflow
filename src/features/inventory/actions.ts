"use server";

import { revalidatePath } from "next/cache";
import { increaseStock, decreaseStock } from "@/services/stock.service";

export async function increasePartStock(formData: FormData) {
  const businessId = String(formData.get("businessId"));
  const partId = String(formData.get("partId"));
  const quantity = Number(formData.get("quantity"));
  const note = String(formData.get("note") || "");

  await increaseStock({
    businessId,
    partId,
    quantity,
    note,
  });

  revalidatePath("/dashboard/inventory");
}

export async function decreasePartStock(formData: FormData) {
  const businessId = String(formData.get("businessId"));
  const partId = String(formData.get("partId"));
  const quantity = Number(formData.get("quantity"));
  const note = String(formData.get("note") || "");

  await decreaseStock({
    businessId,
    partId,
    quantity,
    note,
  });

  revalidatePath("/dashboard/inventory");
}