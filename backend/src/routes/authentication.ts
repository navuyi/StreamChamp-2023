import { Router } from "express";
import * as authController from "../controllers/authentication"
import { signUpValidator } from "../validators/authenticationValidator";


const router = Router()

router.post("/signin", authController.signIn)
router.post("/signup", signUpValidator, authController.signUp)


export default router