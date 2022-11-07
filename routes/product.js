import { Router } from "express";
import { getProduct, newProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = Router()

router.get('/', getProduct)
router.post('/', newProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

export default router