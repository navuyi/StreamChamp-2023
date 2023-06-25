import { Router } from "express";
import * as streamerController from "../controllers/streamer"
import { streamerValidator } from "../validators/streamerValidator";

const router = Router()

router.post("/", streamerValidator, streamerController.postStreamer)
router.get("/", streamerController.getStreamer)


export default router