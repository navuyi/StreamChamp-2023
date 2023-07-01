import { validationResult } from "express-validator"
import { CustomError } from "../../utils/CustomError"
import { Request, Response, NextFunction} from "express"
import { Streamer } from "../../database/models/Streamer"
import { getUserIDFromJWT } from "../../utils/getUserFromJWT"
import { User } from "../../database/models/User"

export const getRecentStreamers = async (req: Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Validation error", 400, errors.array()))
    }

    try{
        const userID = getUserIDFromJWT(req)
        let items;
        items = await Streamer.findAll({order: [["createdAt", "DESC"]], limit: 5, include: userID ? [{
            model: User,
            required: false,
            attributes: ["id"],
            where: {
              id: userID
            }
        }] : []})
            
        res.status(200).json({
            streamers: items
        })
    }
    catch(err){
        return next(new CustomError(err.message, 500))
    }
}