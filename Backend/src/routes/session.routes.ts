import { Router } from "express";
import { signin, signup } from "../controllers/session.controller";
const router = Router();

router.route('/signin')
    .post(signin);

router.route('/signup')
    .post(signup);

export default router;
