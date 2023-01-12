import express from "express";
import UserController from "../controller/userController.js";
const router = express.Router();

router.post('/registration', UserController.registration)


export default router;