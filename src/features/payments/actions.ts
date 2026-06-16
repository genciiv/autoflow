"use server";

import { revalidatePath } from "next/cache";
import { recordInvoicePayment } from "@/services/payment.service";

export async function recordPaymentAction(formData: FormData) {
  const businessId = String(formData.get("businessId"));
  const invoiceId = String(formData.get("invoiceId"));
  const amount = Number(formData.get("amount"));
  const method = String(formData.get("method"));
  const note = String(formData.get("note") || "");

  await recordInvoicePayment({
    businessId,
    invoiceId,
    amount,
    method,
    note,
  });

  revalidatePath("/dashboard/invoices");
}