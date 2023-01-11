import Models from '../models/models.js'

class TestController {
    async getAll(request, response) {
        try {
            const allHomes = await Models.Home.findAll({
                raw: true
            }).then((data) => {
                response.json(data)
            }).catch((err) => {
                if (err) throw console.log(err)
                response.json({
                    message: 'Непридиденная ошибка'
                })
            })

        } catch (err) {
            if (err) throw console.log(err)

            console.log('Ошибка')
        }
    }

    async getOne (request, response) {

    }

    async create (request, response) {
        try {
            const { id, number, name } = request.body;
            const home = {
                id: id,
                number: number,
                name: name
            }


            const newHome = await Models.Home.create(home)
                .then((data) => {
                    response.json({
                        message: `Дом успешно добавлен.Номер ${data.number}. Наименование '${data.name}'`
                    })
                }).catch((err) => {
                    if (err) console.log(err)

                   /* response.json({
                        message: "Произошла ошибка"
                    })*/
                    let errorType = err.errors[0].type
                    let errorPath = err.errors[0].path
                    switch (errorType) {
                        case 'unique violation': {
                            function getErrorName (arr) {
                                arr.map((data) => {

                                })
                            }

                            response.json({
                                message: 'Такой дом уже есть, введите другой'
                            })
                        }
                    }

                })

        } catch(err) {
            if (err) throw console.log(err)

            console.log("Обнаружена ошибка")
        }
    }

    async edit (request, response) {

    }

    async del (request, response) {

    }

    async delAll (request, response) {

    }

}

export default new TestController();