import style from "./style.module.scss"

type props = {
    label: string
    value: string
    _key: string
    options: Array<[string, any]>
}

const Select = (props:props) => {

    return(
        <div className={style.selectContainer}>
            <label>{props.label}</label>
            <select value={props.value} className={style.select}>
                {
                    props.options.map((option, index) => {
                        return <option key={index} value={option[0]}>{option[1]}</option>
                    })
                }
            </select>
        </div>
        
    )
}


export default Select