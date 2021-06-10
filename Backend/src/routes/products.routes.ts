import { Router } from "express";
import { getProducts, createProduct, getProduct, deleteProduct, updateProduct } from "../controllers/products.controller";
const router = Router();

router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:id')
    .get(getProduct)
    .delete(deleteProduct)
    .put(updateProduct);

export default router;
