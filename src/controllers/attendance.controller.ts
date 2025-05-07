import { catcher, saveTokenToRedis, validatePayload } from "@/helpers";
import { AttendanceModel, UserModel } from "@/models";
import { ILocal, IResBody } from "@/types";
import { computeSharedSecret, generateECDHKeyPair, getPublicKey } from "@/utils";
import { Request, Response } from "express";
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
    console.log(res.locals);

    await catcher(res, async () => {
      const user = await UserModel.getUser(id);
      if (!user) throw new Error("User not found");
      if (!user.face_data) {
        res.status(404).json({ message: "Face data not found", data: null }).end();
      } else {
        const data = {
          face_data: JSON.parse(user.face_data),
        };
        res.json({ message: "Success", data }).end();
      }
    });
  }

  async checkin(req: Request, res: Response<IResBody, ILocal>) {
    const { id: sid } = req.params;
    const { id: uid } = res.locals.user;
    const raw = req.body;

    const schema = yup.object({
      time: yup.date().required(),
      deviceId: yup.string().required(),
      isVerified: yup.boolean().required(),
      // image: later
      token: yup.string().required(),
    });

    await catcher(res, async () => {
      const { time, deviceId, isVerified, token } = await schema.validate(raw);
      const isValidData = validatePayload({ time, deviceId, isVerified }, uid, token);
      if (!isValidData) throw new Error("Invalid payload");

      await AttendanceModel.checkin(sid, uid, raw);
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
      const myKeyPair = generateECDHKeyPair();
      const myPublicKey = getPublicKey(myKeyPair);
      const sharedKey = computeSharedSecret(myKeyPair, key);

      // Save key
      await saveTokenToRedis(uid, sharedKey);

      res
        .json({
          message: "Success",
          data: {
            key: myPublicKey,
            expire: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
          },
        })
        .end();
    });
  }
}

export default new AttendanceController();
