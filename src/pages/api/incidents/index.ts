// nextjs api endpoint that creates a user in the database using prisma
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, description } = req.body;
    // get user id from cookie
    const user = req.cookies.user;

    // allow creating incident without user
    const data = {
      title,
      description,
      users: user
        ? {
            connect: {
              id: user,
            },
          }
        : undefined,
    };

    const incident = await prisma.incident.create({
      data: data,
    });
    res.redirect("/incidents/" + incident.id);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
