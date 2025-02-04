import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, companyName, message } = req.body;

  try {
    const demoRequest = await prisma.demoRequest.create({
      data: { name, email, companyName, message },
    });

    // Send email notification to super admin
    await sendEmail({
      to: "superadmin@strategypro.com",
      subject: "New Demo Request",
      text: `
        New demo request from:
        Name: ${name}
        Email: ${email}
        Company: ${companyName}
        Message: ${message}
      `,
    });

    res
      .status(201)
      .json({
        message: "Demo request submitted successfully",
        id: demoRequest.id,
      });
  } catch (error) {
    console.error("Error submitting demo request:", error);
    res.status(500).json({ message: "Error submitting demo request" });
  }
}
