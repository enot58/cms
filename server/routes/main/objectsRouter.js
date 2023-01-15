import express from "express";
import authMiddleware from "../../middleware/authMiddleware.js";
import objectsController from "../../controller/main/objectsController.js";
const router = express.Router();

router.get('/',authMiddleware, objectsController.getAll)
router.get('/:id',authMiddleware, objectsController.getOne)
router.post('/',authMiddleware, objectsController.create)
router.put('/edit/:id',authMiddleware, objectsController.edit)
router.delete('/del/:id',authMiddleware, objectsController.del)


export default router;