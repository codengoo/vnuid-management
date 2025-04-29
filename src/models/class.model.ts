import { prisma } from "@/configs";

class ClassModel {
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
