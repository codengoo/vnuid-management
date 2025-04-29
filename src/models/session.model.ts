import { prisma } from "@/configs";
import { Session } from "generated/prisma";

class SessionModel {
  async insertSession(session: Partial<Session>, uid: string) {
    // Check class
    const classObj = await prisma.class.findFirst({
      where: { id: session.classId },
    });
    if (!classObj) throw new Error("Class not found");
    if (classObj.teacherId !== uid) throw new Error("You are not teacher of this class");

    // Insert
    const result = await prisma.session.create({
      // @ts-ignore
      data: session,
    });

    return result;
  }

  async updateSession(
    id: string,
    { id: _, classId: __, ...session }: Partial<Session>,
    uid: string,
  ) {
    // Check class
    const ses = await prisma.session.findFirst({
      where: { id },
      include: { class: true },
    });
    if (!ses) throw new Error("Session not found");
    if (ses.class.teacherId !== uid) throw new Error("You are not teacher of this class");

    // Update
    const result = await prisma.session.update({
      where: { id },
      // @ts-ignore
      data: session,
    });

    return result;
  }

  async deleteSession(id: string, uid: string) {
    // Check class
    const session = await prisma.session.findFirst({
      where: { id },
      include: { class: true },
    });
    if (!session) throw new Error("Session not found");
    if (session.class.teacherId !== uid) throw new Error("You are not teacher of this class");

    // Remove
    const result = await prisma.session.delete({ where: { id } });

    return result;
  }
}

export default new SessionModel();
