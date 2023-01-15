import Models from "../../models/models.js";

class StorageController {
    async getAll (req, res, next) {
        try {
            const storage = await Models.StorageName.findAll()

            res.json(storage)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne (req, res, next) {
        try {

            const {id} = req.params

            const oneStorage = await Models.StorageName.findOne({
                where: {id}
            })

            return res.json(oneStorage)
        } catch (e) {
            console.log(e)
        }
    }

    async create (req, res, next) {
        try {
            const {name, address} = req.body
            const newStorage = await Models.StorageName.create({name, address})
            return res.json(newStorage)

        } catch (e) {
            console.log(e)
        }
    }

    async edit (req, res, next) {
        try {
            const {id} = req.params
            const newStorage = await Models.StorageName.findOne({where: {id}})
            const {name: oldName, address: oldAddress} = newStorage
            const {name = oldName, address = oldAddress} = req.body

            await newStorage.update({name, address})

            return res.json(newStorage)

        } catch (e) {
            console.log(e)
        }
    }

    async del (req, res, next) {
        try {
            const {id} = req.params
            const storage = await Models.StorageName.findOne({where: {id}})
            await storage.destroy()

            return res.json(storage)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new StorageController();