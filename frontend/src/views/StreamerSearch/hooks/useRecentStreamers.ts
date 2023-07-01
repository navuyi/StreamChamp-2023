import axios from "axios"
import { useAppDispatch } from "../../../redux/store"
import { endpoints } from "../../../config/requests"
import { useEffect } from "react"
import { StreamersSlice } from "../../../redux/features/streamersSlice"



export const useRecentStreamers = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
        fetchRecentStreamers()
    }, [])

    const fetchRecentStreamers = async () => {
        try{
            const res = await axios.get(endpoints.streamer.getRecent)
            if(res.status === 200){
                dispatch(StreamersSlice.actions.setRecent(res.data.streamers))
            }
        }catch(err){

        }
    }

    return {
        fetchRecentStreamers
    }
}