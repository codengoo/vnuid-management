import { prisma } from "@/configs";
import { addWeeks, isBefore, isSameDay, isWithinInterval, startOfDay } from "date-fns";
import { Subject } from "generated/prisma";

class ClassModel {
  private getRecurringDatesInRange(openingDay: Date, from: Date, to: Date): Date[] {
    const dates: Date[] = [];

    let current = startOfDay(openingDay);
    const start = startOfDay(from);
    const end = startOfDay(to);

    while (isBefore(current, to) || isSameDay(current, to)) {
      if (isWithinInterval(current, { start, end })) dates.push(current);
      current = addWeeks(current, 1);
    }

    return dates;
  }

  async insertClass(classes: Partial<Subject>[]) {
    const result = await prisma.subject.createMany({
      // @ts-ignore
      data: classes,
    });

    return result;
  }

  async getAllClassesByTeacher(teacherId: string) {
    const result = await prisma.subject.findMany({
      where: {
        teacher_id: teacherId,
      },
    });

    return result;
  }

  async getAllClassesByStudent(studentId: string, from?: Date, to?: Date) {
    const subjects = await prisma.subject.findMany({
      where: {
        students: {
          some: {
            id: studentId,
          },
        },
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
        const occurrences = this.getRecurringDatesInRange(subject.opening_day, from, to);
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
