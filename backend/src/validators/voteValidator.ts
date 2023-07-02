

import { body } from "express-validator"
import { Streamer } from "../database/models/Streamer"

export const voteValidator = [
    body("streamerID").notEmpty().isNumeric().withMessage("Streamer ID is required to vote"),
    body("value").notEmpty().isNumeric().isIn([-1, 1]).withMessage("Invalid vote value"),
    body("streamerID").custom(async (value) => {
        const streamer = await Streamer.findByPk(value)
        if(!streamer){
            throw new Error(`Streamer with ID ${value} does not exist`)
        }
        return true
    }).withMessage("Streamer does not exist.")
]