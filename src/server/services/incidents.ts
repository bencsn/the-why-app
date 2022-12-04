import { prisma } from "../db/client";
export const getIncidentById = async (incidentId: string) => {
  return prisma.incident.findUnique({
    where: {
      id: incidentId,
    },
  });
};
