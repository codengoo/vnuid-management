import { TeacherController } from "@/controllers";
import { Router } from "express";
const router = Router();

router.get("/classes", TeacherController.getAllClasses);

router.get("/class/:cid", (req, res) => {
  res.json({ message: "Classes" }).end();
});

router.get("/class/:cid/:sid", (req, res) => {
  res.json({ message: "Classes" }).end();
});

router.put("/class/:cid/:sid", (req, res) => {
  res.json({ message: "Classes" }).end();
});

router.delete("/class/:cid/:sid", (req, res) => {
  res.json({ message: "Classes" }).end();
});

export default router;
