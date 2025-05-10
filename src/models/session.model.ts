import { prisma } from "@/configs";
import { getRecurringDatesInRange } from "@/utils";
import { getHours, getMinutes, set } from "date-fns";
import { SessionAttendance } from "generated/prisma";

class SessionModel {
  async insertSession(session: Partial<SessionAttendance>, uid: string) {
    // Check class
    const classObj = await prisma.subject.findFirst({
      where: { id: session.subjectId },
    });
    if (!classObj) throw new Error("Class not found");
    if (classObj.teacher_id !== uid) throw new Error("You are not teacher of this class");

    const tmp = new Date(session.start!);
    const subjectStart = new Date(classObj.start_time);
    const subjectEnd = new Date(classObj.end_time);

    const tmpMinutes = getHours(tmp) * 60 + getMinutes(tmp);
    const startMinutes = getHours(subjectStart) * 60 + getMinutes(subjectStart);
    const endMinutes = getHours(subjectEnd) * 60 + getMinutes(subjectEnd);

    if (tmpMinutes < startMinutes || tmpMinutes > endMinutes) {
      throw new Error("Invalid session time");
    }

    // Kiem tra chong lan cacs thoi gian

    session.start = set(new Date(classObj.start_time), {
      hours: getHours(tmp),
      minutes: getMinutes(tmp),
    });

    // Insert
    const result = await prisma.sessionAttendance.create({
      // @ts-ignore
      data: session,
    });

    return result;
  }

  async updateSession(
    id: string,
    { id: _, subjectId: __, ...session }: Partial<SessionAttendance>,
    uid: string,
  ) {
    // Check class
    const ses = await prisma.sessionAttendance.findFirst({
      where: { id },
      include: { subject: true },
    });
    if (!ses) throw new Error("Session not found");
    if (ses.subject.teacher_id !== uid) throw new Error("You are not teacher of this class");

    // Update
    const result = await prisma.sessionAttendance.update({
      where: { id },
      // @ts-ignore
      data: session,
    });

    return result;
  }

  async deleteSession(id: string, uid: string) {
    // Check class
    const session = await prisma.sessionAttendance.findFirst({
      where: { id },
      include: { subject: true },
    });
    if (!session) throw new Error("Session not found");
    if (session.subject.teacher_id !== uid) throw new Error("You are not teacher of this class");

    // Remove
    const result = await prisma.sessionAttendance.delete({ where: { id } });

    return result;
  }

  async getAllSessions(uid: string, from?: Date, to?: Date) {
    // List all class
    const subjects = await prisma.subject.findMany({
      where: {
        OR: [{ students: { some: { id: uid } } }, { teacher_id: uid }],
        is_done: false,
      },
    });
    const subjectIds = subjects.map((s) => s.id);

    // List all session
    const sessions = await prisma.sessionAttendance.findMany({
      where: {
        subjectId: { in: subjectIds },
      },
      include: { subject: true },
    });

    if (from && to) {
      const validSessions = sessions.filter((session) => {
        const occurrences = getRecurringDatesInRange(session.start, from, to);
        return occurrences.length > 0;
      });

      return validSessions;
    } else {
      return sessions;
    }
  }

  async triggerSessionCycle(id: string) {
    // Check
    const session = await prisma.sessionAttendance.findFirst({ where: { id } });
    if (!session) throw new Error("Session not found");
    const subjectId = session.subjectId;

    // Create
    const result = await prisma.sessionCycle.create({
      data: {
        start: new Date(),
        session_id: id,
        subject_id: subjectId,
      },
    });

    return result;
  }
}

export default new SessionModel();
