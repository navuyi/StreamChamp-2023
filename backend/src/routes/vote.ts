import { Router } from "express";
import * as voteController from "../controllers/vote"
import { verifyJWT } from "../middleware/auth";
import { voteValidator } from "../validators/voteValidator";



const router = Router()

router.put("/", verifyJWT, voteValidator, voteController.putVote)  // protected
// More...

export default router