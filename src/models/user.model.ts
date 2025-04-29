import { prisma } from "@/configs";
import { User } from "generated/prisma";

class UserModel {
  async insertUser(users: Partial<User>[]) {
    const result = await prisma.user.createMany({
      // @ts-ignore
      data: users,
    });
  }
}

export default new UserModel();
