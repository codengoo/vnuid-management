import { prisma } from "@/configs";
import { SessionAttendance } from "generated/prisma";

class SessionModel {
  async insertSession(session: Partial<SessionAttendance>, uid: string) {
    // Check class
    const classObj = await prisma.subject.findFirst({
      where: { id: session.classId },
    });
    if (!classObj) throw new Error("Class not found");
    if (classObj.teacherId !== uid) throw new Error("You are not teacher of this class");

    // Insert
    const result = await prisma.sessionAttendance.create({
      // @ts-ignore
      data: session,
    });

    return result;
  }

  async updateSession(
    id: string,
    { id: _, classId: __, ...session }: Partial<SessionAttendance>,
    uid: string,
  ) {
    // Check class
    const ses = await prisma.sessionAttendance.findFirst({
      where: { id },
      include: { class: true },
    });
    if (!ses) throw new Error("Session not found");
    if (ses.class.teacherId !== uid) throw new Error("You are not teacher of this class");

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
      include: { class: true },
    });
    if (!session) throw new Error("Session not found");
    if (session.class.teacherId !== uid) throw new Error("You are not teacher of this class");

    // Remove
    const result = await prisma.sessionAttendance.delete({ where: { id } });

    return result;
  }

  async triggerSessionCycle(id: string){
    // Check

    // Create
    const result = await prisma.sessionCycle.create({data: {
      start: new Date(),
      sessionId: id
    }})

    return result;
  }
}

export default new SessionModel();
