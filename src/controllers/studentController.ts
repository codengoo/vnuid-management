import { catcher } from "@/helpers";
import { ClassModel, UserModel } from "@/models";
import { ILocal, IResBody } from "@/types";
import { Request, Response } from "express";

class StudentController {
  async getAllClasses(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = res.locals.user;

    await catcher(res, async () => {
      const classes = await ClassModel.getAllClassesByStudent(id);
      res.json({ data: classes }).end();
    });
  }

  async registerFace(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = res.locals.user;
    // const { face } = req.body;
    console.log(req.body);
    

    await catcher(res, async () => {
      await UserModel.addFaceData(id, "aaa");
      res.json({ message: "Success" }).end();
    });
  }

  async getFace(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = res.locals.user;

    await catcher(res, async () => {
      const user = await UserModel.getUser(id);
      if (!user) throw new Error("User not found");
      if (!user.faceData) throw new Error("User has not registered face");

      res.json({ message: "Success", data: user.faceData }).end();
    });
  }
}

export default new StudentController();
