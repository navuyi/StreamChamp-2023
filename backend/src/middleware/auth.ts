import { SECRET_KEY } from "../config/secret"
import { CustomError } from "../utils/CustomError"
import * as jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"


export const verifyJWT = (req:Request, res:Response, next:NextFunction) => {
    const token = req.get("Authorization")?.split(" ")[1]
    
    if(!token){
        throw new CustomError("Unauthorized. You have to be signed in.", 401)
    }
    try{
        const decoded = jwt.verify(token, SECRET_KEY) as {userID: number, email:string}
        next()
    }catch(error){
        throw new CustomError(error.message, 401)
    }
}


