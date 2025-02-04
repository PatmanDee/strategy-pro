import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session || session.user.role !== "COMPANY_ADMIN") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    const resources = await prisma.resource.findMany({
      where: { companyId: session.user.companyId },
    });
    return res.status(200).json(resources);
  }

  if (req.method === "POST") {
    const { title, description, url } = req.body;

    const resource = await prisma.resource.create({
      data: {
        title,
        description,
        url,
        companyId: session.user.companyId,
      },
    });

    return res.status(201).json(resource);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
