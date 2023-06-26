import { Request, Response, NextFunction } from "express";
import { CreateStreamerRequestBody, GetStreamersResponseBody } from "../types/streamer.type";
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

const getStreamers = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Validation error", 400, errors.array()))
    }
    const page = Number(req.params.page) || 1
    const perPage = 5
    try{
        const totalItems = await Streamer.count()
        const offset = perPage*(page-1)
        const items = await Streamer.findAll({offset: offset, limit: perPage})

        const data : GetStreamersResponseBody = {
            streamers: items,
            lastPage: Math.ceil(totalItems/perPage)
        }
        res.status(200).json(data)
    }catch(err){
        return next(new CustomError(err.message, 500))
    }
}

const getStreamer = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Parameters incorrect", 400, errors.array()))
    }

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
    getStreamers,
    getStreamer
}