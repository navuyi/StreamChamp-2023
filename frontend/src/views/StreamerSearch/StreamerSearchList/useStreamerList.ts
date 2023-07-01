import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector} from "../../../redux/store"
import { SERVER_BASE, endpoints } from "../../../config/requests"
import axios from "axios"
import { StreamersSlice} from "../../../redux/features/streamersSlice"
import io from "socket.io-client"
import { useRef } from "react"

export const useStreamerList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState<number|null>(null)

    const dispatch = useAppDispatch()
    const {list} = useAppSelector(state => state.streamers)
    const listRef = useRef(list); // Create a mutable reference

    useEffect(() => {
        fetchStreamers();
        const socket = io(SERVER_BASE);
      
        socket.on("vote", (data) => {
            const tmp = [...listRef.current];
            const streamerInList = tmp.find((s) => s.id === data.streamer.id)
            if(streamerInList) {
                const index = tmp.indexOf(streamerInList)
                tmp[index] = {
                    ...tmp[index],
                    upvotes: data.streamer.upvotes,
                    downvotes: data.streamer.downvotes,
                };
                dispatch(StreamersSlice.actions.setList(tmp));
          }
        });
      
        return () => {
          console.log("Disconnecting...");
          socket.disconnect();
        };
      }, []);

    // Update the mutable reference when list changes
    useEffect(() => {
        listRef.current = list;
    }, [list]);

    useEffect(() => {
        fetchStreamers()
    }, [currentPage])


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