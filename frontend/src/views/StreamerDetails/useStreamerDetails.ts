import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { useParams } from "react-router"
import axios, { isAxiosError } from "axios"
import { endpoints } from "../../config/requests"
import { StreamersSlice } from "../../redux/features/streamersSlice"
import { ModalSlice } from "../../redux/features/modalSlice"
import io from "socket.io-client"
import { useSocket } from "../../hooks/useSocket"
import { SERVER_BASE } from "../../config/requests"

export const useStreamerDetails = () => {
    const [index, setIndex] = useState<number|null>(null)
    const {list} = useAppSelector(state => state.streamers)
    const params = useParams()
    const dispatch = useAppDispatch()
    const {handleNewVote} = useSocket()

    useEffect(() => {
        const streamerInList = list.find(s => s.id === Number(params.id))
        if(streamerInList) {
            const idx = [...list].indexOf(streamerInList)
            setIndex(idx)
        }
        else{
            fetchStreamer()
        }

        const socket = io(SERVER_BASE);
        socket.on("vote", (data) => handleNewVote(data));
      
        return () => {
          console.log("Disconnecting...");
          socket.disconnect();
        };
    }, [])

    const fetchStreamer = async () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        if(params.id){
            try{
                const res = await axios.get(endpoints.streamer.getSingle(Number(params.id)), {headers})
                if(res.status === 200){
                    const tmp = [...list]
                    tmp.push(res.data)
                    const index = tmp.indexOf(res.data)
                    dispatch(StreamersSlice.actions.setList(tmp))
                    setIndex(index)
                }
            }catch(err){
                if(isAxiosError(err)){
                    dispatch(ModalSlice.actions.setModal({
                        type: "info",
                        text: `${err.message}`,
                        visible: true,
                        header: "Coult not load streamer info."
                    }))
                }
            }
        }
    }

    return {
        index
    }
}