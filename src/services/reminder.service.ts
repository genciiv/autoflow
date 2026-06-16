import { db } from "@/lib/db";

export function addMonths(date: Date, months: number) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export async function createServiceDueReminder({
  businessId,
  customerId,
  vehicleId,
  serviceTitle,
  monthsUntilDue = 6,
}: {
  businessId: string;
  customerId: string;
  vehicleId: string;
  serviceTitle: string;
  monthsUntilDue?: number;
}) {
  const dueDate = addMonths(new Date(), monthsUntilDue);

  return db.reminder.create({
    data: {
      businessId,
      customerId,
      vehicleId,
      title: `Rikujtim për ${serviceTitle}`,
      type: "service_due",
      dueDate,
      status: "pending",
      note: `Kontakto klientin për ${serviceTitle}.`,
    },
  });
}