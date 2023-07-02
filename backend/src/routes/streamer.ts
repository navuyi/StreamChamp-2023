import { Router } from "express";
import * as streamerController from "../controllers/streamer/index"
import { getStreamerValidator, postStreamerValidator} from "../validators/streamerValidator";
import { verifyJWT } from "../middleware/auth";
import { getStreamersValidator } from "../validators/streamerValidator";

const router = Router()

router.post("/", verifyJWT, postStreamerValidator, streamerController.postStreamer) // protected
router.get("/page/:page", getStreamersValidator, streamerController.getStreamers)                          
router.get("/:id", getStreamerValidator, streamerController.getStreamer)

export default router