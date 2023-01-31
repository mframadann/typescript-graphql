import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default {
  profiles: async (): Promise<any> => {
    const allProfile = await prisma.profiles.findMany({
      include: {
        user: true,
      },
    });
    return allProfile;
  },
};
