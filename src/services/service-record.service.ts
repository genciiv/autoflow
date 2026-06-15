import { db } from "@/lib/db";
import { decreaseStock } from "@/services/stock.service";

type UsedPartInput = {
  partId: string;
  quantity: number;
  unitPrice: number;
};

export async function createServiceRecordWithParts({
  businessId,
  vehicleId,
  customerId,
  title,
  description,
  mileage,
  laborCost,
  usedParts,
}: {
  businessId: string;
  vehicleId: string;
  customerId: string;
  title: string;
  description?: string;
  mileage?: number;
  laborCost: number;
  usedParts: UsedPartInput[];
}) {
  const partsCost = usedParts.reduce(
    (sum, part) => sum + part.quantity * part.unitPrice,
    0
  );

  const totalCost = laborCost + partsCost;

  return db.$transaction(async (tx) => {
    const serviceRecord = await tx.serviceRecord.create({
      data: {
        businessId,
        vehicleId,
        customerId,
        title,
        description,
        mileage,
        laborCost,
        partsCost,
        totalCost,
        status: "pending",
      },
    });

    for (const usedPart of usedParts) {
      await tx.serviceRecordPart.create({
        data: {
          serviceRecordId: serviceRecord.id,
          partId: usedPart.partId,
          quantity: usedPart.quantity,
          unitPrice: usedPart.unitPrice,
          totalPrice: usedPart.quantity * usedPart.unitPrice,
        },
      });

      await decreaseStock({
        businessId,
        partId: usedPart.partId,
        quantity: usedPart.quantity,
        note: `Përdorur në servis ${serviceRecord.id}`,
      });
    }

    return serviceRecord;
  });
}