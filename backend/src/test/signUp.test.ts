import db from "../database/config"
import { SignUpRequestBody } from "../types/authentication.type"
import * as request from "supertest"
import { app } from "./index.test"

describe("POST /auth/signup", () => {
    beforeAll(async () => {
        await db.sync({force: true})
    })

    it("should create new user", async () => {
        const data : SignUpRequestBody = {
            email: "joedoe@gmail.com",
            firstName: "Joe",
            lastName: "Doe",
            password: "cisco123",
            passwordRepeat: "cisco123"
        }
        const res = await request(app.getApp()).post("/auth/signup").send(data)
        expect(res.statusCode).toEqual(201)
    })

    it("should not create new user with the same email", async () => {
        const data : SignUpRequestBody = {
            email: "joedoe@gmail.com",
            firstName: "Joe",
            lastName: "Doe",
            password: "cisco",
            passwordRepeat: "cisco"
        }
        const res = await request(app.getApp()).post("/auth/signup").send(data)
        expect(res.statusCode).toEqual(400)
    })

    it("should not create new user - passwords mismatch", async () => {
        const data : SignUpRequestBody = {
            email: "emilburn@gmail.com",
            firstName: "Joe",
            lastName: "Doe",
            password: "cisco123",
            passwordRepeat: "cisco"
        }
        const res = await request(app.getApp()).post("/auth/signup").send(data)
        expect(res.statusCode).toEqual(400)
    })

    it("should not create new user - email invalid", async () => {
        const data : SignUpRequestBody = {
            email: "emilburn$gmail.com",
            firstName: "Joe",
            lastName: "Doe",
            password: "cisco123",
            passwordRepeat: "cisco"
        }
        // Email without @
        let res = await request(app.getApp()).post("/auth/signup").send(data)
        expect(res.statusCode).toEqual(400)

        // Forgot . at the end
        data.email = "emilburnt@gmailcom"
        res = await request(app.getApp()).post("/auth/signup").send(data)
        expect(res.statusCode).toEqual(400)
    })
})