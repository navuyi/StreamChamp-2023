import db from "../database/config"
import { SignInRequestBody, SignUpRequestBody } from "../types/authentication.type"
import { User } from "../database/models/User"

import * as request from "supertest"
import * as bcrypt from "bcrypt"
import { app } from "./index.test"

describe("POST /auth/signin", () => {
    beforeAll(async () => {
        await db.sync({force: true})

        // Create test user
        const userData : SignUpRequestBody = {
            email: "joedoe@gmail.com",
            firstName: "Joe",
            lastName: "Doe",
            password: await bcrypt.hash("cisco123", 10),
            passwordRepeat: await bcrypt.hash("cisco123", 10)
        }
        await User.create(userData)
    })

    it("should sign in and return token along with userID", async () => {
        const signInData : SignInRequestBody = {email: "joedoe@gmail.com", password: "cisco123"}
        const res = await request(app.getApp()).post("/auth/signin").send(signInData)
        expect(res.statusCode).toEqual(200)
        expect("token" in res.body).toBe(true)
        expect("userID" in res.body).toBe(true)
    })

    it("should not sign in due to wrong email", async () => {
        const signInData : SignInRequestBody = {email: "joeDoE@gmail.com", password: "cisco123"}
        const res = await request(app.getApp()).post("/auth/signin").send(signInData)
        expect(res.statusCode).toEqual(400)
    })

    it("should not sign in due to wrong password", async () => {
        const signInData : SignInRequestBody = {email: "joedoe@gmail.com", password: "cis123"}
        const res = await request(app.getApp()).post("/auth/signin").send(signInData)
        expect(res.statusCode).toEqual(401) // <-- invalid authentication credentials
    })
})