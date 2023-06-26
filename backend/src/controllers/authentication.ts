import { Request } from "express"
import { SignInRequestBody, SignUpRequestBody } from "../types/authentication.type"
import { Response } from "express"
import { NextFunction } from "express"
import { validationResult } from "express-validator"
import { User } from "../database/models/User"
import * as bcrypt from "bcrypt"
import { CustomError } from "../utils/CustomError"

const signIn = (req:Request, res:Response, next:NextFunction) => {
    const body = req.body as SignInRequestBody   
}


const signUp = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new CustomError("Validation failed. Account was not created.")
        error.statusCode = 400
        error.data = errors.array()
        return next(error)
    }
    const body = req.body as SignUpRequestBody
    body.password = await bcrypt.hash(body.password, 10)
    await User.create(body)
    res.status(201).json({msg: "Account created"})
}

export {
    signIn,
    signUp
}