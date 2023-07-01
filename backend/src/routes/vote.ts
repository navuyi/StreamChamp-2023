import { Router } from "express";
import * as voteController from "../controllers/vote"



const router = Router()

router.put("/",  voteController.putVote)
// More...

export default router