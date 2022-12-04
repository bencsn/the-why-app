import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from '../../../../server/db/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE" || req.method === "POST") {
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

    // delete the incident
    await prisma.incident.delete({
        where: {
            id: incidentId as string,
        },
    });

    res.redirect("/incidents");
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
