import { useState } from "react"
import axios, { AxiosError } from "axios"
import { endpoints } from "../../config/requests"
import { useAppDispatch } from "../../redux/store"
import { setModal, setModalHeader, setModalText, setModalType, setModalVisible } from "../../redux/features/modalSlice"
import { useNavigate } from "react-router"

export type credentials = {
    email: string
    password: string
}

export const useSignIn = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })


    const handleCredentialsChange = (key: string, value: string) => {
        const tmp = {...credentials}
        tmp[key as keyof credentials] = value
        setCredentials(tmp)
    }

    const handleSubmit = async () => {
        try{
            const res = await axios.post(endpoints.signin, credentials)
            if(res.status === 200){
                localStorage.setItem("token", res.data.token)
                dispatch(setModal({
                    header: "Success",
                    text: "You are now signed in. Experience all features!",
                    type: "info",
                    visible: true
                }))
                navigate("/")
            }
        }catch(err){
            if(axios.isAxiosError(err)){
                console.log(err.response)
                dispatch(setModal({
                    header: "Sign in failed!",
                    text: err.response?.data.message,
                    type: "info",
                    visible: true
                }))
            }
        }
    }

    return {
        credentials,
        handleCredentialsChange,
        handleSubmit
    }
}