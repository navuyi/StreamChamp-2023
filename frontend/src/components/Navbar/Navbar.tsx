
import Dropdown from "../Dropdown/Dropdown"
import NavButton from "./NavButton/NavButton"
import style from "./style.module.scss"

const Navbar = () => {
    return(
        <div className={style.navbar}>
            <div className={style.container}>
                <Dropdown />
                <span className={style.header}>StreamChamp</span>
                <div className={style.navButtonWrapper}>
                    <NavButton to="/" label="Home" />
                    <NavButton to="/streamer/create" label="Add streamer" />
                    <NavButton to="/streamer/search" label="Search streamers" />
                </div>
            </div>
        </div>
    )
}


export default Navbar