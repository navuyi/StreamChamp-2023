import { validationResult } from "express-validator"
import { CustomError } from "../../utils/CustomError"
import { Request, Response, NextFunction} from "express"
import { Streamer } from "../../database/models/Streamer"
import { getUserIDFromJWT } from "../../utils/getUserFromJWT"
import { User } from "../../database/models/User"
import { GetStreamersResponseBody } from "../../types/streamer.type"

export const getStreamers = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Validation error", 400, errors.array()))
    }

    try{
        const userID = getUserIDFromJWT(req)
        const page = Number(req.params.page) || 1
        const perPage = 10
        const totalItems = await Streamer.count()
        const offset = perPage*(page-1)
        let items;

        items = await Streamer.findAll({offset: offset, limit: perPage, include: userID ? [{
            model: User,
            required: false,
            attributes: ["id"],
            where: {
              id: userID
            }
        }] : []})
        
        const data : GetStreamersResponseBody = {
            streamers: items,
            lastPage: Math.ceil(totalItems/perPage)
        }
        res.status(200).json(data)
    }catch(err){
        return next(new CustomError(err.message, 500))
    }
}