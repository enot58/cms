import express from "express";
const router = express.Router();

import testController from "../controller/testController.js";


router.get('/', testController.getAll)
router.post('/', testController.create)



export default router;