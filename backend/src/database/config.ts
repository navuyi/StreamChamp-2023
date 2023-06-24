import { Sequelize } from "sequelize";
import * as path from "path"

const db = new Sequelize({
    dialect: "sqlite",
    storage: "database.sqlite",
    logging: false
})

export default db