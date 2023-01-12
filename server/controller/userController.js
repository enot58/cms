import ApiError from "../error/ApiError.js";
import Models from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const generateJwt = (id, login, role) => {
    return jwt.sign(
        {
            id: id,
            login: login,
            role: role
        },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {


    async registration (req, res, next) {
        const { login, password, role } = req.body;

        if (!login || !password) {
            return next(ApiError.badRequest('Неккоректный логин или пароль'))
        }

        const candidate = await Models.User.findOne({
            where: {
                login: login
            }
        })

        if (candidate) {
            return next(ApiError.badRequest('Такой пользователь уже есть'))
        }
        // Хэширование пароля
        const hashPassword = await bcrypt.hashSync(password, 5)
        const user = await Models.User.create({login, role, password: hashPassword})
        const token = generateJwt(user.id, user.login, user.role)

        return res.json({token})
    }

    async login (req, res, next) {
        const {login, password} = req.body
        const user = await Models.User.findOne({where: {login}})

        if (!user) {
            return next(ApiError.internal("Пользователь не найден"))
        }
        // Сравнение паролей
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.role)

        return res.json({token})

    }

    async check (req, res, next) {
        const {id, login, role} = req.user
        const token = generateJwt(id, login, role)
        return res.json({token})

    }

    async dropUser (req, res, next) {
        try {
            const {id} = req.query
            console.log('Я тут')
            console.log(id)

        } catch (e) {
            console.log(e)
        }

    }

    async editUser (req, res, next) {
        try {
            const {id} = req.query

            console.log("Редактирование")
        } catch (e) {
            console.log(e)
        }
    }




}


export default new UserController();