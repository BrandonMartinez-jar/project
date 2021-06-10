import { Router } from "express";
import { createKart } from "../controllers/Kart.controller";
const router = Router();

router.route('/').post(createKart);

export default router;
