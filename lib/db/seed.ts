import { prisma } from ".";
import { hash } from "bcryptjs";

async function main() {
  // Create a company
  const company = await prisma.company.create({
    data: {
      name: "StrategyPro Demo Company",
      vision: "To be the leading performance management solution provider",
      mission: "Empowering organizations through strategic excellence",
      values: "Innovation, Excellence, Integrity",
    },
  });

  // Create an admin user
  const adminUser = await prisma.user.create({
    data: {
      companyId: company.id,
      firstName: "Admin",
      lastName: "User",
      email: "admin@strategypro.com",
      passwordHash: await hash("admin123", 12),
      accountType: "admin",
      position: "System Administrator",
    },
  });

  // Create default perspectives
  const perspectives = await prisma.perspective.createMany({
    data: [
      {
        companyId: company.id,
        name: "Financial",
        description: "Financial objectives and metrics",
        weight: 25,
      },
      {
        companyId: company.id,
        name: "Customer",
        description: "Customer-focused objectives and metrics",
        weight: 25,
      },
      {
        companyId: company.id,
        name: "Internal Process",
        description: "Internal business process objectives and metrics",
        weight: 25,
      },
      {
        companyId: company.id,
        name: "Learning & Growth",
        description: "Learning and growth objectives and metrics",
        weight: 25,
      },
    ],
  });

  console.log({
    company: company.id,
    admin: adminUser.id,
    perspectives: perspectives.count,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
