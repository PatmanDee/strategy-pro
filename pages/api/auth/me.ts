import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    role: session.user.role,
    companyId: session.user.companyId,
  });
}
