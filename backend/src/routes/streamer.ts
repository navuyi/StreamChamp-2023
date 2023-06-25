import { Router } from "express";
import * as streamerController from "../controllers/streamer"
import { createStreamerValidator } from "../validators/streamerValidator";

const router = Router()

router.post("/", createStreamerValidator, streamerController.postStreamer)
router.get("/", streamerController.getStreamer)


export default router