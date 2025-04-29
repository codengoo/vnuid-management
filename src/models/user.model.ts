import { prisma } from "@/configs";
import { User } from "generated/prisma";

class UserModel {
  async insertUser(users: Partial<User>[]) {
    await prisma.user.createMany({
      // @ts-ignore
      data: users,
    });
  }

  async addFaceData(userId: string, facePath: string) {
    const user = await this.getUser(userId);

    if (!user) throw new Error("User not found");
    if (user.faceData) throw new Error("User already has face data");

    const result = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        faceData: facePath,
      },
    });

    return result;
  }

  async removeFaceData(userId: string) {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        faceData: null,
      },
    });
  }

  async getUser(id: string) {
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return result;
  }
}

export default new UserModel();
