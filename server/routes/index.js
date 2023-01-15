import express from "express";
const router = express.Router();


import userRouter from "./main/userRouter.js";
import storageRouter from "./main/storageRouter.js";
import statusRouter from "./main/statusRouter.js";
import orderRouter from "./main/orderRouter.js";
import objectsRouter from "./main/objectsRouter.js";
import productRouter from "./main/productRouter.js";
import providerRouter from "./main/providerRouter.js";
import transportCompanyRouter from "./main/transportCompanyRouter.js";
import categoriesRouter from "./main/categoriesRouter.js";
import logisticsRouter from "./main/logisticsRouter.js";

//Основные

// Роутер регистрации, авторизации
router.use('/user', userRouter)
// Роутер склада
    router.use('/storage', storageRouter)
// Роутер статусов
router.use('/status', statusRouter)
// Роутер заказов
router.use('/order', orderRouter)
// Роутер объектов
router.use('/object', objectsRouter)
// Роутер товаров
router.use('/product', productRouter)
// Роутер поставщиков
router.use('/provider', providerRouter)
// Роутер Транспортные компании
router.use('/transportCompany', transportCompanyRouter)
// Роутер категории
router.use('/categories', categoriesRouter)
// Роутер Маршруты
router.use('/logistics', logisticsRouter)




export default router;
