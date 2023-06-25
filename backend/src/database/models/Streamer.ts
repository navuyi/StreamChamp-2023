import { DataTypes, Model, NOW } from "sequelize";
import db from "../config";

export interface IStreamer {
    id: number,
    firstName: string,
    lastName: string,
    upvotes: number,
    downvotes: number,
    description: string,
    nickname: string,
    platform: string,
    profilePicturePath: string | null
}

export class Streamer extends Model<IStreamer>{}

Streamer.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    nickname: {type: DataTypes.STRING, allowNull: false, unique: true},
    upvotes: {type: DataTypes.INTEGER, defaultValue: 0},
    downvotes: {type: DataTypes.INTEGER, defaultValue: 0},
    description: {type: DataTypes.STRING, allowNull: false},
    platform: {type: DataTypes.STRING, allowNull: false},
    profilePicturePath: {type: DataTypes.STRING, allowNull: true, defaultValue: null}
}, {sequelize: db, tableName: "Streamer", modelName: 'Streamer'})

