import { validationResult } from "express-validator"
import { CustomError } from "../../utils/CustomError"
import { Request, Response, NextFunction} from "express"
import { Streamer } from "../../database/models/Streamer"
import { getUserIDFromJWT } from "../../utils/getUserFromJWT"
import { User } from "../../database/models/User"
import { GetStreamersResponseBody } from "../../types/streamer.type"
import { Sequelize } from "sequelize"
import db from "../../database/config"
import { off } from "process"

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
        let meta;
        
        if(userID){
            [items, meta] = await db.query(`SELECT s.* , v.value as voteValue FROM streamer s LEFT JOIN vote v ON v.streamerID = s.id AND v.userID = ${userID} LIMIT ${perPage} OFFSET ${offset}`)
        }else{
            items = await Streamer.findAll({offset: offset, limit: perPage})
        }
        
        
        

        const data : GetStreamersResponseBody = {
            streamers: items,
            lastPage: Math.ceil(totalItems/perPage)
        }
        res.status(200).json(data)
    }catch(err){
        return next(new CustomError(err.message, 500))
    }
}