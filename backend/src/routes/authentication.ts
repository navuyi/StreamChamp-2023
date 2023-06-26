import { Router } from "express";
import * as authController from "../controllers/authentication"
import { signInValidator, signUpValidator } from "../validators/authenticationValidator";


const router = Router()

router.post("/signin", signInValidator, authController.signIn)
router.post("/signup", signUpValidator, authController.signUp)


export default router