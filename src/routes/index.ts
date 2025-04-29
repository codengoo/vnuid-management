import { authMid } from "@/middlewares";
import { Router } from "express";
import DataRouter from "./data";
import TeacherRouter from "./teacher";

const router = Router();

router.use("/data", DataRouter);
router.use("/teacher", authMid(), TeacherRouter);

export default router;
