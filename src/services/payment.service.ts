import { db } from "@/lib/db";

export async function recordInvoicePayment({
  businessId,
  invoiceId,
  amount,
  method,
  note,
}: {
  businessId: string;
  invoiceId: string;
  amount: number;
  method: string;
  note?: string;
}) {
  return db.$transaction(async (tx) => {
    const invoice = await tx.invoice.findUnique({
      where: { id: invoiceId },
      include: { payments: true },
    });

    if (!invoice) {
      throw new Error("Fatura nuk u gjet.");
    }

    const paidBefore = invoice.payments.reduce(
      (sum, payment) => sum + payment.amount,
      0
    );

    const paidTotal = paidBefore + amount;

    const status =
      paidTotal >= invoice.total ? "paid" : "partially_paid";

    const payment = await tx.payment.create({
      data: {
        businessId,
        invoiceId,
        amount,
        method,
        note,
        status: "paid",
      },
    });

    await tx.invoice.update({
      where: { id: invoiceId },
      data: { status },
    });

    return payment;
  });
}