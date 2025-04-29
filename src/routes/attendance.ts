import { AttendanceController, ClassController } from "@/controllers";
import { Router } from "express";

const router = Router();

router.get("/list", ClassController.getSessionCycle);
router.post("/:id", AttendanceController.checkin);
router.put("/key", AttendanceController.getKey);
router.post("/face/register", AttendanceController.registerFace);
router.get("/face/me", AttendanceController.getFace);

export default router;
