import { Router } from "express";
import DataRouter from "./data"

const router = Router();

router.use("/data", DataRouter);

export default router;