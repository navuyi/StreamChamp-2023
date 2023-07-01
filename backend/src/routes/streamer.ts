import { Router } from "express";
import * as streamerController from "../controllers/streamer/index"
import { getStreamerValidator, handleValidationErrors, postStreamerValidator} from "../validators/streamerValidator";
import { verifyJWT } from "../middleware/auth";

const router = Router()

router.post("/", verifyJWT, postStreamerValidator, streamerController.postStreamer) // protected
router.get("/page/:page", streamerController.getStreamers)                          
router.get("/:id", getStreamerValidator, streamerController.getStreamer)

export default router