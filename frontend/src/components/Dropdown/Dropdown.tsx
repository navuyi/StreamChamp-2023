

import style from "./style.module.scss"


const Dropdown = () => {
    
    return(
        <div className={style.container}>
            <div className={style.button}>

            </div>
            <div className={style.content} >
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}



export default Dropdown