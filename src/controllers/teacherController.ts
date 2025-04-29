import { catcher } from "@/helpers";
import { ClassModel } from "@/models";
import { ILocal, IResBody } from "@/types";
import { Request, Response } from "express";

class TeacherController {
  async getAllClasses(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = res.locals.user;

    await catcher(res, async () => {
      const classes = await ClassModel.getAllClassesByTeacher(id);
      res.json({ data: classes }).end();
    });
  }
}

export default new TeacherController();
