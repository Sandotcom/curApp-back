import { Router } from "express";
import { getAnalytics } from "../controllers/analyticsController.js";

const router = Router()

router.get('/:eventId', getAnalytics)

export default router