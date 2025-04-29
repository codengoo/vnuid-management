import { GenController } from "@/controllers";
import { Router } from "express";

const router = Router();

router.post("/user", GenController.generateUser);
router.post("/class", GenController.generateClass);

export default router;