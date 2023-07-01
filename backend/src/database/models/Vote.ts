import { DataTypes, Model, NOW } from "sequelize";
import db from "../config";
import { User } from "./User";
import { Streamer } from "./Streamer";
import seeder from "../seeders/voteSeeder"

export interface IVote {
    id: number
    value: boolean
    userID: number
    streamerID: number
}

export class Vote extends Model<IVote>{
    declare id: number
    declare value: boolean
    declare userID: number
    declare streamerID: number
}

Vote.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.BOOLEAN, allowNull: false},
    userID: {type: DataTypes.INTEGER, allowNull: false},
    streamerID: {type: DataTypes.INTEGER, allowNull: false}
}, {sequelize: db, tableName: "Vote", modelName: 'Vote'})

User.belongsToMany(Streamer, {through: Vote, foreignKey: {name: "userID", allowNull: false}})
Streamer.belongsToMany(User, {through: Vote, foreignKey: {name: "streamerID", allowNull: false}})

Vote.afterSync(async () => {
    process.env.NODE_ENV === "test" ? null : seeder.up()
})

