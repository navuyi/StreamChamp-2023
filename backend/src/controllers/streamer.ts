import { Request, Response, NextFunction } from "express";
import { CreateStreamerRequestBody } from "../types/streamer.type";
import { validationResult } from "express-validator";
import { Streamer } from "../database/models/Streamer";
import { CustomError } from "../utils/CustomError";

const postStreamer = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new CustomError("Validation failed, data is invalid", 400, errors.array())
        return next(error)
    }
    try{
        const body = req.body as CreateStreamerRequestBody
        await Streamer.create(body)
        res.status(201).json({msg: "Streamer added"})
    }catch(err:any){
        const error = new CustomError(err.message, 500)
        return next(error)
    }
}

const getStreamer = async (req:Request, res:Response, next:NextFunction) => {
    // TODO pagination
    const data = await Streamer.findAll()
    res.json(data)
}

const getStreamerWithID = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) return next(new CustomError("Parameters incorrect", 400, errors.array()))

    try{
        const id = req.params.id
        const streamer = await Streamer.findByPk(id)
        if(!streamer) return next(new CustomError(`Streamer with ID: ${id} does not exist`, 404));
        
        res.status(200).json(streamer.get())
    }
    catch(err){
        return next(new CustomError(err.message, 500))
    }
}

export {
    postStreamer,
    getStreamer,
    getStreamerWithID
}