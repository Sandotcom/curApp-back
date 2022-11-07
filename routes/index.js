import { Router } from "express";
import event from './event.js'
import product from './product.js'
import transaction from './transaction.js'

const router = Router()

router.use('/event', event)
router.use('/product', product)
router.use('/transaction', transaction)

export default router