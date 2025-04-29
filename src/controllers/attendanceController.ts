import { catcher } from "@/helpers";
import { AttendanceModel, UserModel } from "@/models";
import { ILocal, IResBody } from "@/types";
import { Request, Response } from "express";
import crypto from "node:crypto";
import * as yup from "yup";

class AttendanceController {
  async registerFace(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = res.locals.user;
    const data = req.body;

    const schema = yup.object({
      embedding: yup.array(yup.number()).length(1).required(),
    });

    await catcher(res, async () => {
      const { embedding } = await schema.validate(data);
      await UserModel.addFaceData(id, JSON.stringify(embedding));
      res.json({ message: "Success" }).end();
    });
  }

  async getFace(req: Request, res: Response<IResBody, ILocal>) {
    const { id } = res.locals.user;

    await catcher(res, async () => {
      const user = await UserModel.getUser(id);
      if (!user) throw new Error("User not found");
      if (!user.faceData) throw new Error("User has not registered face");

      res.json({ message: "Success", data: JSON.parse(user.faceData) }).end();
    });
  }

  async checkin(req: Request, res: Response<IResBody, ILocal>) {
    const { id: sid } = req.params;
    const { id: uid } = res.locals.user;
    const data = req.body;

    const schema = yup.object({
      time: yup.date().required(),
      deviceId: yup.string().required(),
      isVerified: yup.boolean().required(),
      // image: later
      token: yup.string().required(),
    });

    await catcher(res, async () => {
      await schema.validate(data);

      await AttendanceModel.checkin(sid, uid, data);
      res.json({ message: "Success" }).end();
    });
  }

  async getKey(req: Request, res: Response<IResBody, ILocal>) {
    const { id: uid } = res.locals.user;
    const data = req.body;

    const schema = yup.object({
      key: yup.string().required(),
    });

    await catcher(res, async () => {
      const { key } = await schema.validate(data);

      // Create key pair
      const curveName = "secp256k1";
      const alice = crypto.createECDH(curveName);
      alice.generateKeys();

      // Alice's public key
      const alicePublicKey = alice.getPublicKey().toString("hex");

      // Generate shared secret
      const aliceSecret = alice.computeSecret(Buffer.from(key, "hex"));

      // Save key
      await UserModel.updateUserKey(uid, aliceSecret.toString("hex"));

      res
        .json({
          message: "Success",
          data: {
            key: alicePublicKey,
            expire: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
          },
        })
        .end();
    });
  }
}

export default new AttendanceController();
