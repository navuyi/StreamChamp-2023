import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector} from "../../../redux/store"
import { SERVER_BASE, endpoints } from "../../../config/requests"
import axios from "axios"
import { StreamersSlice} from "../../../redux/features/streamersSlice"
import io from "socket.io-client"
import { useRef } from "react"
import { useSocket } from "../../../hooks/useSocket"

export const useStreamerList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState<number|null>(null)

    const dispatch = useAppDispatch()
    const {handleNewVote, handleNewStreamer} = useSocket()
   

    useEffect(() => {
        fetchStreamers()
    }, [currentPage])

    useEffect(() => {
        fetchStreamers();
        const socket = io(SERVER_BASE);
        socket.on("vote", (data) => handleNewVote(data))
        socket.on("streamer", (data) => handleNewStreamer(data))

        return () => {
          console.log("Disconnecting...");
          socket.disconnect();
        };
    }, []);

    const fetchStreamers = async () => {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        const res = await axios.get(endpoints.streamer.getMultiple(currentPage), {headers})
        if(res.status === 200){
            setLastPage(res.data.lastPage)
            dispatch(StreamersSlice.actions.setList(res.data.streamers))
        }
    }

    const handlePageChange = (direction:"next" | "prev") => {
        if(direction === "next"){
            if(currentPage === lastPage) return;
            setCurrentPage(prev => prev + 1)
        }else if(direction === "prev"){
            if(currentPage === 1) return;
            setCurrentPage(prev => prev - 1)
        }
    }

    return {
        currentPage, lastPage,
        handlePageChange
    }
}