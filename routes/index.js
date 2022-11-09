import { Router } from "express";
import event from './event.js'
import product from './product.js'
import transaction from './transaction.js'
import analytics from './analytics.js'

const router = Router()

router.use('/event', event)
router.use('/product', product)
router.use('/transaction', transaction)
router.use('/analytics', analytics)

export default router