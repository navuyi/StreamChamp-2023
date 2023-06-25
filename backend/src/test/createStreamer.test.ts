
import * as request from "supertest"
import { app } from "./index.test"
import { CreateStreamerRequestBody } from "../types/streamer.type"
import db from "../database/config"

describe("POST /streamers", () => {

    afterAll(async () => {
        await db.sync({force: true})
    })

    it("should create a new streamer", async () => {
        const data : CreateStreamerRequestBody = {
            firstName: "Felix",
            lastName: "Langyel",
            nickname: "xqc",
            platform: "[Twitch, Kick]",
            description: "Sint nisi consectetur esse dolore tempor quis adipisicing adipisicing ex aute"
        }
        const res = await request(app.getApp()).post("/streamers").send(data)
        expect(res.statusCode).toEqual(201)
    })

    it("should not create streamer with already existing nickname", async () => {
        const data : CreateStreamerRequestBody = {
            firstName: "Felix",
            lastName: "Langyel",
            nickname: "xQc",
            platform: "[Twitch, Kick]",
            description: "Sint nisi consectetur esse dolore tempor quis adipisicing adipisicing ex aute"
        }
        const res = await request(app.getApp()).post("/streamers").send(data)
        expect(res.statusCode).toEqual(400)
    })

    it("should not create streamer without or nickname (or empty string)", async () => {
        const data : CreateStreamerRequestBody = {
            firstName: "Felix",
            lastName: "Langyel",
            nickname: "",
            platform: "[Twitch, Kick]",
            description: "Sint nisi consectetur esse dolore tempor quis adipisicing adipisicing ex aute"
        }

        data.nickname = ""
        const res1 = await request(app.getApp()).post("/streamers").send(data)
        expect(res1.statusCode).toEqual(400)

        delete data.nickname
        const res2 = await request(app.getApp()).post("/streamers").send(data)
        expect(res2.statusCode).toEqual(400)
    })

    it("should create a new streamer", async () => {
        const data : CreateStreamerRequestBody = {
            firstName: "Forsen",
            lastName: "Fors",
            nickname: "forsen",
            platform: "[Twitch]",
            description: "Aliqua est sint nisi aliqua ex cillum dolor consectetur nostrud quis dolor."
        }
        const res = await request(app.getApp()).post("/streamers").send(data)
        expect(res.statusCode).toEqual(201)
    })
})


describe("/GET streamers", () => {
    
})


