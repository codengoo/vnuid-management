import { SubjectController } from "@/controllers";
import { authMid } from "@/middlewares";
import { Router } from "express";

const router = Router();

router.get("/classes", authMid(), SubjectController.getAllClasses);
router.get("/class/:id", authMid(), SubjectController.getClass);

router.get("/sessions", authMid(), SubjectController.getAllSessions);
router.post("/session", authMid(["Teacher"]), SubjectController.createSession);
router.delete("/session/:id", authMid(["Teacher"]), SubjectController.deleteSession);
router.put("/session/:id", authMid(["Teacher"]), SubjectController.updateSession);
// router.post("/fire/:id", authMid(["Teacher"]), SubjectController.triggerSession);

export default router;
