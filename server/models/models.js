import { Sequelize } from "sequelize";
import sequelize from "../db.js";




class User extends Sequelize.Model {}

User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "USER"
        }
    },
    {
        sequelize, modelName: "user"
    }
)

// Описание пользователя
class UserDescription extends Sequelize.Model {}
UserDescription.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        position: {
            type: Sequelize.STRING,
            allowNull: true
        },
        img: {
            type: Sequelize.STRING,
            allowNull: true
        },
        color: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {
        sequelize, modelName: "user_description"
    }
)


export default { User, UserDescription };