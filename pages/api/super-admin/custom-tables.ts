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

  if (req.method === "POST") {
    const { tableName, fields } = req.body;

    const customTable = await prisma.customTable.create({
      data: {
        tableName,
        fields,
      },
    });

    return res.status(201).json(customTable);
  }

  if (req.method === "GET") {
    const customTables = await prisma.customTable.findMany();
    return res.status(200).json(customTables);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
