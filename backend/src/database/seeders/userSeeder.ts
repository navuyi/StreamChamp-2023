import * as bcrypt from "bcrypt"
import { User } from "../models/User"

const up = async () => {
    const user1 = {
        email: "joedoe@gmail.com",
        password: await bcrypt.hash("cisco123", 10),
        firstName: "Joe",
        lastName: "Doe"
    }
    const user2 = {
        email: "jackboe@gmail.com",
        password: await bcrypt.hash("cisco123", 10),
        firstName: "Jack",
        lastName: "Boe"
    }
    const user3 = {
        email: "bendover@gmail.com",
        password: await bcrypt.hash("cisco123", 10),
        firstName: "Ben",
        lastName: "Dover"
    }

    await User.create(user1)
    await User.create(user2)
    await User.create(user3)
}

export default {
    up
}