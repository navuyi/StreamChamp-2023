import { useEffect, useState } from "react"
import style from "./style.module.scss"


const Dropdown = () => {
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        
    }, [active])

    const handleDropdownOpen = () => {
        setActive(prev => !prev)
    }

    return(
        <div className={style.dropdown}>
            <div className={style.button} onClick={handleDropdownOpen}>

            </div>
            <div className={style.content} data-active={active} onMouseLeave={() => setActive(false)}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}



export default Dropdown