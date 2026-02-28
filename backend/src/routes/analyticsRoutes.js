import { Router } from "express";
const router = Router();
import { getAnalytics } from "../controllers/analyticsController";

router.get("/", getAnalytics);

export default router;