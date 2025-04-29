import { catcher } from "@/helpers";
import { Request, Response } from "express";

class TeacherController {
  async getAllClasses(req: Request, res: Response) {
    const { id, role } = res.locals.user || {};
    await catcher(res, async () => {
      res.json({ id, role }).end();
    });
  }
}

export default new TeacherController();
