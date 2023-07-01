import { MouseEvent, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import modalSlice, { ModalSlice } from "../../../redux/features/modalSlice"
import { setList } from "../../../redux/features/streamersSlice"



export const useVote = () => {
    const {signedIn} = useAppSelector(state=>state.auth)
    const {list} = useAppSelector(state=>state.streamers)
    const dispatch = useAppDispatch()
    

    const handleVote = (e:MouseEvent<SVGSVGElement>, streamerID:number, oldValue:number|null, newValue:number) => {
        e.stopPropagation()
        
        if(signedIn === false){
            // Voting only for users with account
            dispatch(ModalSlice.actions.setModal({
                header: "Account required", text: "This feature is available only to members",
                type: "signin", visible: true}
            ))
            return
        }
        if(oldValue == null){
            console.log("ASDasd")
            // Send request
            if(newValue === 1)  updateStreamer(streamerID, 1, 0, 1)
            else updateStreamer(streamerID, 0, 1, -1)
        }
        else if(oldValue === 1){
            // Send request
            if(newValue === 1) updateStreamer(streamerID, -1, 0, null)
            else updateStreamer(streamerID, -1, 1, -1)
        }
        else if(oldValue === -1){
            if(newValue === 1) updateStreamer(streamerID, 1, -1, 1)
            else updateStreamer(streamerID, 0, -1, null)
        }
    }

    const updateStreamer = (streamerID:number, up:number, down: number, voteValue:number | null) => {
        const tmp = [...list]
        console.log(tmp)
        const streamer = tmp.find(s => s.id === streamerID)
        const index = tmp.indexOf(streamer!)
       
        tmp[index] = {
            ...tmp[index],
            upvotes: tmp[index].upvotes + up,
            downvotes: tmp[index].downvotes + down,
            voteValue: voteValue
        }
    
        dispatch(setList(tmp));
    }

    return {
        handleVote
    }
}