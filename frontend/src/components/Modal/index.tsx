import { useAppSelector } from "../../redux/store"
import InfoModal from "./InfoModal/InfoModal"
import SignInModal from "./SignInModal/SignInModal"
import { createPortal } from "react-dom"



const Modal = () => {
    const {type, visible, text, header} = useAppSelector(state => state.modal)

    if(visible === false){
        return null
    }
    else{
        let component 
        switch(type){
            case "info":
                component = <InfoModal header={header} text={text}/>
                break
            case "signin":
                component = <SignInModal header={header} text={text}/>
                break
            default:
                component = null
        }
        return createPortal(component, document.getElementById("root")!)
    }
}


export default Modal