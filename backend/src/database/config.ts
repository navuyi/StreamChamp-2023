import { Sequelize } from "sequelize";
import * as process from "process"

const storage = process.env.DB_STORAGE || "database.sqlite"
const db = new Sequelize({
    dialect: "sqlite",
    storage: storage,
    logging: false
})

export default db