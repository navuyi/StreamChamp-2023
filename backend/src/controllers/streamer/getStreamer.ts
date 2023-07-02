import { validationResult } from "express-validator"
import { CustomError } from "../../utils/CustomError"
import { Request, Response, NextFunction} from "express"
import { Streamer } from "../../database/models/Streamer"
import { getUserIDFromJWT } from "../../utils/getUserFromJWT"
import db from "../../database/config"
import { QueryTypes } from "sequelize"

export const getStreamer = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Parameters incorrect", 400, errors.array()))
    }
    
    try{
        const userID = getUserIDFromJWT(req)
        const id = req.params.id
        let streamer

        if(userID){
            streamer = (await db.query(`SELECT s.* , v.value as voteValue FROM streamer s LEFT JOIN vote v ON v.streamerID = s.id AND v.userID = ${userID} WHERE s.id=:id`, {replacements: {id: id}, type: QueryTypes.SELECT}))[0]
        }else{
            streamer = await Streamer.findByPk(id)
        }
        if(!streamer) return next(new CustomError(`Streamer with ID: ${id} does not exist`, 404));
        
        res.status(200).json(streamer)
    }
    catch(err){
        return next(new CustomError(err.message, 500))
    }
}