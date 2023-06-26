import * as express from "express"
import * as cors from "cors"
import * as process from "process"

import { Application } from "express"
import * as http from "http"
import db from "./database/config"

import urlRouter from "./routes/url"
import streamerRouter from "./routes/streamer"
import authRouter from "./routes/authentication"
import { CustomError } from "./utils/CustomError"
import { Request, Response, NextFunction } from "express"
import { ErrorResponseBody } from "./types/common"

export class App {
    private app: Application | null = null
    private server: http.Server | null = null

    public init = async () : Promise<Application> => {
        this.app = express()
        // Database
        await db.sync(process.env.NODE_ENV==="test" ? {force: true} : {alter: true})

        // Cors
        this.app.use(cors({
            origin: ["TODO"]
        }))
        // Request body parser
        this.app.use(express.json())


        // Endpoints
        this.app.use("/yt", urlRouter)
        this.app.use("/streamers", streamerRouter)
        this.app.use("/auth/", authRouter)
        // ... 
        // ...

        // Global error handling
        this.app.use((error:CustomError, req:Request, res:Response, next:express.NextFunction) => {
            const body : ErrorResponseBody = {
                message: error.message,
                data: error.data
            }
            res.status(error.statusCode || 500).json(body)
        })

        // Start http server
        const PORT = process.env.NODE_PORT || 8080;
        this.server = this.app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`);
        });
        
        return this.app
    }

    public getApp = () : Application => {
        return this.app
    } 

    public close = async () => {
        this.server.close()
    }
}   

if(!process.env.NODE_ENV){
    const app = new App()
    app.init()
}




