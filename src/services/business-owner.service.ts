import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { generateTemporaryPassword } from "@/utils/generate-temporary-password";

export async function createBusinessOwnerAccount({
  businessId,
  name,
  email,
}: {
  businessId: string;
  name: string;
  email: string;
}) {
  const existingUser = await db.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (existingUser) {
    throw new Error("Ky email ekziston tashmë.");
  }

  const temporaryPassword = generateTemporaryPassword();
  const hashedPassword = await bcrypt.hash(temporaryPassword, 10);

  const user = await db.user.create({
    data: {
      businessId,
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: "owner",
    },
  });

  return {
    user,
    temporaryPassword,
  };
}