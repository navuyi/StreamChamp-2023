
import Dropdown from "../Dropdown/Dropdown"
import NavButton from "./NavButton/NavButton"
import style from "./style.module.scss"

const Navbar = () => {
    return(
        <div className={style.navbar}>
            <section className={style.navSection}> 
                <Dropdown />
                <span className={style.header}>StreamChamp</span>
            </section>
            <section className={style.navButtonSection}>
                <section className={style.navSection}> 
                    <NavButton to="/" label="Home" />
                    <NavButton to="/streamer/create" label="Add streamer" />
                    <NavButton to="/streamer/search" label="Search streamers" />
                </section>
                <section className={style.navSection}> 
                    <NavButton to="/auth/signin" label="Sign In" />
                    <NavButton to="/auth/signup" label="Sign Up" />
                </section>
            </section>
        </div>
    )
}


export default Navbar