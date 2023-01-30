import { PrismaClient } from "@prisma/client";
import { UsersInputs } from "./types";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
export default {
  async users() {
    const allUsers = await prisma.users.findMany();
    return allUsers;
  },
  async createUsers(args: UsersInputs): Promise<any> {
    const hashedPassword = await bcrypt.hash(args.userInputs.password, 12);
    const newUsers = await prisma.users.create({
      data: {
        email_address: String(args.userInputs.emailAddress),
        password: String(hashedPassword),
      },
    });
    return newUsers;
  },
};
