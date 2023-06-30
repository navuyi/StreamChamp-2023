import { modalComponentProps, setModalVisible} from "../../../redux/features/modalSlice"
import { useAppDispatch } from "../../../redux/store"
import style from "./style.module.scss"

const InfoModal = (props:modalComponentProps) => {
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(setModalVisible(false))
    }

    return(
        <div className={style.infoModal}>
            <section className={style.section}>
                <header>{props.header}</header>
                <text>{props.text}</text>
                <button onClick={handleClose}>Continue</button>
            </section>
        </div>
    )
}

export default InfoModal