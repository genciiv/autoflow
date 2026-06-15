import { db } from "@/lib/db";

export async function increaseStock({
  businessId,
  partId,
  quantity,
  note,
}: {
  businessId: string;
  partId: string;
  quantity: number;
  note?: string;
}) {
  if (quantity <= 0) {
    throw new Error("Sasia duhet të jetë më e madhe se 0.");
  }

  return db.$transaction(async (tx) => {
    const part = await tx.part.update({
      where: {
        id: partId,
      },
      data: {
        stock: {
          increment: quantity,
        },
      },
    });

    await tx.stockMovement.create({
      data: {
        businessId,
        partId,
        type: "increase",
        quantity,
        note,
      },
    });

    return part;
  });
}

export async function decreaseStock({
  businessId,
  partId,
  quantity,
  note,
}: {
  businessId: string;
  partId: string;
  quantity: number;
  note?: string;
}) {
  if (quantity <= 0) {
    throw new Error("Sasia duhet të jetë më e madhe se 0.");
  }

  return db.$transaction(async (tx) => {
    const part = await tx.part.findUnique({
      where: {
        id: partId,
      },
    });

    if (!part) {
      throw new Error("Pjesa nuk u gjet.");
    }

    if (part.businessId !== businessId) {
      throw new Error("Nuk ke akses te kjo pjesë.");
    }

    if (part.stock < quantity) {
      throw new Error("Stoku nuk mjafton.");
    }

    const updatedPart = await tx.part.update({
      where: {
        id: partId,
      },
      data: {
        stock: {
          decrement: quantity,
        },
      },
    });

    await tx.stockMovement.create({
      data: {
        businessId,
        partId,
        type: "decrease",
        quantity,
        note,
      },
    });

    return updatedPart;
  });
}