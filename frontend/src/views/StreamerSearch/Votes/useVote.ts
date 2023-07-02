import { MouseEvent} from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import { ModalSlice } from "../../../redux/features/modalSlice"
import { setList } from "../../../redux/features/streamersSlice"
import axios from "axios"
import { endpoints } from "../../../config/requests"
import {PutVoteRequestBody} from "@backend/types/vote.type"


export const useVote = () => {
    const {signedIn} = useAppSelector(state=>state.auth)
    const {list} = useAppSelector(state=>state.streamers)
    const dispatch = useAppDispatch()
    
    const handleVote = async (e:MouseEvent<SVGSVGElement>, streamerID:number, oldValue:number|null, newValue:number) => {
        e.stopPropagation()
        if(signedIn === false){
            // Voting only for users with account
            dispatch(ModalSlice.actions.setModal({
                header: "Account required", text: "This feature is available only to members",
                type: "signin", visible: true}
            ))
            return
        }

        const data : PutVoteRequestBody = {
            value: newValue,
            streamerID: streamerID
        }
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        if(oldValue == null){
            if(newValue === 1)  updateStreamer(streamerID, 1, 0, 1)
            else updateStreamer(streamerID, 0, 1, -1)
        }
        else if(oldValue === 1){
            if(newValue === 1) updateStreamer(streamerID, -1, 0, null)
            else updateStreamer(streamerID, -1, 1, -1)
        }
        else if(oldValue === -1){
            if(newValue === 1) updateStreamer(streamerID, 1, -1, 1)
            else updateStreamer(streamerID, 0, -1, null)
        }

        try{
            const res = await axios.put(endpoints.vote.put, data, {headers})
            if(res.status !== 200){
               throw new Error("Could not save your vote.")
            }
        }
        catch(err){
            dispatch(ModalSlice.actions.setModal({
                type: "info",
                header: "Your vote could not be saved!",
                text: "There might be a problem with your Internet connection or our server and as a result your vote has not been saved.",
                visible: true
            }))
        }        
    }

    const updateStreamer = (streamerID:number, up:number, down: number, voteValue:number | null) => {
        const updatedList = list.map((streamer) => {
            if (streamer.id === streamerID) {
                return {
                    ...streamer,
                    upvotes: streamer.upvotes + up,
                    downvotes: streamer.downvotes + down,
                    voteValue: voteValue,
                };
            }
            return streamer;
        })
        dispatch(setList(updatedList));
    }

    return {
        handleVote
    }
}