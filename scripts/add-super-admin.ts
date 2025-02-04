import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hash("superadmin123", 12);

  const superAdmin = await prisma.user.create({
    data: {
      email: "superadmin@strategypro.com",
      passwordHash: hashedPassword,
      firstName: "Super",
      lastName: "Admin",
      role: "SUPER_ADMIN",
    },
  });

  console.log("Super admin created:", superAdmin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
