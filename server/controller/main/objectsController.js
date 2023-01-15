import Models from "../../models/models.js";

class ObjectsController {
    async getAll (req, res, next) {
        try {
            const objects = await Models.Objects.findAll()

            res.json(objects)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne (req, res, next) {
        try {

            const {id} = req.params

            const oneObject = await Models.Objects.findOne({
                where: {id}
            })

            return res.json(oneObject)
        } catch (e) {
            console.log(e)
        }
    }

    async create (req, res, next) {
        try {
            const {name, address} = req.body
            const newObject = await Models.Objects.create({name, address})
            return res.json(newObject)

        } catch (e) {
            console.log(e)
        }
    }

    async edit (req, res, next) {
        try {
            const {id} = req.params
            const newObject = await Models.Objects.findOne({where: {id}})
            const {name: oldName, address: oldAddress} = newObject
            const {name = oldName, address = oldAddress} = req.body

            await newObject.update({name, address})

            return res.json(newObject)

        } catch (e) {
            console.log(e)
        }
    }

    async del (req, res, next) {
        try {
            const {id} = req.params
            const object = await Models.Objects.findOne({where: {id}})
            await object.destroy()

            return res.json(object)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new ObjectsController()