import express from "express";
import UserController from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";
const router = express.Router();

// Роут самого пользователя
// содержит
// Логин, Пароль, Роль


router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)
router.delete('/del/:id', checkRoleMiddleware('admin'), UserController.dropUser)
router.put('/edit/:id', checkRoleMiddleware('admin'), UserController.editUser)

export default router;