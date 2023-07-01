import { validationResult } from "express-validator"
import { NextFunction } from "express"
import { CustomError } from "../utils/CustomError"
import { Request } from "express"
import { Response } from "express"
import { PostVoteRequestBody } from "../types/vote.type"
import { Vote } from "../database/models/Vote"

const postVote = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Parameters incorrect", 400, errors.array()))
    }
    try{
        const data : PostVoteRequestBody = req.body
        await Vote.create(data)
        console.log(data)
    }catch(err){
        return next(new CustomError(err.message, 500))
    }


    res.status(200).json()
}




export {
    postVote
}