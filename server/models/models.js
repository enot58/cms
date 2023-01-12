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


// Склад наименование
class StorageName extends Sequelize.Model {}
StorageName.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "storage_name"
    }
)
// Склад описание
class StorageNameDescription extends Sequelize.Model {}
StorageNameDescription.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "storage_name_desc"
    }
)

class StatusName extends Sequelize.Model {}
StatusName.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "status_name"
    }
)

// Заказ
class Order extends Sequelize.Model {}
Order.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "order"
    }
)





export default { User, UserDescription };