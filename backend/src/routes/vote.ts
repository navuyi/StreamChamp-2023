import { Router } from "express";
import * as voteController from "../controllers/vote"

const router = Router()

router.post("/",  voteController.postVote)
// More...

export default router