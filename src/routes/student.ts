import { StudentController } from "@/controllers";
import { Router } from "express";

const router = Router();

router.get("/face", StudentController.getFace);
router.post("/face", StudentController.registerFace);

export default router;
