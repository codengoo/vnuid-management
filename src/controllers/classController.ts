import { catcher } from "@/helpers";
import { ClassModel } from "@/models";
import { ILocal, IResBody } from "@/types";
import { Request, Response } from "express";
import { UserType } from "generated/prisma";

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
}

export default new ClassController();
