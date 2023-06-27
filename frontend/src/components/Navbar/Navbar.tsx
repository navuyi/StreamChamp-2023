
import Dropdown from "../Dropdown/Dropdown"
import style from "./style.module.scss"

const Navbar = () => {
    return(
        <div className={style.navbar}>
            <Dropdown />
            <span className={style.header}>StreamChamp</span>
        </div>
    )
}


export default Navbar