import { db } from "@/lib/db";
import { generateInvoiceNumber } from "@/utils/generate-invoice-number";

export async function createInvoiceFromServiceRecord(serviceRecordId: string) {
  const serviceRecord = await db.serviceRecord.findUnique({
    where: {
      id: serviceRecordId,
    },
    include: {
      invoice: true,
      business: true,
      customer: true,
      vehicle: true,
      parts: {
        include: {
          part: true,
        },
      },
    },
  });

  if (!serviceRecord) {
    throw new Error("Servisi nuk u gjet.");
  }

  if (serviceRecord.invoice) {
    throw new Error("Ky servis ka faturë ekzistuese.");
  }

  const subtotal = serviceRecord.totalCost;
  const tax = 0;
  const total = subtotal + tax;

  const invoice = await db.invoice.create({
    data: {
      businessId: serviceRecord.businessId,
      serviceRecordId: serviceRecord.id,
      invoiceNumber: generateInvoiceNumber(),
      subtotal,
      tax,
      total,
      status: "unpaid",
    },
  });

  await db.serviceRecord.update({
    where: {
      id: serviceRecord.id,
    },
    data: {
      status: "invoiced",
    },
  });

  return invoice;
}