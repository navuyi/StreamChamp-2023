import { useAppDispatch, useAppSelector } from "../redux/store";
import { useRef, useEffect } from "react";
import { StreamersSlice } from "../redux/features/streamersSlice";

export const useSocket = () => {
    const {list} = useAppSelector(state=>state.streamers)
    const listRef = useRef(list)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        listRef.current = list;
    }, [list]);

    const handleNewVote = (data:any) => {
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
    }

    const handleNewStreamer = (data:any) => {
        const tmp = [...listRef.current];
        const update = [{...data.streamer, new:true}].concat(tmp)
        dispatch(StreamersSlice.actions.setList(update))
    }

    return {
        handleNewVote,
        handleNewStreamer
    }
}