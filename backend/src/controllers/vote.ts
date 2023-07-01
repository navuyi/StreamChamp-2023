import { validationResult } from "express-validator"
import { NextFunction } from "express"
import { CustomError } from "../utils/CustomError"
import { Request } from "express"
import { Response } from "express"
import { PutVoteRequestBody } from "../types/vote.type"
import { Vote } from "../database/models/Vote"
import { where } from "sequelize"
import { Streamer } from "../database/models/Streamer"

const putVote = async (req:Request, res:Response, next:NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return next(new CustomError("Parameters incorrect", 400, errors.array()))
    }
    try{
        const data : PutVoteRequestBody = req.body
        const vote = await Vote.findOne({
            where: {userID: data.userID, streamerID: data.streamerID}
        })
       
        if(!vote){
            // Vote from the user on the streamer does not exist
            await Vote.create({
                userID: data.userID,
                streamerID: data.streamerID,
                value: data.value
            })
            if(data.value === true){
                await Streamer.increment("upvotes", {by: 1, where: {id: data.streamerID}})
            }
            else{
                await Streamer.increment("downvotes", {by: 1, where: {id: data.streamerID}})
            }            
        }else{
            // Vote already exists
            const oldValue = vote.value
            const newValue = data.value
            if(oldValue === true){
                if(newValue === true){
                    // Remove vote
                    await Vote.destroy({where: {id: vote.id}})
                    // streamer.upvotes --
                    await Streamer.decrement("upvotes", {by: 1, where: {id: data.streamerID}})
                }else{
                    // Change vote to false
                    await Vote.update({value: false}, {where: {id: vote.id}})
                    // streamer.upvotes --
                    await Streamer.decrement("upvotes", {by: 1, where: {id: data.streamerID}})
                    // streamer.downvotes ++
                    await Streamer.increment("downvotes", {by: 1, where: {id: data.streamerID}})
                }
            }else if(oldValue === false){
                if(newValue === true){    
                    // Change vote to true
                    await Vote.update({value: true}, {where: {id: vote.id}})
                    // streamer.upvotes ++
                    await Streamer.increment("upvotes", {by: 1, where: {id: data.streamerID}})
                    // streamer.downvotes --
                    await Streamer.decrement("downvotes", {by: 1, where: {id: data.streamerID}})
                }else{
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