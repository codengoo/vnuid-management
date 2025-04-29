import { prisma } from "@/configs";
import { Attendance } from "generated/prisma";

class AttendanceModel {
  async checkin(sid: string, uid: string, data: Partial<Attendance>) {
    // Check user in class
    const sessionCycle = await prisma.sessionCycle.findFirst({
      where: { id: sid },
      select: { subject: true },
    });
    if (!sessionCycle) throw new Error("Class not found");
    const subject = await prisma.subject.findFirst({
      where: { id: sessionCycle.subject?.id },
      select: { students: true },
    });
    if (!subject) throw new Error("Class not found");

    if (!subject.students.some((student) => student.id === uid))
      throw new Error("You are not student of this class");

    // Checkin
    const result = await prisma.attendance.create({
      // @ts-ignore
      data: { ...data, attendantId: uid },
    });
    return result;
  }

  async getAttendance(id: string) {
    const result = await prisma.attendance.findUnique({ where: { id } });
    return result;
  }

  async getAttendanceByStudent(id: string) {
    const result = await prisma.attendance.findMany({ where: { attendantId: id } });
    return result;
  }

  async getAttendanceSessionCycle(id: string) {
    const result = await prisma.attendance.findMany({ where: { sessionCycleId: id } });
    return result;
  }

  async updateAttendance() {}
}

export default new AttendanceModel();
