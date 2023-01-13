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

// Статусы
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

// объекты , Стройка 1, Стройка 2
class Objects extends Sequelize.Model {}
Objects.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "objects"
    }
)
// Товары
class Products extends Sequelize.Model {}
Products.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "products"
    }
)

// поставщики
class Provider extends Sequelize.Model {}
Provider.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
    allowNull: false
}
},
{
    sequelize, modelName: "provider"
}
)

//Транспортные компании
class TransportCompany extends Sequelize.Model {}
TransportCompany.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "transport_company"
    }
)

// Категории
class Categories extends Sequelize.Model {}
Categories.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "сategories"
    }
)
// Маршруты
class Logistics extends Sequelize.Model {}
Logistics.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: "logistics"
    }
)






/*// Описание пользователя
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
)*/



export default { User, StorageName, StatusName, Order, Objects, Products, Provider, TransportCompany, Categories, Logistics};