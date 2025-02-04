import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (
    !session ||
    !["COMPANY_ADMIN", "MANAGER", "EMPLOYEE"].includes(session.user.role)
  ) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    const resources = await prisma.resource.findMany({
      where: { companyId: session.user.companyId },
    });
    return res.status(200).json(resources);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
