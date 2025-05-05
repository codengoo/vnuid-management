import { catcher } from "@/helpers";
import { AttendanceModel, ClassModel, SessionModel, UserModel } from "@/models";
import { ILocal, IResBody } from "@/types";
import { Request, Response } from "express";
import { RepeatType, UserType } from "generated/prisma";
import crypto from "node:crypto";
import * as yup from "yup";

class ClassController {
  async getAllClasses(req: Request, res: Response<IResBody, ILocal>) {
    const { id, role } = res.locals.user;

    await catcher(res, async () => {
      const classes =
        role === UserType.Teacher.toLowerCase()
          ? await ClassModel.getAllClassesByTeacher(id)
          : role === UserType.Student.toLowerCase()
            ? await ClassModel.getAllClassesByStudent(id)
            : [];

      res.json({ data: classes }).end();
    });
  }

  async getClass(req: Request, res: Response<IResBody, ILocal>) {
    const { id: uid } = res.locals.user;
    const { id } = req.params;

    await catcher(res, async () => {
      const result = await ClassModel.getClass(id, uid);
      res.json({ data: result }).end();
    });
  }

  async createSession(req: Request, res: Response<IResBody, ILocal>) {
    const { id: uid } = res.locals.user;
    const data = req.body;

    const schema = yup.object({
      name: yup.string().required(),
      start: yup.date().required(),
      duration: yup.number().required(),
      repeat: yup.string().oneOf(Object.values(RepeatType)).required(),
      subjectId: yup.string().uuid().required(),
    });

    await catcher(res, async () => {
      const filteredData = await schema.validate(data);
      const result = await SessionModel.insertSession(filteredData, uid);
      res.json({ data: result }).end();
    });
  }

  async deleteSession(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = req.params;
    const { id: uid } = res.locals.user;

    await catcher(res, async () => {
      await SessionModel.deleteSession(id, uid);
      res.json({ message: "Success" }).end();
    });
  }

  async updateSession(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = req.params;
    const { id: uid } = res.locals.user;
    const data = req.body;

    await catcher(res, async () => {
      await SessionModel.updateSession(id, data, uid);
      res.json({ message: "Success" }).end();
    });
  }

  async triggerSession(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = req.params;

    await catcher(res, async () => {
      await SessionModel.triggerSessionCycle(id);
      res.json({ message: "Success" }).end();
    });
  }

  async getSessionCycle(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = res.locals.user;

    await catcher(res, async () => {
      const result = await SessionModel.getAllSessionCycles(id);
      res.json({ data: result }).end();
    });
  }
}

export default new ClassController();
