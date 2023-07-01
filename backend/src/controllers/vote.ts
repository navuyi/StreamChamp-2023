import { validationResult } from "express-validator"
import { NextFunction } from "express"
import { CustomError } from "../utils/CustomError"
import { Request } from "express"
import { Response } from "express"
import { PutVoteRequestBody } from "../types/vote.type"
import { Vote } from "../database/models/Vote"
import { Streamer } from "../database/models/Streamer"
import { getUserIDFromJWT } from "../utils/getUserFromJWT"

const putVote = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Parameters incorrect", 400, errors.array()))
    }
    try{
        const userID = getUserIDFromJWT(req)
        console.log(userID)
        if(!userID){
            return next(new CustomError("Unauthorized", 401))
        }
        const data : PutVoteRequestBody = req.body
        const vote = await Vote.findOne({
            where: {userID: userID, streamerID: data.streamerID}
        })
       
        if(!vote){
            // Vote from the user on the streamer does not exist
            await Vote.create({
                userID: userID,
                streamerID: data.streamerID,
                value: data.value
            })
            if(data.value === 1){
                await Streamer.increment("upvotes", {by: 1, where: {id: data.streamerID}})
            }
            else if(data.value === -1){
                await Streamer.increment("downvotes", {by: 1, where: {id: data.streamerID}})
            }            
        }else{
            // Vote already exists
            const oldValue = vote.value
            const newValue = data.value
            if(oldValue === 1){
                if(newValue === 1){
                    // Remove vote
                    await Vote.destroy({where: {id: vote.id}})
                    // streamer.upvotes --
                    await Streamer.decrement("upvotes", {by: 1, where: {id: data.streamerID}})
                }else if(newValue === -1){
                    // Change vote to false
                    await Vote.update({value: -1}, {where: {id: vote.id}})
                    // streamer.upvotes --
                    await Streamer.decrement("upvotes", {by: 1, where: {id: data.streamerID}})
                    // streamer.downvotes ++
                    await Streamer.increment("downvotes", {by: 1, where: {id: data.streamerID}})
                }
            }else if(oldValue === -1){
                if(newValue === 1){    
                    // Change vote to true
                    await Vote.update({value: 1}, {where: {id: vote.id}})
                    // streamer.upvotes ++
                    await Streamer.increment("upvotes", {by: 1, where: {id: data.streamerID}})
                    // streamer.downvotes --
                    await Streamer.decrement("downvotes", {by: 1, where: {id: data.streamerID}})
                }else if(newValue === -1){
                    // Remove vote
                    await Vote.destroy({where: {id: vote.id}})
                    // streamer.downvotes --
                    await Streamer.decrement("downvotes", {by: 1, where: {id: data.streamerID}})
                }
            }
        }
        res.status(200).json()
    }catch(err){
        return next(new CustomError(err.message, 500))
    }
}




export {
    putVote
}