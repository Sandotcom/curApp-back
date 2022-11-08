import { Router } from "express";
import { getTransactions, newTransaction, updateTransaction, deleteTransaction } from "../controllers/transactionController.js";

const router = Router()

router.get('/:eventId', getTransactions)
router.post('/', newTransaction)
router.put('/:id', updateTransaction)
router.delete('/:id', deleteTransaction)

export default router