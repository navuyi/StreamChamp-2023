import { Router } from "express";
import * as voteController from "../controllers/vote"
import { verifyJWT } from "../middleware/auth";



const router = Router()

router.put("/", verifyJWT, voteController.putVote)  // protected
// More...

export default router