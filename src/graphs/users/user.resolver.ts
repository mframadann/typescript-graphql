import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { UsersInputs } from "./types";

const prisma = new PrismaClient();
export default {
  users: async (): Promise<any> => {
    const users = await prisma.users.findMany({
      include: {
        profile: true,
      },
    });
    return users;
  },
  createUsers: async (args: UsersInputs): Promise<any> => {
    const { firstName, lastName, emailAddress, password, dateOfBirth, gender } =
      args.userInputs;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUsers = await prisma.users.create({
      data: {
        email_address: emailAddress,
        password: String(hashedPassword),
        profile: {
          create: {
            first_name: firstName,
            last_name: lastName,
            date_of_birth: new Date(dateOfBirth),
            gender: gender,
          },
        },
      },
      include: {
        profile: true,
      },
    });
    return newUsers;
  },
};
