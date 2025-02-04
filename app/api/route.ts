import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
  const { name, email, companyName, message } = await request.json();

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

    return NextResponse.json(
      { message: "Demo request submitted successfully", id: demoRequest.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting demo request:", error);
    return NextResponse.json(
      { message: "Error submitting demo request" },
      { status: 500 }
    );
  }
}
