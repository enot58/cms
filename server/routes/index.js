import express from "express";
const router = express.Router();


import userRouter from "./userRouter.js";

// Роутер регистрации, авторизации
router.use('/user', userRouter)



export default router;
