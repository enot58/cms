import Models from "../../models/models.js";

const findOne = async (table, id) => {
    try {
        const one = Models.table.findOne({
            where: {
                id: id
            }
        })
        return one

    } catch (e) {
        console.log(e)
    }
}



export default findOne()