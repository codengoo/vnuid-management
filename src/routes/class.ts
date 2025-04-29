import { ClassController } from "@/controllers";
import { Router } from "express";

const router = Router();

router.get("/", ClassController.getAllClasses);
router.get("/:id", ClassController.getClass);

export default router;
