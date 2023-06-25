import { DataTypes, Model, NOW } from "sequelize";
import db from "../config";
import { User } from "./User";
import { Streamer } from "./Streamer";

export interface IVote {
    id: number,
    value: "upvote" | "downvote",
    userID: number,
    streamerID: number
}

export class Vote extends Model<IVote>{}

Vote.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false, validate: {isIn: [["upvote", "downvote"]]}},
    userID: {type: DataTypes.INTEGER, allowNull: false, references: {model: User, key: "id"}},
    streamerID: {type: DataTypes.INTEGER, allowNull: false, references: {model: Streamer, key: "id"}},
}, {sequelize: db, tableName: "Vote", modelName: 'Vote'})

User.belongsToMany(Streamer, {through: Vote, foreignKey: "userID"})
Streamer.belongsToMany(User, {through: Vote, foreignKey: "streamerID"})
