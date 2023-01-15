import express from "express";
import authMiddleware from "../../middleware/authMiddleware.js";
import storageController from "../../controller/main/storageController.js";
const router = express.Router();

router.get('/',authMiddleware, storageController.getAll)
router.get('/:id',authMiddleware, storageController.getOne)
router.post('/',authMiddleware, storageController.create)
router.put('/edit/:id',authMiddleware, storageController.edit)
router.delete('/del/:id',authMiddleware, storageController.del)


export default router;