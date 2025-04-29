import admData from "@/data/admin_contact.json";
import { Router } from "express";

const router = Router();

router.get("/adm", (req, res) => {
  res.json(admData).end();
});

export default router;
