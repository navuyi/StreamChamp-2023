import { useEffect, useState } from "react"
import style from "./style.module.scss"
import { useNavigate } from "react-router"
import { useRef } from "react"

const Dropdown = () => {
    const [active, setActive] = useState<boolean>(false)
    const navigate = useNavigate()
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
          ) {
            setActive(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

    const handleNavigate = (dest:string) => {
        navigate(dest)
    }

    const handleDropdownOpen = () => {
        setActive(prev => !prev)
    }

    return(
        <div className={style.dropdown} ref={dropdownRef}>
            <div className={style.button} onClick={handleDropdownOpen}></div>
            <div className={style.content} data-active={active} onMouseLeave={() => setActive(false)}>
                <a data-dest={"/"} onClick={(e) => handleNavigate(e.currentTarget.dataset.dest!)}>Home</a>
                <a data-dest={"/streamer/create"} onClick={(e) => handleNavigate(e.currentTarget.dataset.dest!)}>Add streamer</a>
                <a data-dest={"/streamer/search"} onClick={(e) => handleNavigate(e.currentTarget.dataset.dest!)}>Search streamers</a>
                <a data-dest={"/auth/signin"} onClick={(e) => handleNavigate(e.currentTarget.dataset.dest!)}>Sign In</a>
                <a data-dest={"/auth/signup"} onClick={(e) => handleNavigate(e.currentTarget.dataset.dest!)}>Sign Up</a>
            </div>
        </div>
    )
}



export default Dropdown