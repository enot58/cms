import express from "express";
const router = express.Router();

import testRouter from "./testRouter.js";


router.use('/test', testRouter)



export default router;
