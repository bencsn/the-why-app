// nextjs api endpoint that creates a user in the database using prisma
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, description } = req.body;
    const incident = await prisma.incident.create({
      data: {
        title,
        description,
      },
    });
    res.redirect("/incidents/" + incident.id);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
