import { body, param } from "express-validator"
import { Sequelize } from "sequelize";
import { Streamer } from "../database/models/Streamer";
import { AvailableStreamingPlatforms, StreamingPlatform } from "../types/streamer.type";
import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/CustomError";

export const postStreamerValidator = [
    body("nickname").trim().notEmpty().withMessage("Nickname is required."),
    body("firstName").trim().notEmpty().withMessage("First name is required."),
    body("lastName").trim().notEmpty().withMessage("First name is required."),
    body("description").trim().notEmpty().withMessage("Description is required."),
    body("description").isLength({max: 2048}).withMessage("Description must be shorter than 2048 characters."),
    body("platform").isArray({min: 1}).withMessage("At least one streaming platform must be provided.").custom((arr:string[]) => {
        if(arr.some(item => AvailableStreamingPlatforms.includes(item as StreamingPlatform) === false)){
            throw new Error("Incorrect streaming platform.")
        } 
        return true
    }).withMessage("Streaming platform is incorrect."),

    body("nickname").custom(async (value:string) => {
        const foundStreamer = await Streamer.findOne({
            where: Sequelize.where(
              Sequelize.fn("lower", Sequelize.col("nickname")), // <-- lowercased nickname from database
              Sequelize.fn("lower", value) // <-- lowercased value
            )
        });
        if(foundStreamer != null){
            throw new Error(`Streamer ${value} already exists.`)
        }
        return true
    }).withMessage("Streamer with provided nickname already exists.")   
]

export const getStreamerValidator =[
    param("id").trim().notEmpty().isInt().withMessage("Streamer ID is incorrect.")
]

export const getStreamersValidator = [
    param("page").trim().notEmpty().isInt().withMessage("Page number is incorrect.")
]

