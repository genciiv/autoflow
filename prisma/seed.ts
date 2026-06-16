import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DIRECT_URL or DATABASE_URL is missing");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString,
  }),
});

async function main() {
  const existingAdmin = await prisma.user.findUnique({
    where: {
      email: "vaqogenci@gmail.com",
    },
  });

  if (existingAdmin) {
    console.log("Admin already exists");
    return;
  }

  const passwordHash = await bcrypt.hash("Mamibabi123?", 10);

  await prisma.user.create({
    data: {
      name: "Platform Admin",
      email: "vaqogenci@gmail.com",
      password: passwordHash,
      role: "platform_admin",
    },
  });

  console.log("Platform admin created");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });