import { useDispatch } from "react-redux"
import { StreamerFormTextAttributes, setDefault, setNickname, setTextProperty } from "../../redux/features/streamerFormSlice"
import axios from "axios"
import { endpoints } from "../../config/requests"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { setModal } from "../../redux/features/modalSlice"



export const useStreamerForm = () => {
    const dispatch = useAppDispatch()
    const form = useAppSelector(state => state.streamerForm)
    dispatch(setNickname)

    const handleFormTextFieldChange = (key: string, value:string) => {
        dispatch(setTextProperty({
            key: key,
            value: value
        }))
    }

    const handleSubmit = async () => {
        try{
            const res = await axios.post(endpoints.streamer.post, form)
            if(res.status === 201){
                dispatch(setModal({
                    header: "New streamer created!",
                    text: "Your favourite streamer has been added. It can now be seen and evaluated by others.",
                    type: "info",
                    visible: true
                }))
                dispatch(setDefault())
            }
        }catch(err){
            if(axios.isAxiosError(err)){
                console.log(err.response)
                let details = ""
                if(err.response?.data.data){
                    details = err.response.data.data[0].msg
                }
                dispatch(setModal({
                    header: "Could not create new streamer",
                    text: err.response?.data.message + " " +details,
                    type: "info",
                    visible: true
                }))
            }
        }
    } 
    

    return {
        handleFormTextFieldChange,
        handleSubmit
    }
}