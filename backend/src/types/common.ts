import { ValidationError } from "express-validator"

export type ErrorResponseBody = {
    message: string
    data: ValidationError[]
}

export type PostResponseBody = {
    // TODO
}

export type GetResponseBody = {
    // TODO
}