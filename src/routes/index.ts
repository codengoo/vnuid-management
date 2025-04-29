import { authMid } from "@/middlewares";
import { Router } from "express";
import DataRouter from "./data";
import TeacherRouter from "./teacher";
import GenRouter from "./gen"

const router = Router();

router.use("/data", DataRouter);
router.use("/gen", authMid(), GenRouter);
router.use("/teacher", authMid(), TeacherRouter);

export default router;
