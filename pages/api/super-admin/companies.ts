import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "SUPER_ADMIN") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    const companies = await prisma.company.findMany({
      include: { package: true, license: true },
    });
    return res.status(200).json(companies);
  }

  if (req.method === "POST") {
    const { name, packageId, licenseKey } = req.body;

    const company = await prisma.company.create({
      data: {
        name,
        package: { connect: { id: packageId } },
        license: {
          create: {
            key: licenseKey,
            expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
          },
        },
      },
    });

    return res.status(201).json(company);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
