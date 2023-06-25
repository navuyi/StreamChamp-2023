import * as express from "express"
import * as cors from "cors"
import * as process from "process"
import urlRouter from "./routes/url"
import streamerRouter from "./routes/streamer"
import { Application } from "express"
import * as http from "http"
import db from "./database/config"


export class App {
    private app: Application | null = null
    private server: http.Server | null = null

    public init = async () : Promise<Application> => {
        this.app = express()
        // Database
        db.sync(process.env.NODE_ENV==="test" ? {force: true} : {alter: true})
        // Cors
        this.app.use(cors({
            origin: ["TODO"]
        }))
        // Request body parser
        this.app.use(express.json())

        // Endpoints
        this.app.use("/yt", urlRouter)
        this.app.use("/streamers", streamerRouter)
        // ... 
        // ...


        // Start http server
        const PORT = process.env.NODE_PORT || 8080;
        this.server = this.app.listen(PORT, () => {
            console.log(`Listening on ${PORT}`);
        });
        
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




