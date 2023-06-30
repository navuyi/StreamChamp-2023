import style from "./style.module.scss"
import { modalComponentProps } from "../../../redux/features/modalSlice"
import { useAppDispatch } from "../../../redux/store"
import { setModalVisible } from "../../../redux/features/modalSlice"

const SignInModal = (props:modalComponentProps) => {
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(setModalVisible(false))
    }

    return(
        <div className={style.signinModal}>
            <section className={style.section}>
                <header>{props.header}</header>
                <text>{props.text}</text>
                <span><span className={style.link}>Sign in</span> to have full control.</span>
                <span>Don't have account yet? <span className={style.link}>Sign up here</span></span>
                <button onClick={handleClose}>Dismiss</button>
            </section>
        </div>
    )
}

export default SignInModal