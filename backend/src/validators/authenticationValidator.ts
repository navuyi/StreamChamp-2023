import { body } from "express-validator"
import { SignInRequestBody } from "../types/authentication.type"
import { User } from "../database/models/User"


export const signUpValidator = [
    body("firstName").trim().notEmpty().withMessage("First name is required"),
    body("lastName").trim().notEmpty().withMessage("Last name is required"),

    // Validate password
    body("password").trim().notEmpty().withMessage("Password is required"),
    body("passwordRepeat").trim().notEmpty().withMessage("Repeated password is required"),
    body("passwordRepeat").custom((value:string, {req}) => {
        if(value !== req.body.password){
            throw new Error("Passwords do not match")
        }
        return true
    }).withMessage("Passwords do not match"),
    
    // Validate email
    body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email address")
    .normalizeEmail().custom(async (value:string) => {
        const user = await User.findOne({where: {email: value.toLowerCase()}})
        if(user){
            throw new Error("Account already exists")
        }
    }).withMessage("Account already exists")
]