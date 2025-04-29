import { ClassController } from "@/controllers";
import { authMid } from "@/middlewares";
import { Router } from "express";

const router = Router();

router.get("/", authMid(), ClassController.getAllClasses);
router.get("/:id", authMid(), ClassController.getClass);

router.post("/session", authMid(["Teacher"]), ClassController.createSession);
router.delete("/session/:id", authMid(["Teacher"]), ClassController.deleteSession);
router.put("/session/:id", authMid(["Teacher"]), ClassController.updateSession);

router.post("/checkin", authMid(["Student"]), ClassController.checkin);

export default router;
