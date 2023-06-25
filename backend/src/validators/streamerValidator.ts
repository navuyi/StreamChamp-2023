import { body } from "express-validator"
import { Sequelize } from "sequelize";
import { Streamer } from "../database/models/Streamer";

export const streamerValidator = [
    body("nickname").trim().notEmpty().withMessage("Nickname is required"),
    body("firstName").trim().notEmpty().withMessage("First name is required"),
    body("lastName").trim().notEmpty().withMessage("First name is required"),
    body("description").trim().notEmpty().withMessage("Description is required"),
    body("description").isLength({max: 2048}).withMessage("Description must be shorter than 2048 characters"),

    body("nickname").custom(async (value:string) => {
        const foundStreamer = await Streamer.findOne({
            where: Sequelize.where(
              Sequelize.fn("lower", Sequelize.col("nickname")), // <-- lowercased nickname from database
              Sequelize.fn("lower", value) // <-- lowercased value
            )
        });
        if(foundStreamer != null){
            throw new Error(`Streamer ${value} already exists`)
        }
    }).withMessage("Streamer with provided nickname already exists")
    
]