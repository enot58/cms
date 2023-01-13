import express from "express";
import categoriesController from "../../controller/main/categoriesController.js";
import authMiddleware from "../../middleware/authMiddleware.js";
const router = express.Router();


router.get('/getAll',authMiddleware, categoriesController.getAll)
router.get('/getOne',authMiddleware, categoriesController.getOne)
router.post('/create',authMiddleware, categoriesController.create)
router.put('/edit',authMiddleware, categoriesController.edit)
router.delete('/del',authMiddleware, categoriesController.del)



export default router;