import { prisma } from "@/configs";
import { getRecurringDatesInRange } from "@/utils";
import { Subject } from "generated/prisma";

class ClassModel {
  async insertClass(classes: Partial<Subject>[]) {
    const result = await prisma.subject.createMany({
      // @ts-ignore
      data: classes,
    });

    return result;
  }

  async getAllClasses(uid: string, from?: Date, to?: Date) {
    const subjects = await prisma.subject.findMany({
      where: {
        OR: [{ students: { some: { id: uid } } }, { teacher_id: uid }],
        is_done: false,
        opening_day:
          from && to
            ? {
                lte: to,
              }
            : undefined,
      },
    });

    if (from && to) {
      const validSubjects = subjects.filter((subject) => {
        const occurrences = getRecurringDatesInRange(subject.opening_day, from, to);
        return occurrences.length > 0;
      });

      return validSubjects;
    } else {
      return subjects;
    }
  }

  async getClass(id: string, userId: string) {
    const result = await prisma.subject.findFirst({
      where: { id },
      include: { students: true, session: true },
    });

    if (!result) throw new Error("Class not found");

    const { students, ...props } = result;
    return {
      ...props,
      students: students.map((std) => {
        const { face_data, ...props } = std;
        return props;
      }),
    };
  }
}

export default new ClassModel();
