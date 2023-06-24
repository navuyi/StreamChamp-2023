import * as express from "express"
import * as cors from "cors"
import urlRouter from "./routes/url"
import db from "./database/config"
import { Vote } from "./database/models/Vote"
import { Streamer } from "./database/models/Streamer"
import { where } from "sequelize"
import { User } from "./database/models/User"
const app = express()
//Streamer.belongsToMany(User, {through: UserStreamerVotes})
//User.belongsToMany(Streamer, {through: UserStreamerVotes})

db.sync({force: true}).then(async () => {
   
    await Streamer.create({
        firstName: "s",
        lastName: "sds",
        nickname: "f",
        platform: "f",
        description: "d"
    })
    await Streamer.create({
        firstName: "sdddd",
        lastName: "sds",
        nickname: "fddd",
        platform: "f",
        description: "d"
    })
    await User.create({
        firstName: "d",
        lastName: "d",
        email: "d@wp.pl",
        password: "d"
    })
    await User.create({
        firstName: "d",
        lastName: "d",
        email: "d@wsdsdp.pl",
        password: "d"
    })

    const vote = await Vote.create({
        value: "upvote",
        user_id: 1,
        streamer_id: 1
    })
    const voste = await Vote.create({
        value: "downvote",
        user_id: 1,
        streamer_id: 2
    })
    const voasdste = await Vote.create({
        value: "downvote",
        user_id: 2,
        streamer_id: 2
    })
    const voasdsdste = await Vote.create({
        value: "downvote",
        user_id: 2,
        streamer_id: 1
    })
})

app.use(cors({
    origin: ["TODO"]
}))
app.use("/yt", urlRouter)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})