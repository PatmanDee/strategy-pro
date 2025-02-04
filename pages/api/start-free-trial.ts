import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { companyId } = req.body;

  try {
    const oneMonthFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const freeTrial = await prisma.freeTrial.create({
      data: {
        companyId,
        endDate: oneMonthFromNow,
      },
    });

    res
      .status(201)
      .json({ message: "Free trial started successfully", id: freeTrial.id });
  } catch (error) {
    console.error("Error starting free trial:", error);
    res.status(500).json({ message: "Error starting free trial" });
  }
}
