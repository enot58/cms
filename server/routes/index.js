import express from "express";
const router = express.Router();


import userRouter from "./main/userRouter.js";

// Роутер регистрации, авторизации
router.use('/user', userRouter)
// Роутер склада
router.use('/storage')
// Роутер статусов
router.use('/status')
// Роутер заказов
router.use('/order')
// Роутер объектов
router.use('/object')
// Роутер товаров
router.use('/order')
// Роутер поставщиков
router.use('/provider')
// Роутер Транспортные компании
router.use('/transportCompany')
// Роутер Транспортные компании
router.use('/transportCompany')
// Роутер категории
router.use('/сategories')
// Роутер Маршруты
router.use('/logistics')




export default router;
