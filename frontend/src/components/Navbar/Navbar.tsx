
import { useSignOut } from "../../hooks/useSignOut"
import { useAppSelector } from "../../redux/store"
import Dropdown from "../Dropdown/Dropdown"
import NavButton from "./NavButton/NavButton"
import style from "./style.module.scss"

const Navbar = () => {
    const {signedIn} = useAppSelector(state => state.auth)
    const {signOut} = useSignOut()

    return(
        <div className={style.navbar}>
            <section className={style.navSection}> 
                <Dropdown />
                <span className={style.header}>StreamChamp</span>
            </section>
            <section className={style.navButtonSection}>
                <section className={style.navSection}> 
                    <NavButton to="/" label="Home" />
                    {
                        signedIn ? <NavButton to="/streamer/create" label="Add streamer" /> : null
                    }
                    <NavButton to="/streamer/search" label="Search streamers" />
                </section>
                {
                    !signedIn ? 
                    <section className={style.navSection}> 
                        <NavButton to="/auth/signin" label="Sign In" />
                        <NavButton to="/auth/signup" label="Sign Up" />
                    </section> : null
                }
                {
                    signedIn ? 
                    <section className={style.navSection}> 
                        <NavButton to="/" label="Sign out" onClick={signOut}/>
                    </section> : null
                }
            </section>
        </div>
    )
}


export default Navbar