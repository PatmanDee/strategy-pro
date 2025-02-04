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
    const demoRequests = await prisma.demoRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json(demoRequests);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
