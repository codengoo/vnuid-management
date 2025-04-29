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

  async getAllClassesByStudent(studentId: string) {
    const result = await prisma.class.findMany({
      where: {
        students: {
          some: {
            id: studentId,
          },
        },
      },
    });

    return result;
  }

  async getClass(id: string, userId: string) {
    const result = await prisma.class.findFirst({
      where: { id },
      include: { students: true },
    });

    if (!result) throw new Error("Class not found");
    const { students, ...props } = result;
    if (props.teacherId === userId)
      return {
        ...props,
        students: students.map((std) => {
          const { name, dob, sid } = std;
          return { name, dob, sid };
        }),
      };
    else if (students.some((student) => student.id === userId)) return props;
    return null;
  }
}

export default new ClassModel();
