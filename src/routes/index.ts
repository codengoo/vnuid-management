import { authMid } from "@/middlewares";
import { Router } from "express";
import DataRouter from "./data";
import GenRouter from "./gen";
import StudentRouter from "./student";
import TeacherRouter from "./teacher";

const router = Router();

router.use("/data", DataRouter);
router.use("/gen", authMid(), GenRouter);
router.use("/teacher", authMid(["Teacher"]), TeacherRouter);
router.use("/student", authMid(["Student"]), StudentRouter);

export default router;
