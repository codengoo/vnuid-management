import { prisma } from "@/configs";
import { Attendance } from "generated/prisma";
import { RRule } from "rrule";

class AttendanceModel {
  async checkin(sid: string, uid: string, data: Partial<Attendance>) {
    const session = await prisma.sessionAttendance.findFirst({
      where: { id: sid },
      include: { subject: true },
    });
    if (!session) throw new Error("Session not found");

    const subject = await prisma.subject.findFirst({
      where: { id: session.subject?.id },
      select: { students: true },
    });
    if (!subject) throw new Error("Class not found");

    if (!subject.students.some((student) => student.id === uid))
      throw new Error("You are not student of this class");

    // upsert attendanceCycle
    const now = new Date();
    const start = session.start;
    const rule = new RRule({
      freq: RRule.WEEKLY,
      interval: 1,
      dtstart: start,
    });

    // Check TH xayr ra lan thu 2, chua den thoi gian diem danh hien tai nhuwng da qua lan diem danh truoc do
    const previousOccurrence = rule.before(now, true);
    if (!previousOccurrence) throw new Error("Session is not started yet");

    const diff = (now.getTime() - previousOccurrence.getTime()) / (1000 * 60);
    if (diff < session.duration)
      throw new Error("Out of session time or session is not started yet");

    const sessionCycle = await prisma.sessionCycle.upsert({
      where: {
        session_id_start: {
          session_id: sid,
          start: previousOccurrence,
        },
      },
      create: {
        start: previousOccurrence,
        session_id: sid,
        subject_id: session.subjectId,
      },
      update: {},
    });
    if (!sessionCycle) throw new Error("Session cycle not found");

    // Checkin
    const result = await prisma.attendance.create({
      // @ts-ignore
      data: {
        deviceId: data.deviceId || "",
        isVerified: data.isVerified || false,
        time: data.time || new Date(),
        attendantId: uid,
        sessionCycleId: sid,
      },
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
