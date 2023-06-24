


import { Sequelize, DataTypes, Model, NOW } from "sequelize";
import db from "../config";


export class User extends Model{}

User.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false}
}, {sequelize: db, tableName: "User", modelName: 'User'})


