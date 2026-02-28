import { Router } from "express";
const router = Router();
import { approveResource, rejectResource } from "../controllers/adminController";

router.put("/approve/:id", approveResource);
router.delete("/reject/:id", rejectResource);

export default router;