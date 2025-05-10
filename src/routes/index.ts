import { authMid } from "@/middlewares";
import { Router } from "express";
import AttendanceRouter from "./attendance";
import ClassRouter from "./class";
import DataRouter from "./data";
import GenRouter from "./gen";
import TeacherRouter from "./teacher";

const router = Router();

router.use("/data", DataRouter);
router.use("/admin/gen", GenRouter);
router.use("/teacher", authMid(["Teacher"]), TeacherRouter);
router.use("/checkin", authMid(["Student"]), AttendanceRouter);
router.use("/class", ClassRouter);

export default router;
