import { Router } from "express";
import * as streamerController from "../controllers/streamer/index"
import { createStreamerValidator, getStreamerValidator} from "../validators/streamerValidator";

const router = Router()

router.post("/", createStreamerValidator, streamerController.postStreamer)
router.get("/page/:page", streamerController.getStreamers)
router.get("/recent", streamerController.getRecentStreamers)
router.get("/:id", getStreamerValidator, streamerController.getStreamer)

export default router