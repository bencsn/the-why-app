import { cookies } from "next/headers";
import { prisma } from "../db/client";
export const getUserById = async (userId: string) => {
  if (!userId) {
    return null;
  }
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const getCurrentUser = async () => {
  const nextCookies = cookies();
  const cookie = nextCookies.get("user");
  if (!cookie) {
    return null;
  }
  const userId = cookie.value;
  return getUserById(userId);
};
