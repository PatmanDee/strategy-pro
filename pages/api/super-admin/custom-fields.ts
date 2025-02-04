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
    const { modelName, fieldName, fieldType, isRequired } = req.body;

    const customField = await prisma.customField.create({
      data: {
        modelName,
        fieldName,
        fieldType,
        isRequired,
      },
    });

    return res.status(201).json(customField);
  }

  if (req.method === "GET") {
    const customFields = await prisma.customField.findMany();
    return res.status(200).json(customFields);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
