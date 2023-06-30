import { useState } from "react"
import axios from "axios"
import { endpoints } from "../../config/requests"
import { useDispatch } from "react-redux"
import { setModal } from "../../redux/features/modalSlice"
import { useNavigate } from "react-router"

type form = {
    firstName: string
    lastName: string
    email: string
    password: string
    passwordRepeat: string
}

export const useSignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState<form>({
        firstName: "",
        lastName: "",
        password: "",
        passwordRepeat: "",
        email: ""
    })

    const handleFormFieldChange = (key:string, value:string) => {
        const tmp = {...form}
        tmp[key as keyof form] = value
        setForm(tmp)
    }

    const handleSubmit = async () => {
        try{
            const res = await axios.post(endpoints.signup, form)
            if(res.status === 201){
                localStorage.setItem("token", res.data.token)
                dispatch(setModal({
                    header: "Account created",
                    text: "You can now log in to have the full experience.",
                    type: "info",
                    visible: true
                }))
                navigate("/auth/signin")
            }
        }catch(err){
            if(axios.isAxiosError(err)){
                console.log(err.response)
                let details = ""
                if(err.response?.data.data){
                    details = err.response.data.data[0].msg
                }
                dispatch(setModal({
                    header: "Could not create new account",
                    text: err.response?.data.message + " " +details,
                    type: "info",
                    visible: true
                }))
            }
        }
    }



    return {
        form,
        handleFormFieldChange,
        handleSubmit
    }
}