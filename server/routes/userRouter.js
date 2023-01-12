import express from "express";
import UserController from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.delete('/del', authMiddleware, )

export default router;