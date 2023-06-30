import style from "./style.module.scss"
import { modalComponentProps } from "../../../redux/features/modalSlice"
import { useAppDispatch } from "../../../redux/store"
import { setModalVisible } from "../../../redux/features/modalSlice"
import { useNavigate } from "react-router"

const SignInModal = (props:modalComponentProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClose = () => {
        dispatch(setModalVisible(false))
    }

    const handleNavigate = (dest:string) => {
        dispatch(setModalVisible(false))
        navigate(dest)
    }
    
    return(
        <div className={style.signinModal}>
            <section className={style.section}>
                <header>{props.header}</header>
                <text>{props.text}</text>
                <span><span className={style.link} data-dest="/auth/signin" onClick={(e) => handleNavigate(e.currentTarget.dataset.dest!)}>Sign in</span> to have full control.</span>
                <span>Don't have account yet? <span className={style.link} data-dest="/auth/signup" onClick={(e) => handleNavigate(e.currentTarget.dataset.dest!)}>Sign up here</span></span>
                <button onClick={handleClose}>Dismiss</button>
            </section>
        </div>
    )
}

export default SignInModal