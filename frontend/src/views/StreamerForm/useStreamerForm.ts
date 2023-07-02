import { setDefault, setNickname, setTextProperty } from "../../redux/features/streamerFormSlice"
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
            const headers = {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
            const res = await axios.post(endpoints.streamer.post, form, {headers})
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
                dispatch(setModal({
                    header: "Could not create new streamer",
                    text:  err.response ? err.response.data.message + " " + err.response.data.data[0].msg: err.message,
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