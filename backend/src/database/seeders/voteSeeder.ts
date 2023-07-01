
import * as bcrypt from "bcrypt"
import { User } from "../models/User"
import { Streamer } from "../models/Streamer"
import { Vote } from "../models/Vote"

const up = async () => {
    const userData = {
        email: "buckcompton@gmail.com",
        password: await bcrypt.hash("cisco123", 10),
        firstName: "Buck",
        lastName: "Compton"
    }

    const streamerData = {
        firstName: "Jack",
        lastName: "Sparrow",
        nickname: "sackjarrow",
        platform: "[Kick]",
        description: "Do anim ipsum ullamco elit sit id sint voluptate veniam consectetur mollit. Proident reprehenderit in consequat irure labore ea quis consectetur ipsum in ex."
    }
    await User.create(userData)
    await Streamer.create(streamerData)

    const vote1 = {
        value: true,
        userID: 1,
        streamerID: 8
    }
    const vote2 = {
        value: true,
        userID: 1,
        streamerID: 5
    }
    const vote3 = {
        value: true,
        userID: 1,
        streamerID: 3
    }
    await Vote.create(vote1)
    await Vote.create(vote2)
    await Vote.create(vote3)
}

export default {
    up
}