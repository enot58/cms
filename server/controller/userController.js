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
        console.log(login)
        if (!login || !password) {
            return next(ApiError.badRequest('Неккоректный логин или пароль'))
        }
        const candidate = await Models.User.findOne({login})
        if (candidate) {
            return next(ApiError.badRequest('Такой пользователь уже есть'))
        }
        // Хэширование пароля
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Models.User.create({login, role, password: hashPassword})
        const token = generateJwt(user.id, user.login, user.role)

        return res.json({token})
    }



}


export default new UserController();