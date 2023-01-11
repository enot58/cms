import { Sequelize } from "sequelize";
import sequelize from "../db.js";




class Home extends Sequelize.Model {}

Home.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    sequelize, modelName: 'home'
})


export default {Home}


/*
class User extends Sequelize.Model {}

User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
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
        sequelize, modelName: 'user', timestamps: true, createdAt: true
    }
)



export default {User}*/
