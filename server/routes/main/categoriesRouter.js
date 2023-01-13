import express from "express";
import categoriesController from "../../controller/main/categoriesController.js";
import authMiddleware from "../../middleware/authMiddleware.js";
const router = express.Router();


router.get('/',authMiddleware, categoriesController.getAll)
router.get('/:id',authMiddleware, categoriesController.getOne)
router.post('/',authMiddleware, categoriesController.create)
router.put('/edit/:id',authMiddleware, categoriesController.edit)
router.delete('/del/:id',authMiddleware, categoriesController.del)



export default router;