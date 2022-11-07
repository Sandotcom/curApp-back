import { Router } from "express";
import { getEvent, getEvents, newEvent, updateEvent, deleteEvent } from "../controllers/eventController.js";

const router = Router()

router.get('/:id', getEvent)
router.get('/', getEvents)
router.post('/', newEvent)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

export default router