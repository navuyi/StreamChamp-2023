import * as jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config/secret";
import { Request } from "express";

export const getUserIDFromJWT = (req:Request) =>{
    try{
        const header = req.get("Authorization")
        if(!header) return null;
        else{
            const token = header.split(" ")[1]
            const decoded = jwt.verify(token, SECRET_KEY) as {userID: string, email:string}
            return decoded.userID
        }
    }
    catch(err){
        return null
    }
}