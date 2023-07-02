
import { SECRET_KEY } from "../config/secret"
import db from "../database/config"
import { Streamer } from "../database/models/Streamer"
import { User } from "../database/models/User"
import * as jwt from "jsonwebtoken"
import * as request from "supertest"
import { app } from "./index.test"
import { CreateStreamerRequestBody } from "../types/streamer.type"
import { PutVoteRequestBody } from "../types/vote.type"
import { Vote } from "../database/models/Vote"


describe("PUT /vote", () => {
    let token : string
    beforeEach(async () => {
        await db.sync({force: true})

        await User.create({
            firstName: "Joe",
            lastName: "Doe",
            email: "joedoe@gmail.com",
            password: "open-psswrd"
        })
    
        await Streamer.create({
            firstName: "Felix",
            lastName: "Langyel",
            nickname: "xqc",
            platform: "[Twitch, Kick]",
            description: "Proident amet nisi tempor ipsum sunt dolor excepteur cillum voluptate cillum ut proident. Eiusmod est deserunt duis eiusmod dolor ullamco qui."
        })

        token = jwt.sign({userID: 1}, SECRET_KEY)
    })

    it("should create new upvote", async () => {
        const data : PutVoteRequestBody = {value: 1, streamerID: 1}
        const res = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${token}`).send(data)
        expect(res.status).toEqual(200)

        const streamer = await Streamer.findByPk(1)
        expect(streamer.upvotes).toBe(1)
    })

    it("should create new down", async () => {
        const data : PutVoteRequestBody = {value: -1, streamerID: 1}
        const res = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${token}`).send(data)
        expect(res.status).toEqual(200)

        const streamer = await Streamer.findByPk(1)
        expect(streamer.upvotes).toBe(0)
        expect(streamer.downvotes).toBe(1)
    })

    it("should not create new vote due to invalid token", async () => {
        const data : PutVoteRequestBody = {value: 1, streamerID: 1}
        const res = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${"invalid token"}`).send(data)
        expect(res.status).toEqual(401)
    })

    it("should not create new vote due to invalid streamer id", async () => {
        const data : PutVoteRequestBody = {value: 1, streamerID: 5} // <-- non existing streamerID
        const res = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${token}`).send(data)
        expect(res.status).toEqual(400)
    })
    it("should create and then delete the upvote", async () => {
        const data : PutVoteRequestBody = {value: 1, streamerID: 1}
        const res1 = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${token}`).send(data)
        expect(res1.status).toEqual(200)
        const res2 = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${token}`).send(data)
        expect(res2.status).toEqual(200)

        const votes = await Vote.findAll({where: {
            userID: 1,
            streamerID: 1
        }})
        expect(votes.length).toBe(0)    
    })  

    it("should upvote and then downvote", async () => {
        const data : PutVoteRequestBody = {value: 1, streamerID: 1}
        const res1 = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${token}`).send(data)
        expect(res1.status).toEqual(200)
        let streamer = await Streamer.findByPk(1)
        expect(streamer.upvotes).toBe(1)

        const res2 = await request(app.getApp()).put("/vote").set("Authorization", `Bearer ${token}`).send({...data, value: -1})
        expect(res2.status).toEqual(200)
        streamer = await Streamer.findByPk(1)
        expect(streamer.downvotes).toBe(1)
        expect(streamer.upvotes).toBe(0)

        const votes = await Vote.findAll({where: {
            userID: 1,
            streamerID: 1
        }})
        expect(votes.length).toBe(1)   
        expect(votes[0].value).toBe(-1) 
    })
})