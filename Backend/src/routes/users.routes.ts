import { Router } from "express";
import { getUsers, getUser, deleteUser, updateUser } from "../controllers/user.controller";
const router = Router();

router.route('/')
    .get(getUsers);

router.route('/:cedula')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

export default router;
