import TextInput from "../../components/TextInput/TextInput"
import { useAppSelector } from "../../redux/store"
import style from "./style.module.scss"
import { useStreamerForm } from "./useStreamerForm"
import Navbar from "../../components/Navbar/Navbar"
import PlatformPicker from "../../components/PlatformPicker/PlatformPicker"

const StreamerForm= () => {
    const form = useAppSelector(state => state.streamerForm)
    const {handleFormTextFieldChange} = useStreamerForm()

    return(
        <div className={style.createStreamer}>
            <div className={style.container}>
                <span className={style.header}>Add new streamer</span>
                <TextInput label="Nickname" value={form.nickname} _key={"nickname"} handleChange={handleFormTextFieldChange}/>
                <TextInput label="First Name" value={form.firstName} _key={"firstName"} handleChange={handleFormTextFieldChange}/>
                <TextInput label="Last Name" value={form.lastName} _key={"lastName"} handleChange={handleFormTextFieldChange}/>
                <TextInput label="Description" textarea={true} value={form.description} _key={"description"} handleChange={handleFormTextFieldChange}/>
                <PlatformPicker />
            </div>
        </div>
    )
}



export default StreamerForm