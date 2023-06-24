import { Sequelize, DataTypes, Model, NOW } from "sequelize";
import db from "../config";
import { User } from "./User";
import { Streamer } from "./Streamer";
import { ForeignKey } from "sequelize-typescript";

export class Vote extends Model{}

Vote.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, allowNull: false, validate: {isIn: [["upvote", "downvote"]]}},
    user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: User, key: "id"}},
    streamer_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: Streamer, key: "id"}},
}, {sequelize: db, tableName: "Vote", modelName: 'Vote'})


User.belongsToMany(Streamer, {through: Vote, foreignKey: "user_id"})
Streamer.belongsToMany(User, {through: Vote, foreignKey: "streamer_id"})
