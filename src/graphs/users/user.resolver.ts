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
  findUserById: async (arg: UsersInputs): Promise<any> => {
    const user_id = Number(arg.userInputs.user_id);
    console.log(arg);

    const user = await prisma.users.findUnique({
      where: {
        user_id,
      },
      include: {
        profile: true,
      },
    });
    return user;
  },
  createUsers: async (args: UsersInputs): Promise<any> => {
    const { firstName, lastName, emailAddress, password, dateOfBirth, gender } =
      args.userInputs;
    const hashedPassword = await bcrypt.hash(String(password), 12);
    const newUsers = await prisma.users.create({
      data: {
        email_address: String(emailAddress),
        password: String(hashedPassword),
        profile: {
          create: {
            first_name: String(firstName),
            last_name: String(lastName),
            date_of_birth: new Date(String(dateOfBirth)),
            gender: String(gender),
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
