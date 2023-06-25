import { Request } from "express"
import { SignInRequestBody, SignUpRequestBody } from "../types/authentication.type"
import { Response } from "express"
import { NextFunction } from "express"
import { validationResult } from "express-validator"
import { User } from "../database/models/User"

const signIn = (req:Request, res:Response, next:NextFunction) => {
    const body = req.body as SignInRequestBody   
}


const signUp = async (req:Request, res:Response, next:NextFunction) => {
    const body = req.body as SignUpRequestBody
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json(errors)
        return
    }
    await User.create(body)
    res.status(201).json({msg: "Account created"})
}

export {
    signIn,
    signUp
}