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


export default { User };