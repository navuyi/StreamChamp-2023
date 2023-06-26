import db from "../database/config"
import { Streamer } from "../database/models/Streamer"
import * as request from "supertest"
import { app } from "./index.test"

describe("Tests getting details of streamer with ID", () => {
    beforeAll(async () => {
        await db.sync({force: true})

        // Add streamer to database
        await Streamer.create({
            firstName: "Felix",
            lastName: "Langyel",
            nickname: "xqc",
            platform: "[Twitch, Kick]",
            description: "Proident amet nisi tempor ipsum sunt dolor excepteur cillum voluptate cillum ut proident. Eiusmod est deserunt duis eiusmod dolor ullamco qui."
        })
    })

    it("should return streamer with ID = 1", async () => {
        const id = 1
        const res = await request(app.getApp()).get(`/streamers/${id}`).send()
        expect(res.statusCode).toEqual(200)
    })

    it("should return 404 for not existing streamer", async () => {
        const id = 99
        const res = await request(app.getApp()).get(`/streamers/${id}`).send()
        expect(res.statusCode).toEqual(404)
    })

    it("should handle when id param is incorrect", async () => {
        const id = "string"
        const res = await request(app.getApp()).get(`/streamers/${id}`).send()
        expect(res.statusCode).toEqual(400)
    })
})