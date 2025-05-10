import { authMid } from "@/middlewares";
import { Router } from "express";
import AttendanceRouter from "./attendance";
import SubjectRouter from "./subject";
import DataRouter from "./data";
import GenRouter from "./gen";

const router = Router();

router.use("/data", DataRouter);
router.use("/admin/gen", GenRouter);
router.use("/checkin", authMid(["Student"]), AttendanceRouter);
router.use("/subject", SubjectRouter);

export default router;
