import { Router } from "express";
import * as streamerController from "../controllers/streamer"
import { createStreamerValidator, getStreamerWithIDValidator} from "../validators/streamerValidator";

const router = Router()

router.post("/", createStreamerValidator, streamerController.postStreamer)
router.get("/", streamerController.getStreamer)
router.get("/:id", getStreamerWithIDValidator, streamerController.getStreamerWithID)

export default router