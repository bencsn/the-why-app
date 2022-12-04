// nextjs api endpoint that creates a user in the database using prisma
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../server/db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name } = req.body;
    const { incidentId } = req.query;

    // find the incident by id
    const incident = await prisma.incident.findUnique({
      where: {
        id: incidentId as string,
      },
    });

    if (!incident) {
      res.status(404).json({ message: "Incident not found" });
      return;
    }

    const user = await prisma.user.create({
      data: {
        name,
        incidents: {
          connect: {
            id: incidentId as string,
          },
        },
      },
    });
    res.setHeader("Set-Cookie", `user=${user.id}; path=/; HttpOnly`);
    res.redirect(`/incidents/${incidentId}`);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
