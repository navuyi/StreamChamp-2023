import { validationResult } from "express-validator"
import { CustomError } from "../../utils/CustomError"
import { Request, Response, NextFunction} from "express"
import { Streamer } from "../../database/models/Streamer"

export const getStreamer = async (req:Request, res:Response, next:NextFunction) => {
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