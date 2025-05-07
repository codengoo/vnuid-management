import { ClassModel, UserModel } from "@/models";
import { ILocal } from "@/types";
import { Request, Response } from "express";
import { Subject, User } from "generated/prisma";

class GenController {
  async generateUser(req: Request, res: Response<any, ILocal>) {
    const num = 2;
    var users: Partial<User>[] = [];

    // for (let i = 0; i < num; i++) {
    //   users.push({
    //     type: "Teacher",
    //     sid: "2102000" + i,
    //     gid: "214453423" + i,
    //     name: "Nguyen Van A" + i,
    //     email: "a" + i + "@gmail.com",
    //     password: "123456",
    //     dob: new Date(),
    //     official_class: "K66CB",
    //     authenticator: "",
    //     biometric_key: "",
    //   });
    // }

    await UserModel.insertUser(users);

    res.json({ message: "Success" }).end();
  }

  async generateClass(req: Request, res: Response<any, ILocal>) {
    const num = 2;
    var classes: Partial<Subject>[] = [];

    for (let i = 0; i < num; i++) {
      classes.push({
        address: "Xuan thuy, Cau giay",
        code: "K66CB",
        startTime: new Date(),
        endTime: new Date(),
        openingDay: new Date(),
        name: "Class " + i,
        teacherId: "62ec9765-6512-4cac-9929-39e0e9f3aaca",
      });
    }

    await ClassModel.insertClass(classes);

    res.json({ message: "Success" }).end();
  }
}

export default new GenController();
