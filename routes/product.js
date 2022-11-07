import { Router } from "express";
import { getProducts, newProducts, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = Router()

router.get('/:eventId', getProducts)
router.post('/', newProducts)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router