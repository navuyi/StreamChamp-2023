import { NextFunction } from "express";
import { Request } from "express";
import { Response } from "express";

const getURL = async (req:Request, res:Response, next:NextFunction) => {
   
    res.json({
        msg: "Hello World"
    })
}




export {
    getURL
}