import { Router } from "express";
import { getOrders, getOrder, createOrder, deleteOrder } from "../controllers/Order.controller";
const router = Router();

router.route('/')
    .get(getOrders)
    .post(createOrder);

router.route('/:id')
    .get(getOrder)
    .delete(deleteOrder);

export default router;
