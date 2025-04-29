import { prisma } from "@/configs";
import { Class } from "generated/prisma";

class ClassModel {
  async insertClass(classes: Partial<Class>[]) {
    const result = await prisma.class.createMany({
      // @ts-ignore
      data: classes,
    });

    return result;
  }

  async getAllClassesByTeacher(teacherId: string) {
    const result = await prisma.class.findMany({
      where: {
        teacherId: teacherId,
      },
    });

    return result;
  }
}

export default new ClassModel();
