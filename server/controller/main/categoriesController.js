import Models from "../../models/models.js";

class CategoriesController {
    async getAll (req, res, next) {
        try {
            const categories = await Models.Categories.findAll()

            res.json(categories)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne (req, res, next) {
        try {

            const {id} = req.params

            const categories = await Models.Categories.findOne({
                where: {id}
            })

            return res.json(categories)
        } catch (e) {
            console.log(e)
        }
    }

    async create (req, res, next) {
        try {
            const {name} = req.body
            const categories = await Models.Categories.create({name})
            return res.json(categories)

        } catch (e) {
            console.log(e)
        }
    }

    async edit (req, res, next) {
        try {
            const {id} = req.params
            const {name} = req.body
            const categories = await Models.Categories.findOne({where: {id}})
            await categories.update({name})

            return res.json(categories)

        } catch (e) {
            console.log(e)
        }
    }

    async del (req, res, next) {
        try {
            const {id} = req.params
            const categories = await Models.Categories.findOne({where: {id}})
            await categories.destroy()

            return res.json(categories)
        } catch (e) {
            console.log(e)
        }
    }

}

export default new CategoriesController();