const { PrismaClient, UserRole } = require("@prisma/client");
const { hash } = require("bcryptjs");

const prisma = new PrismaClient();

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

  // Create users with different roles
  const superAdmin = await prisma.user.create({
    data: {
      firstName: "Super",
      lastName: "Admin",
      email: "superadmin@strategypro.com",
      passwordHash: await hash("superadmin123", 12),
      role: UserRole.SUPER_ADMIN,
      position: "System Administrator",
    },
  });

  const companyAdmin = await prisma.user.create({
    data: {
      companyId: company.id,
      firstName: "Company",
      lastName: "Admin",
      email: "companyadmin@strategypro.com",
      passwordHash: await hash("companyadmin123", 12),
      role: UserRole.COMPANY_ADMIN,
      position: "HR Director",
      department: "Human Resources",
    },
  });

  const manager = await prisma.user.create({
    data: {
      companyId: company.id,
      firstName: "Manager",
      lastName: "User",
      email: "manager@strategypro.com",
      passwordHash: await hash("manager123", 12),
      role: UserRole.MANAGER,
      position: "Team Lead",
      department: "Sales",
    },
  });

  const employee = await prisma.user.create({
    data: {
      companyId: company.id,
      firstName: "Employee",
      lastName: "User",
      email: "employee@strategypro.com",
      passwordHash: await hash("employee123", 12),
      role: UserRole.EMPLOYEE,
      position: "Sales Representative",
      department: "Sales",
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
    superAdmin: superAdmin.id,
    companyAdmin: companyAdmin.id,
    manager: manager.id,
    employee: employee.id,
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
