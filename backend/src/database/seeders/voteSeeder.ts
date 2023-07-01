
import * as bcrypt from "bcrypt"

import { Vote } from "../models/Vote"

import streamerSeeder from "./streamerSeeder"
import userSeeder from "./userSeeder"

const up = async () => {
    await userSeeder.up()
    await streamerSeeder.up()

    const vote1 = {
        value: 1,
        userID: 1,
        streamerID: 1
    }
    const vote2 = {
        value: 1,
        userID: 1,
        streamerID: 2
    }
    const vote3 = {
        value:-1,
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