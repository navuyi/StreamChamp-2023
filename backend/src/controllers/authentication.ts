import { Request } from "express"
import { SignInRequestBody, SignUpRequestBody } from "../types/authentication.type"
import { Response } from "express"
import { NextFunction } from "express"
import { validationResult } from "express-validator"
import { User } from "../database/models/User"
import * as bcrypt from "bcrypt"
import { CustomError } from "../utils/CustomError"

const signIn = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new CustomError("Provided credentials are invalid", 400, errors.array())
        return next(error)
    }
    try{
        const body = req.body as SignInRequestBody
        const user = await User.findOne({where: {email: body.email}}) // email existing checked in validation
        const passwordMatch = await bcrypt.compare(body.password, user.get().password)
        if(!passwordMatch){
            return next(new CustomError("Wrong password", 401))
        }
        //TODO Generate JSON Web Token
    }catch(err){

    }
}

const signUp = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new CustomError("Validation failed. Account was not created.", 400, errors.array())
        return next(error)
    }
    try{
        const body = req.body as SignUpRequestBody
        body.password = await bcrypt.hash(body.password, 10)
        await User.create(body)
        res.status(201).json({msg: "Account created"})
    }catch(err){
        const error = new CustomError(err.message, 500)
        return next(error)
    }
}

export {
    signIn,
    signUp
}