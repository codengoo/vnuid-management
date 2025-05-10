import { prisma } from "@/configs";
import { SessionAttendance } from "generated/prisma";

class SessionModel {
  async insertSession(session: Partial<SessionAttendance>, uid: string) {
    // Check class
    const classObj = await prisma.subject.findFirst({
      where: { id: session.subjectId },
    });
    if (!classObj) throw new Error("Class not found");
    if (classObj.teacher_id !== uid) throw new Error("You are not teacher of this class");

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

  async getAllSessionCycles(uid: string) {
    // List all class
    const subjects = await prisma.subject.findMany({ where: { students: { some: { id: uid } } } });
    const subjectIds = subjects.map((s) => s.id);

    // List all session cycles
    const cycles = await prisma.sessionCycle.findMany({
      where: {
        subject_id: { in: subjectIds },
      },
      include: { session: true, subject: true },
    });

    const now = new Date();
    const filtered = cycles.filter((cycle) => {
      const end = new Date(cycle.start.getTime() + cycle.session.duration * 60000);
      return end >= now;
    });

    return filtered;
  }
}

export default new SessionModel();
