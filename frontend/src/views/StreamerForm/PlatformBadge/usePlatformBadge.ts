import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/store"
import { StreamingPlatform } from "@backend/types/streamer.type"
import { setPlatform } from "../../../redux/features/streamerFormSlice"



export const usePlatformBadge = () => {
    const [selected, setSelected] = useState(false)
    const {platform} = useAppSelector(state => state.streamerForm)
    const dispatch = useAppDispatch()

    const handlePlatformSelect = (selectedPlatform:StreamingPlatform) => {
        const index = platform.indexOf(selectedPlatform)
        const tmp = [...platform]
        if(index !== -1){
            setSelected(false)
            tmp.splice(index, 1)
        }else{
            setSelected(true)
            tmp.push(selectedPlatform)
        }
        dispatch(setPlatform({value: tmp}))
    }

    return {
        selected,
        handlePlatformSelect
    }
}