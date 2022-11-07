import { Router } from "express";
import { getTransaction, newTransaction, updateTransaction, deleteTransaction } from "../controllers/transactionController.js";

const router = Router()

router.get('/', getTransaction)
router.post('/', newTransaction)
router.put('/', updateTransaction)
router.delete('/', deleteTransaction)

export default router