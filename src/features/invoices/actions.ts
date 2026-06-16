"use server";

import { redirect } from "next/navigation";
import { createInvoiceFromServiceRecord } from "@/services/invoice.service";

export async function generateInvoiceAction(serviceRecordId: string) {
  const invoice = await createInvoiceFromServiceRecord(serviceRecordId);

  redirect(`/dashboard/invoices/${invoice.id}`);
}