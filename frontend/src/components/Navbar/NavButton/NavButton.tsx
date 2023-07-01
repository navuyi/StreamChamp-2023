
import style from "./style.module.scss"
import { useNavigate } from "react-router"
import { useLocation } from "react-router"

type props = {
    to: string
    label: string
    onClick?: () => void
}
const NavButton = (props:props) => {
    const navigate = useNavigate()
    const location = useLocation()

    const isActive = location.pathname === props.to

    const handleClick = () => {
        if(props.onClick){
            props.onClick()
        }
        navigate(props.to)
    }

    return(
        <div className={style.navButton} onClick={handleClick} data-active={isActive}>
            {props.label}
        </div>
    )
}

export default NavButton