import { Router } from "express";
import { getEvent, newEvent, updateEvent, deleteEvent } from "../controllers/eventController.js";

const router = Router()

router.get('/', getEvent)
router.post('/', newEvent)
router.put('/', updateEvent)
router.delete('/', deleteEvent)

export default router