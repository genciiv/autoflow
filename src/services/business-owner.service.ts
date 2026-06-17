import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function createBusinessOwnerAccount({
  businessId,
  name,
  email,
  password,
}: {
  businessId: string;
  name: string;
  email: string;
  password: string;
}) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      businessId,
      name,
      email: email.toLowerCase(),
      password: passwordHash,
      role: "owner",
    },
  });

  return user;
}