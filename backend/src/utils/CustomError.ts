import { ValidationError } from "express-validator"

export class CustomError extends Error{
    public  statusCode: number | null = null
    public data: ValidationError[]

    constructor(msg: string){
        super(msg)
    }
}