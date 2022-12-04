import { prisma } from "../db/client";
export const getIncidentById = async (incidentId: string) => {
  return prisma.incident.findUnique({
    where: {
      id: incidentId,
    },
  });
};

export const getAllMyIncidents = async (userId: string) => {
  //  return all incidents that contain the user id
  const userWithIncidents = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      incidents: true,
    },
  });

  return userWithIncidents?.incidents;
};
