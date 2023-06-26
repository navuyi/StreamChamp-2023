import { DataTypes, InferAttributes, InferCreationAttributes, Model, NOW } from "sequelize";
import db from "../config";
import { Optional } from "sequelize";


export interface IUser {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
}

export class User extends Model<IUser> {
    declare id: number
    declare firstName: string
    declare lastName: string
    declare email: string
    declare password: string
}

User.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false}
}, {sequelize: db, tableName: "User", modelName: 'User'})




