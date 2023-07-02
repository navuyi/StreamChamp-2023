import { validationResult } from "express-validator"
import { CustomError } from "../../utils/CustomError"
import { Request, Response, NextFunction} from "express"
import { Streamer } from "../../database/models/Streamer"
import { CreateStreamerRequestBody } from "../../types/streamer.type"

import { getSocket } from "../../socket"

export const postStreamer = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new CustomError("Validation failed, data is invalid", 400, errors.array())
        return next(error)
    }
    try{
        const body = req.body as CreateStreamerRequestBody
        const data = {...body, platform: JSON.stringify(body.platform)}
        const newStreamer = await Streamer.create(data)
        getSocket().emit("streamer", {
            streamer: newStreamer
        })
        res.status(201).json({msg: "Streamer added"})
    }catch(err:any){
        const error = new CustomError(err.message, 500)
        return next(error)
    }
}