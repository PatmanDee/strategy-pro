import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (token && token.companyId) {
    // Check if the company is on a free trial
    const freeTrial = await prisma.freeTrial.findFirst({
      where: {
        companyId: token.companyId,
        isActive: true,
        endDate: { gte: new Date() },
      },
    });

    if (freeTrial) {
      // Limit access to certain features for free trial users
      const limitedPaths = ["/advanced-features", "/premium-content"];
      if (
        limitedPaths.some((path) => request.nextUrl.pathname.startsWith(path))
      ) {
        return NextResponse.redirect(new URL("/upgrade", request.url));
      }
    }
  }

  return NextResponse.next();
}
