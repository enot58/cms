import express from 'express';
import cors from 'cors'
import sequelize from './db.js';
import dotenv from "dotenv";
dotenv.config()
import routes from "./routes/index.js";
const PORT = process.env.PORT;
const app = express();
import Models from './models/models.js'
app.use(cors());
app.use(express.json());




// Здесь подключаем общий роутер
app.use('/api',  routes);





// Слушаем порт сервера
(async () => {
    await sequelize.sync().then( () => [
        app.listen(PORT, function () {
            console.log(`Сервер ожидает подключения...${PORT}`);
            //console.log(path.resolve('static'))
        })
    ]);
})();
