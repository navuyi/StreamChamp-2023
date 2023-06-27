import { useDispatch } from "react-redux"
import { StreamerFormTextAttributes, setNickname, setTextProperty } from "../../redux/features/streamerFormSlice"




export const useStreamerForm = () => {
    const dispatch = useDispatch()
    dispatch(setNickname)

    const handleFormTextFieldChange = (key: StreamerFormTextAttributes, value:string) => {
        dispatch(setTextProperty({
            key: key,
            value: value
        }))
    }
    

    return {
        handleFormTextFieldChange
    }
}