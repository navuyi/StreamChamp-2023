import { Request, Response, NextFunction } from "express";
import { CreateStreamerRequestBody } from "../types/streamer.type";
import { validationResult } from "express-validator";
import { Streamer } from "../database/models/Streamer";
import { CustomError } from "../utils/CustomError";

const postStreamer = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new CustomError("Validation failed, data is invalid")
        error.statusCode = 400
        error.data = errors.array()
        return next(error)
    }
    // Add streamer to database
    const body = req.body as CreateStreamerRequestBody
    await Streamer.create(body)
    res.status(201).json({msg: "Streamer added"})
}

const getStreamer = async (req:Request, res:Response, next:NextFunction) => {
    const data = await Streamer.findAll()
    res.json(data)
}

export {
    postStreamer,
    getStreamer
}